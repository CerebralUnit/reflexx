$( window ).load(function() {

$("#panel-1").show();

$(".shadow-fade").css({opacity: 0});

$( ".slider-thumb" ).children("img, span").stop(true,false).css({opacity:0.7});
    $(".slider-thumb").each(
        function(){
            $( this ).mouseenter(
                function(){
                    $( this ).children("img, span").stop(true,false).animate({opacity:1},200,"easeInCirc" );
                    $( this ).children(".shadow-fade").stop(true,false).animate({opacity:1},200,"easeInCirc" );
            });

            $( this ).mouseleave(
                function(){
                    $( this ).children("img, span").stop(true,false).animate({opacity:0.7},650,"easeOutQuad");
                    $( this ).children(".shadow-fade").stop(true,false).animate({opacity:0},650,"easeOutQuad");
            });
        }
    );

    $("#thumb1").click(function(){
        $(".main-page-content, .panel").stop(false, true);
        $(".panel").not("#panel-1").css({"z-index": 1000}).slideUp();
        $("#panel-1").css({"z-index": 10}).slideDown(1000, "easeOutCirc");

        
        $(".main-page-content").not("#network-inf-content").fadeOut(200, "easeOutQuad", function(){
            $("#network-inf-content").fadeIn(1500, "easeOutQuad");
        });
    });
    $("#thumb2").click(function(){
        $(".main-page-content, .panel").stop(false, true);
        $(".panel").not("#panel-2").css({"z-index": 1000}).slideUp();
        $("#panel-2").css({"z-index": 10}).slideDown(1000, "easeOutCirc");


        $(".main-page-content").not("#cloud-comp-content").fadeOut(200, "easeOutQuad", function(){
            $("#cloud-comp-content").fadeIn(1500, "easeOutQuad");
        });
    });
    $("#thumb3").click(function(){
        $(".main-page-content, .panel").stop(false, true);
        $(".panel").not("#panel-3").css({"z-index": 1000}).slideUp();
        $("#panel-3").css({"z-index": 10}).slideDown(1000, "easeOutCirc");

        $(".main-page-content").not("#virtu-sol-content").fadeOut(200, "easeOutQuad", function(){
            $("#virtu-sol-content").fadeIn(1500, "easeOutQuad");
        });
    });
    $("#thumb4").click(function(){ 
        $(".main-page-content, .panel").stop(false, true);    
        $(".panel").not("#panel-4").css({"z-index": 1000}).slideUp();
        $("#panel-4").css({"z-index": 10}).slideDown(1000, "easeOutCirc");

        $(".main-page-content").not("#voip-content").fadeOut(200, "easeOutQuad", function(){
            $("#voip-content").fadeIn(1500, "easeOutQuad");
        });
    });
});