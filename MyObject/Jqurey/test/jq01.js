$(document).ready(function () {
    $("div").on("click",divHeadler);
    $("p").on("click",pHeadler);
    $(this).hide();
});

function divHeadler() {
    console.log("divHeadler")
}
function pHeadler() {
    console.log("pHeadler")
}
function hides() {
    console.log("success!")
}