$(function () {
    $("input").focus(function(){
        $("div.search-area").css("border-bottom","1px solid red");
        $("div.showhide-search").css("background-color","rgba(240, 20, 20, 0.4)");
        $("div.showhide-search i").css("color","#F01414");
        $("div.searchTags a").hide()
    });
    $("input").blur(function () {
        $("div.search-area").css("border-bottom","1px solid #D9DDE1");
        $("div.showhide-search").css("background-color","white");
        $("div.showhide-search i").css("color","#757a7e");
        $("div.searchTags a").show()
    });
    $(".showhide-search").click(function(){
        $("div.search-area").css("border-bottom","1px solid red");
        $("div.showhide-search").css("background-color","rgba(240, 20, 20, 0.4)");
        $("div.showhide-search i").css("color","#F01414");
        $("div.searchTags a").hide();
        $("input").focus()
    });

    $("#shop-cart").mouseover(function () {
        $(".my-cart").css("display","block")
    });
    $("#js-my-cart").mouseout(function () {
        $("#js-my-cart").css("display","none")
    });

    $("#item1").mouseover(function () {
        $("#submenu1").css("display","block");
        $("#item1").addClass("js-menu-item-on")
    });
    $("#item1").mouseout(function () {
        $("#item1").removeClass("js-menu-item-on");
        $("#submenu1").css("display","none")
    });
    $("#submenu1").mouseover(function () {
        $("#item1").addClass("js-menu-item-on");
        $("#submenu1").css("display","block");
    });
    $("#submenu1").mouseout(function () {
        $("#submenu1").css("display","none");
        $("#item1").removeClass("js-menu-item-on")
    });
    $("#item2").mouseover(function () {
        $("#submenu2").css("display","block");
        $("#item2").addClass("js-menu-item-on")
    });
    $("#item2").mouseout(function () {
        $("#item2").removeClass("js-menu-item-on");
        $("#submenu2").css("display","none")
    });
    $("#submenu2").mouseover(function () {
        $("#item2").addClass("js-menu-item-on");
        $("#submenu2").css("display","block");
    });
    $("#submenu2").mouseout(function () {
        $("#submenu2").css("display","none");
        $("#item2").removeClass("js-menu-item-on")
    });
    $("#item3").mouseover(function () {
        $("#submenu3").css("display","block");
        $("#item3").addClass("js-menu-item-on")
    });
    $("#item3").mouseout(function () {
        $("#item3").removeClass("js-menu-item-on");
        $("#submenu3").css("display","none")
    });
    $("#submenu3").mouseover(function () {
        $("#item3").addClass("js-menu-item-on");
        $("#submenu3").css("display","block");
    });
    $("#submenu3").mouseout(function () {
        $("#submenu3").css("display","none");
        $("#item3").removeClass("js-menu-item-on")
    });
    $("#item4").mouseover(function () {
        $("#submenu4").css("display","block");
        $("#item4").addClass("js-menu-item-on")
    });
    $("#item4").mouseout(function () {
        $("#item4").removeClass("js-menu-item-on");
        $("#submenu4").css("display","none")
    });
    $("#submenu4").mouseover(function () {
        $("#item4").addClass("js-menu-item-on");
        $("#submenu4").css("display","block");
    });
    $("#submenu4").mouseout(function () {
        $("#submenu4").css("display","none");
        $("#item4").removeClass("js-menu-item-on")
    });
    $("#item5").mouseover(function () {
        $("#submenu5").css("display","block");
        $("#item5").addClass("js-menu-item-on")
    });
    $("#item5").mouseout(function () {
        $("#item5").removeClass("js-menu-item-on");
        $("#submenu5").css("display","none")
    });
    $("#submenu5").mouseover(function () {
        $("#item5").addClass("js-menu-item-on");
        $("#submenu5").css("display","block");
    });
    $("#submenu5").mouseout(function () {
        $("#submenu5").css("display","none");
        $("#item5").removeClass("js-menu-item-on")
    });
    $("#item6").mouseover(function () {
        $("#submenu6").css("display","block");
        $("#item6").addClass("js-menu-item-on")
    });
    $("#item6").mouseout(function () {
        $("#item6").removeClass("js-menu-item-on");
        $("#submenu6").css("display","none")
    });
    $("#submenu6").mouseover(function () {
        $("#item6").addClass("js-menu-item-on");
        $("#submenu6").css("display","block");
    });
    $("#submenu6").mouseout(function () {
        $("#submenu6").css("display","none");
        $("#item6").removeClass("js-menu-item-on")
    });
    $("#item7").mouseover(function () {
        $("#submenu7").css("display","block");
        $("#item7").addClass("js-menu-item-on")
    });
    $("#item7").mouseout(function () {
        $("#item7").removeClass("js-menu-item-on");
        $("#submenu7").css("display","none")
    });
    $("#submenu7").mouseover(function () {
        $("#item7").addClass("js-menu-item-on");
        $("#submenu7").css("display","block");
    });
    $("#submenu7").mouseout(function () {
        $("#submenu7").css("display","none");
        $("#item7").removeClass("js-menu-item-on")
    });
    $("#sztj1").mouseover(function () {
        $("#wz1").css("color","red")
    });
    $("#sztj1").mouseout(function () {
        $("#wz1").css("color","black")
    });
    $("#sztj2").mouseover(function () {
        $("#wz2").css("color","red")
    });
    $("#sztj2").mouseout(function () {
        $("#wz2").css("color","black")
    });
    $("#sztj3").mouseover(function () {
        $("#wz3").css("color","red")
    });
    $("#sztj3").mouseout(function () {
        $("#wz3").css("color","black")
    });
    $("#sztj4").mouseover(function () {
        $("#wz4").css("color","red")
    });
    $("#sztj4").mouseout(function () {
        $("#wz4").css("color","black")
    });
    $("#sztj5").mouseover(function () {
        $("#wz5").css("color","red")
    });
    $("#sztj5").mouseout(function () {
        $("#wz5").css("color","black")
    });
    $(".icon-feedback").mouseover(function () {
        $(".yj").css("display","block");
        $(".icon-feedback").hide()
    });
    $(".icon-feedback").mouseout(function () {
        $(".yj").css("display","none");
        $(".icon-feedback").show()
    });
    $(".elevator-dist").mouseover(function () {
        $(".yq").css("display","block");
        $(".hb").hide()
    });
    $(".elevator-dist").mouseout(function () {
        $(".yq").css("display","none");
        $(".hb").show()
    });
    $(".elevator-faq").mouseover(function () {
        $(".help").css("display","block");
        $(".icon-ques").hide()
    });
    $(".elevator-faq").mouseout(function () {
        $(".help").css("display","none");
        $(".icon-ques").show()
    });
    $(".elevator-app").mouseover(function () {
        $(".app").css("display","block");
        $(".icon-appdownload").hide()
    });
    $(".elevator-app").mouseout(function () {
        $(".app").css("display","none");
        $(".icon-appdownload").show()
    })
    $(".elevator-weixin").mouseover(function () {
        $(".wx").css("display","block");
        $(".icon-wxgzh").hide()
    });
    $(".elevator-weixin").mouseout(function () {
        $(".wx").css("display","none");
        $(".icon-wxgzh").show()
    })
    $(".elevator-top").mouseover(function () {
        $(".top").css("display","block");
        $(".icon-up2").hide()
    });
    $(".elevator-top").mouseout(function () {
        $(".top").css("display","none");
        $(".icon-up2").show()
    })
    $("#backTop").click(function (){
    let time = setInterval(function () {
        let top = document.documentElement.scrollTop;
        if (top === 0)clearInterval(time);
        else window.scrollTo(0,top-100)
    },10)
    })
    $(".teacher1").mouseover(function () {
        $(".teacher1 .teacher-face").css({
            "width": "60px",
            "height": "60px",
            "left": "125px"
        });
        $(".teacher1 .teacher-name").css("display", "none");
        $(".teacher1 .teacher-title").css("display", "none");
        $(".teacher1").css("background", "white");
        // $(".teacher1 .teacher-msg").css({
        //     "top": "150px"
        // });
        // $(".teacher1 .teacher-msg").animate({top: 65});
        $(".teacher1 .teacher-msg").css({
            "color": "black",
            "height": "168px",
            "top": "65px"
        });
    });

    $(".teacher1").mouseout(function () {
        $(".teacher1 .teacher-face").css({
            "width": "96px",
            "height": "96px",
            "left": "50%"
        });
        $(".teacher1 .teacher-name").css("display", "block");
        $(".teacher1 .teacher-title").css("display", "block");
        $(".teacher1").css("background", "rgba(255, 255, 255, 0.8)");
        $(".teacher1 .teacher-msg").css({
            "color": "#4D555D",
            "height": "72px",
            "top": "0"
        });
    });

    $(".teacher2").mouseover(function () {
        $(".teacher2 .teacher-face").css({
            "width": "60px",
            "height": "60px",
            "left": "125px"
        });
        $(".teacher2 .teacher-name").css("display", "none");
        $(".teacher2 .teacher-title").css("display", "none");
        $(".teacher2").css("background", "white");
        $(".teacher2 .teacher-msg").css({
            "color": "black",
            "height": "168px",
            "top": "65px"
        });
    });

    $(".teacher2").mouseout(function () {
        $(".teacher2 .teacher-face").css({
            "width": "96px",
            "height": "96px",
            "left": "50%"
        });
        $(".teacher2 .teacher-name").css("display", "block");
        $(".teacher2 .teacher-title").css("display", "block");
        $(".teacher2").css("background", "rgba(255, 255, 255, 0.8)");
        $(".teacher2 .teacher-msg").css({
            "color": "#4D555D",
            "height": "72px",
            "top": "0"
        });
    });

    $(".teacher3").mouseover(function () {
        $(".teacher3 .teacher-face").css({
            "width": "60px",
            "height": "60px",
            "left": "125px"
        });
        $(".teacher3 .teacher-name").css("display", "none");
        $(".teacher3 .teacher-title").css("display", "none");
        $(".teacher3").css("background", "white");
        $(".teacher3 .teacher-msg").css({
            "color": "black",
            "height": "168px",
            "top": "65px"
        });
    });

    $(".teacher3").mouseout(function () {
        $(".teacher3 .teacher-face").css({
            "width": "96px",
            "height": "96px",
            "left": "50%"
        });
        $(".teacher3 .teacher-name").css("display", "block");
        $(".teacher3 .teacher-title").css("display", "block");
        $(".teacher3").css("background", "rgba(255, 255, 255, 0.8)");
        $(".teacher3 .teacher-msg").css({
            "color": "#4D555D",
            "height": "72px",
            "top": "0"
        });
    });

    $(".teacher4").mouseover(function () {
        $(".teacher4 .teacher-face").css({
            "width": "60px",
            "height": "60px",
            "left": "125px"
        });
        $(".teacher4 .teacher-name").css("display", "none");
        $(".teacher4 .teacher-title").css("display", "none");
        $(".teacher4").css("background", "white");
        $(".teacher4 .teacher-msg").css({
            "color": "black",
            "height": "168px",
            "top": "65px"
        });
    });

    $(".teacher4").mouseout(function () {
        $(".teacher4 .teacher-face").css({
            "width": "96px",
            "height": "96px",
            "left": "50%"
        });
        $(".teacher4 .teacher-name").css("display", "block");
        $(".teacher4 .teacher-title").css("display", "block");
        $(".teacher4").css("background", "rgba(255, 255, 255, 0.8)");
        $(".teacher4 .teacher-msg").css({
            "color": "#4D555D",
            "height": "72px",
            "top": "0"
        });
    });

    $(".teacher5").mouseover(function () {
        $(".teacher5 .teacher-face").css({
            "width": "60px",
            "height": "60px",
            "left": "125px"
        });
        $(".teacher5 .teacher-name").css("display", "none");
        $(".teacher5 .teacher-title").css("display", "none");
        $(".teacher5").css("background", "white");
        $(".teacher5 .teacher-msg").css({
            "color": "black",
            "height": "168px",
            "top": "65px"
        });
    });

    $(".teacher5").mouseout(function () {
        $(".teacher5 .teacher-face").css({
            "width": "96px",
            "height": "96px",
            "left": "50%"
        });
        $(".teacher5 .teacher-name").css("display", "block");
        $(".teacher5 .teacher-title").css("display", "block");
        $(".teacher5").css("background", "rgba(255, 255, 255, 0.8)");
        $(".teacher5 .teacher-msg").css({
            "color": "#4D555D",
            "height": "72px",
            "top": "0"
        });
    });

    $(".teacher6").mouseover(function () {
        $(".teacher6 .teacher-face").css({
            "width": "60px",
            "height": "60px",
            "left": "125px"
        });
        $(".teacher6 .teacher-name").css("display", "none");
        $(".teacher6 .teacher-title").css("display", "none");
        $(".teacher6").css("background", "white");
        $(".teacher6 .teacher-msg").css({
            "color": "black",
            "height": "168px",
            "top": "66px"
        });
    });

    $(".teacher6").mouseout(function () {
        $(".teacher6 .teacher-face").css({
            "width": "96px",
            "height": "96px",
            "left": "50%"
        });
        $(".teacher6 .teacher-name").css("display", "block");
        $(".teacher6 .teacher-title").css("display", "block");
        $(".teacher6").css("background", "rgba(255, 255, 255, 0.8)");
        $(".teacher6 .teacher-msg").css({
            "color": "#4D555D",
            "height": "72px",
            "top": "0"
        });
    });

    $(".teacher7").mouseover(function () {
        $(".teacher7 .teacher-face").css({
            "width": "70px",
            "height": "70px",
            "left": "125px"
        });
        $(".teacher7 .teacher-name").css("display", "none");
        $(".teacher7 .teacher-title").css("display", "none");
        $(".teacher7").css("background", "white");
        $(".teacher7 .teacher-msg").css({
            "color": "black",
            "height": "178px",
            "top": "77px"
        });
    });

    $(".teacher7").mouseout(function () {
        $(".teacher7 .teacher-face").css({
            "width": "97px",
            "height": "97px",
            "left": "50%"
        });
        $(".teacher7 .teacher-name").css("display", "block");
        $(".teacher7 .teacher-title").css("display", "block");
        $(".teacher7").css("background", "rgba(255, 255, 255, 0.8)");
        $(".teacher7 .teacher-msg").css({
            "color": "#4D555D",
            "height": "72px",
            "top": "0"
        });
    });

    $(".teacher8").mouseover(function () {
        $(".teacher8 .teacher-face").css({
            "width": "80px",
            "height": "80px",
            "left": "120px"
        });
        $(".teacher8 .teacher-name").css("display", "none");
        $(".teacher8 .teacher-title").css("display", "none");
        $(".teacher8").css("background", "white");
        $(".teacher8 .teacher-msg").css({
            "color": "black",
            "height": "168px",
            "top": "80px"
        });
    });

    $(".teacher8").mouseout(function () {
        $(".teacher8 .teacher-face").css({
            "width": "96px",
            "height": "96px",
            "left": "50%"
        });
        $(".teacher8 .teacher-name").css("display", "block");
        $(".teacher8 .teacher-title").css("display", "block");
        $(".teacher8").css("background", "rgba(255, 255, 255, 0.8)");
        $(".teacher8 .teacher-msg").css({
            "color": "#4D555D",
            "height": "72px",
            "top": "0"
        });
    });

    $(".teacher9").mouseover(function () {
        $(".teacher9 .teacher-face").css({
            "width": "60px",
            "height": "60px",
            "left": "125px"
        });
        $(".teacher9 .teacher-name").css("display", "none");
        $(".teacher9 .teacher-title").css("display", "none");
        $(".teacher9").css("background", "white");
        $(".teacher9 .teacher-msg").css({
            "color": "black",
            "height": "168px",
            "top": "65px"
        });
    });

    $(".teacher9").mouseout(function () {
        $(".teacher9 .teacher-face").css({
            "width": "96px",
            "height": "96px",
            "left": "50%"
        });
        $(".teacher9 .teacher-name").css("display", "block");
        $(".teacher9 .teacher-title").css("display", "block");
        $(".teacher9").css("background", "rgba(255, 255, 255, 0.8)");
        $(".teacher9 .teacher-msg").css({
            "color": "#4D555D",
            "height": "72px",
            "top": "0"
        });
    });

    $(".teacher10").mouseover(function () {
        $(".teacher10 .teacher-face").css({
            "width": "60px",
            "height": "60px",
            "left": "125px"
        });
        $(".teacher10 .teacher-name").css("display", "none");
        $(".teacher10 .teacher-title").css("display", "none");
        $(".teacher10").css("background", "white");
        $(".teacher10 .teacher-msg").css({
            "color": "black",
            "height": "168px",
            "top": "65px"
        });
    });

    $(".teacher10").mouseout(function () {
        $(".teacher10 .teacher-face").css({
            "width": "96px",
            "height": "96px",
            "left": "50%"
        });
        $(".teacher10 .teacher-name").css("display", "block");
        $(".teacher10 .teacher-title").css("display", "block");
        $(".teacher10").css("background", "rgba(255, 255, 255, 0.8)");
        $(".teacher10 .teacher-msg").css({
            "color": "#4D555D",
            "height": "72px",
            "top": "0"
        });
    });

    //轮播
    var i = 0;
    $(".teacher-lunbo").eq(1).css("left", "1152px");
    $("#teacher-yuan-left div").css("background", "white");

    setInterval(function () {
        i++;
        if (i === 2) i = 0;
        if (i === 0) {
            $("#teacher-yuan-left div").css("background", "white");
            $("#teacher-yuan-right div").css("background", "black")
        } else if (i === 1) {
            $("#teacher-yuan-left div").css("background", "black");
            $("#teacher-yuan-right div").css("background", "white")
        }
        $(".teacher-lunbo").eq(i).css("left", "1152px");
        $(".teacher-lunbo").eq(i - 1).animate({left: -1152});
        $(".teacher-lunbo").eq(i).animate({left: 0});
    }, 5000);

    //圆点按钮
    $("#teacher-yuan-left").click(function () {
        if (i === 1) {
            $(".teacher-lunbo").eq(0).css("left", "-1152px");
            $(".teacher-lunbo").eq(1).animate({left: 1152});
            $(".teacher-lunbo").eq(0).animate({left: 0});
        } else {
        }
        $("#teacher-yuan-left div").css("background", "white");
        $("#teacher-yuan-right div").css("background", "black")
    });

    $("#teacher-yuan-right").click(function () {
        if (i === 0) {
            $(".teacher-lunbo").eq(1).css("left", "1152px");
            $(".teacher-lunbo").eq(0).animate({left: -1152});
            $(".teacher-lunbo").eq(1).animate({left: 0});
        } else {
        }
        $("#teacher-yuan-left div").css("background", "black");
        $("#teacher-yuan-right div").css("background", "white")
    });

    //左右按钮
    $(".teacher-left").click(function () {
        i--;
        if (i === -1) i = 1;
        $(".teacher-lunbo").eq(i).css("left", "-1152px");
        $(".teacher-lunbo").eq(i - 1).animate({left: 1152});
        $(".teacher-lunbo").eq(i).animate({left: 0});
    });

    $(".teacher-right").click(function () {
        i++;
        if (i === 2) i = 0;
        $(".teacher-lunbo").eq(i).css("left", "1152px");
        $(".teacher-lunbo").eq(i - 1).animate({left: -1152});
        $(".teacher-lunbo").eq(i).animate({left: 0});
    });

});
