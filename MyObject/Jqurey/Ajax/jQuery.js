function submit() {
    var text = $("input.form-control[type='text']").val();
    $.ajax("http://127.0.0.1:8080/createComment",{
        type:"GET",
        data:text,
        dataType:"text",
        success:function (data) {
            window.location.reload();
        }
    });
}
$(function () {
    $.ajax({
        url:"http://127.0.0.1:8080/document.html",
        type: "GET",
        dataType: "html",
        success:function (data) {
            // var obj=$(data).wrap("<div class='card border-primary mb-3'></div>");
            var obj = $(data);
            console.log($(data));

            // var obj = data.split('#@');
            // var str = '';
            // obj.map(function (i,n) {
            //     str = i + str;
            // });

            let length = obj.length-1;
            for (let i=length;i>=0;i--){
                $("div#obj").before(obj[i])
            }
        }
    })
});