//文档就绪函数
$(document).ready(function () {
    $("#btn1").click(function () {
        //判断是否为空
        if ($("#textName").val() == "" || $("#textCom").val() == "") {
            alert("昵称和评论不能为空！");
            return true;
        }
        $("#ol").after("<li>昵称:“" + $("#textName").val() + "“的用户说了”" + $("#textCom").val() + "</li>");
    });
});


