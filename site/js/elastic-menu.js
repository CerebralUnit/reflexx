$( document ).ready(function() {
$(".topUl").each(function () {

    $(this).mouseenter(function () {
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
            "left": 0,
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
            $(this).css({
                "z-index": 10,
                "left": "25px"
            });
        });
        
    });
});
});