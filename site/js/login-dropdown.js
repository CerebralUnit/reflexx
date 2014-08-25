$(document).ready(function(){
	var c = $( "#login "),
	   	cOffsetL = c.offset().left,
	   	cOffsetT = c.offset().top,
	   	cHeight = c.height(),
        docWidth;

$(window).on('resize', function(){
	cOffsetL = c.offset().left;
	cOffsetT = c.offset().top;
	docWidth = parseInt($( window ).width(),10);
      if (docWidth > 748){
      	$("#login-form").css({
				"left" : cOffsetL - $("#login-form").outerWidth() + c.width() + 2,
				"top" : cOffsetT + 18
			})
      }
});

	c.click(function(){
		var container;
		console.log(cOffsetT);
		if($("#login-form").length === 0){
			$("#top-menu").append("<div id='login-form' class='rounded'><div><label>User Name</label><input type='text' /><label>Password</label><input type='text' /><br /> <input class='rounded' type='button' value='Submit' /></div></div>");
			$("#login-form").css({
				"left" : cOffsetL - $("#login-form").outerWidth() + c.width() + 2,
				"top" : cOffsetT + 18,
				"z-index": 2000
			}).slideDown({
				duration: 250, 
    			easing: "easeOutQuad"
	     	});
		}else{
			$("#login-form").stop(true, false).slideToggle({
				duration: 250, 
    			easing: "easeOutQuad"
	     	});
		}

		container = $("#login-form");
		$(document).mouseup(function (e){
			if (!container.is(e.target) && container.has(e.target).length === 0) {
	        	container.stop(true, false).slideUp({
				duration: 250, 
    			easing: "easeOutQuad"
	     	});
	    	}
		});
	});
});