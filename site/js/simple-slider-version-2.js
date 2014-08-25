$( window ).load(function() {

var selected = "thumb1",
    margin = $( ".phone" ).css("margin-top");

    $( ".phone" ).css("margin-top", "50px").delay(1000).animate({"margin-top": margin}, 1200,"easeOutBounce");

$("#panel-1").show();

$(".shadow-fade").css({opacity: 0});
$( ".phone ").mouseenter(
    function(){
        $(".phone ").stop(false, true);
        $(".phone ").animate({"margin-top": "-=8px"}, 250, "easeOutQuad")
    });
$( ".phone ").mouseleave(
    function(){
        $(".phone ").stop(false, true);
        $(".phone ").animate({"margin-top": margin}, 250, "easeOutQuad")
    });

$( ".slider-thumb" ).children("img, span").stop(true,false).css({opacity:0.7});
    $(".slider-thumb").each(
        function(){

            var myShadow = $( this ).children(".shadow-fade");

            if (selected === $( this ).attr("id")){
                myShadow.css({"opacity": 1, "border-bottom-color": "#F46511"});
                $(".shadow-fade").not(myShadow).css({"opacity": 0, "border-bottom-color": "#2b2b2b"});
            }

            $( this ).click(
                function(){
                    selected = $( this ).attr("id");
                    console.log(selected);

                    if (selected === $( this ).attr("id")){
                        myShadow.css({"opacity": 1, "border-bottom-color": "#F46511"});
                        $(".shadow-fade").not(myShadow).css({"opacity": 0, "border-bottom-color": "#2b2b2b"});
                    }
            });
            
            $( this ).mouseenter(
                    function(){
                    if ($( this ).attr("id") !== selected){
                        console.log($( this ).attr("id") + " " + selected);
                        $( this ).children("img, span").stop(true,false).animate({opacity:1},200,"easeInCirc" );
                        $( this ).children(".shadow-fade").stop(true,false).animate({opacity:1},200,"easeInCirc" );
                    }
            });

            $( this ).mouseleave(
                    function(){
                        if ($( this ).attr("id") !== selected){
                        $( this ).children("img, span").stop(true,false).animate({opacity:0.7},650,"easeOutQuad");
                        $( this ).children(".shadow-fade").stop(true,false).animate({opacity:0},650,"easeOutQuad");
                        }
            });
            
        }
    );

    $("#thumb1").click(function(){
        $(".main-page-content, .panel").stop(true, true);
        $(".panel").not("#panel-1").css({"z-index": 1000}).slideUp();
        $("#panel-1").css({"z-index": 10}).slideDown(1000, "easeOutCirc");

        
        $(".main-page-content").not("#network-inf-content").fadeOut(200, "easeOutQuad", function(){
            $("#network-inf-content").delay(500).fadeIn(600, "easeOutQuad");
        });
    });
    $("#thumb2").click(function(){
        $(".main-page-content, .panel").stop(true, true);
        $(".panel").not("#panel-2").css({"z-index": 1000}).slideUp();
        $("#panel-2").css({"z-index": 10}).slideDown(1000, "easeOutCirc");


        $(".main-page-content").not("#cloud-comp-content").fadeOut(200, "easeOutQuad", function(){
            $("#cloud-comp-content").delay(500).fadeIn(600, "easeOutQuad");
        });
    });
    $("#thumb3").click(function(){
        $(".main-page-content, .panel").stop(true, true);
        $(".panel").not("#panel-3").css({"z-index": 1000}).slideUp();
        $("#panel-3").css({"z-index": 10}).slideDown(1000, "easeOutCirc");

        $(".main-page-content").not("#virtu-sol-content").fadeOut(200, "easeOutQuad", function(){
            $("#virtu-sol-content").delay(500).fadeIn(600, "easeOutQuad");
        });
    });
    $("#thumb4").click(function(){ 
        $(".main-page-content, .panel").stop(true, true);    
        $(".panel").not("#panel-4").css({"z-index": 1000}).slideUp();
        $("#panel-4").css({"z-index": 10}).slideDown(1000, "easeOutCirc");

        $(".main-page-content").not("#voip-content").fadeOut(200, "easeOutQuad", function(){
            $("#voip-content").delay(500).fadeIn(600, "easeOutQuad");
        });
    });
});