$(document).ready(function () {
    $("#down").on("click",function () {
        $("#content").slideDown(800);
    });
    $("#up").on("click",function () {
        $("#content").slideUp(800);
    });
    $("#down-up").on("click",function () {
        $("#content").slideToggle(800);
    })
});