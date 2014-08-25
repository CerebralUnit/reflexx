$(document).ready(function(){
	var c = $( "#contact "),
	   	cOffsetL = c.offset().left,
	   	cOffsetT = c.offset().top,
	   	cHeight = c.height(),
        docWidth;

$(window).on('resize', function(){
	cOffsetL = c.offset().left;
	cOffsetT = c.offset().top;
	docWidth = parseInt($( window ).width(),10);
      if (docWidth > 748){
      	$("#contact-form").css({
				"left" : cOffsetL,
				"top" : cOffsetT + cHeight + 12,
			})
      }
});

	c.click(function(){
		var container;
		if($("#contact-form").length === 0){
			$("#header").append("<div id='contact-form'><label>Name</label><br /><input type='text' /><br /><label>Email</label><br /><input type='text' /><br /><textarea value='Message...'>Message...</textarea><input type='button' value='submit' /></div>");
			$("#contact-form").css({
				"left" : cOffsetL,
				"top" : cOffsetT + cHeight,
				"z-index": 2000
			}).slideDown({
				duration: 400, 
    			easing: "easeOutQuad"
	     	});
		}else{
			$("#contact-form").stop(true, false).slideToggle({
				duration: 400, 
    			easing: "easeOutQuad"
	     	});
		}

		container = $("#contact-form");
		$(document).mouseup(function (e){
			if (!container.is(e.target) && container.has(e.target).length === 0) {
	        	container.stop(true, false).slideUp({
				duration: 400, 
    			easing: "easeOutQuad"
	     	});
	    	}
		});
	});
});