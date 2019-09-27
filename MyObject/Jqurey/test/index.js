var Hide;
var Show;
var Toggle
$(document).ready(function () {
    Hide = $("#hide");
    $(Hide).click(function () {
        $("p").hide(500);
    });
    Show = $("#show");
    $(Show).click(function () {
        $("p").show(500);
    });
    Toggle = $("#toogle");
    $(Toggle).click(function () {
        $("p").toggle(500);
    })

});