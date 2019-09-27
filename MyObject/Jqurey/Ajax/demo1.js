$(document).ready(function () {
    $("button").click(function () {
        $("#div1").load("/try/ajax/demo_test.txt")
    })
});