'use strict';
var url = require('url');
var path = require('path');
var http = require('http');
var fs = require('fs');
var root = path.resolve("./" || ProcessingInstruction.argv[2]);
console.log(root);//打印根目录
var server = http.createServer(function (req, resp) {
    var pathname_route = url.parse(req.url).pathname;
    console.log(pathname_route);
    if (pathname_route == "/createComment"){
        console.log("createComment")
        createComment(req,resp)
    }else if (pathname_route == "/document.html"){
        console.log("readComment");
        readComment(req,resp)
    }else {
        console.log("readComment");
        readComment(req,resp)
    }
});
server.listen(8080,"127.0.0.1");
console.log("Server Is Running: Port=8080");


function createComment(req,resp) {;
    var time = new Date();
    var timestr = time.toLocaleString();
    var timeStr = "<p class='time card-header'>" + timestr + "</p>";
    var getStr = url.parse(req.url).query;
    var query = decodeURI(getStr);
    var newQuery = "<p class='query card-body text-dark'>" + query + "</p>";
    var result = "<div class='card mb-5'>"+ timeStr + newQuery + "</div>";
    fs.writeFile("document.html",result,{
        'flag':'a'
    },function (err) {
        if (err){
            throw err;
        }
        console.log("写入文件成功");
        resp.writeHead(200,{
            'Access-Control-Allow-Headers': 'Conten0t-Type, api_key, Authorization',
            "Access-Control-Allow-Origin": "*",
            "Content-Type": 'text/html;charset=utf8'
        });
        resp.end();
    })
};

function readComment(req,resp) {
    var pathname = url.parse(req.url).pathname;
    var filepath = path.join(root,pathname);
    console.log(filepath);
    fs.stat(filepath,(err,res) => {
        if (err){
            resp.writeHead(404,{
                'Access-Control-Allow-Headers': 'Content-Type, api_key, Authorization',
                "Access-Control-Allow-Origin": "*",
                "Content-Type": 'text/html;charset=utf8'
            });
            console.log("失败");
            resp.end("<h1>404 Not Found</h1>",'utf8');
        }else {
            resp.writeHead(200,{
                'Access-Control-Allow-Headers': 'Content-Type, api_key, Authorization',
                "Access-Control-Allow-Origin": "*",
                "Content-Type": 'text/html;charset=utf8'
            });
            fs.createReadStream(filepath).pipe(resp);
            console.log("数据传递给前台页面")
        }
    });
};
