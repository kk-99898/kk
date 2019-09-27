$(document).ready(function () {
   $("#in").on("click",function () {
       $("#div1").fadeIn(800);
       $("#div2").fadeIn(800);
       $("#div3").fadeIn(800);
   });
    $("#out").on("click",function () {
        $("#div1").fadeOut(800);
        $("#div2").fadeOut(800);
        $("#div3").fadeOut(800);
    });
    $("#toggle").on("click",function () {
        $("#div1").toggle(800);
        $("#div2").toggle(800);
        $("#div3").toggle(800);
    });
});