$(document).ready(function () {
    $("button").on("click",function () {
        /*$("p").hide(1000,function () {
            alert("动画结束，这个方法被称为回调。")*/
        $("p").css("color","red").slideUp(1500).slideDown(1000)
    });
});
