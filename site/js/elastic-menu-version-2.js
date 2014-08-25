$( document ).ready(function() {
    var winWidth = parseInt($( window ).width(),10),
        winCenter = winWidth/2,
        divWidth,
        divCenter,
        divLeft,
        divOffset;

$(window).on('resize', function(){
      winWidth = parseInt($( window ).width(),10);
      winCenter = winWidth/2;
      $(".topUl").each(function () {
        if ($( this ).find("ul").width() > winWidth){
            $( this ).find("ul").width(winWidth);
        }else{
             $( this ).find("ul").width(2000);
        }
      });
       });

$(".topUl").each(function () {
$(this).mouseenter(function () {
    console.log(winWidth);
        divWidth = parseInt($(this).find("ul").width(),10);
        divCenter = divWidth/2;
        ul = $(this).parent();
        ulOffset = ul.offset().left;
        divOffset = $(this).find("ul").position().left;
        console.log(-(ulOffset - winCenter) - divCenter - 25);
                    $(this).find("ul").css({
                "z-index": 10,
                "left": -((ulOffset - winCenter) - 25) - divCenter - 25

            });
        $("#nav-div").stop(false, false);
        $(this).find("ul").stop(true, false);
        $("#nav-div").animate({
            paddingBottom: "60px"
        }, 400, "easeOutCirc");
        $(this).find("ul").css({
            "z-index": 1000
        });

        $(this).find("ul").animate({
            "height": "show",
            "opacity": 1
        }, {
            queue: false,
            duration: 1400
        }).animate({
            "left": -(ulOffset - winCenter) - divCenter - 25
        }, 500, "easeOutCirc"); // Need this effect to be applied at the same time, at a different speed.

    });
    $(this).mouseleave(function () {
        $("#nav-div").stop(false, false);
        $(this).find("ul").stop(true, false);
        $("#nav-div").animate({
            paddingBottom: "0px"
        }, 400);
        $(this).find("ul").animate({
            "height": "hide",
                "opacity": 0
        }, 250,function(){

        });
        
    });
});
});