$(document).ready(function(){
    $('a.link').each(function(){
    	$(this).animate({'backgroundPosition': "-81px "+ ($(this).outerHeight()-2) +"px"},400,"easeOutCirc");
  	});

    $('a.link').bind('mouseenter',function(e){
    	console.log($( window ).width());
        $(this).stop(true,false).animate({'backgroundPosition': $(this).outerWidth() + "px "+ ($(this).outerHeight()-2) +"px"},500,"easeInOutCirc");
    });
    $('a.link').bind('mouseleave',function(e){
        $(this).stop(true,false).animate({'backgroundPosition': "-81px "+ ($(this).outerHeight()-2) +"px"},500,"easeInOutCirc");
    });
})