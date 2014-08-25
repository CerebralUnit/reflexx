var desc = document.getElementById("sd"),
    img = document.getElementById("img"),
    imgWidth = img.offsetWidth,
    imgLeft = img.offsetLeft,
    imgRight = imgWidth + imgLeft;

$(".hoverbox").each(
     function () {
        var myId = makeid(),
            pos = $(this).position(),
            imgWidth = $( this ).width(),
            newDiv = '<div id="' + 'div-'+ myId + '"class="sd">Description</div>';
        $(this).hover(
            function () {
                if (!document.getElementById(myId)){
                $( this ).attr('id', myId );
                }else{
                $( "#div-" + myId ).animate({marginLeft: imgWidth}, 500);
                }
                if (!document.getElementById("div-" + myId)){
                $( newDiv ).css({ 
                    position: "absolute", 
                    top: pos.top + "px", 
                    left: pos.left + "px"}).insertAfter( this ).animate({marginLeft: imgWidth}, 500);          
                }
               // $( this ).animate({opacity: 1.0}, 500);                
            },
           
           function () {
               $( "#div-" + myId ).animate({marginLeft: '0px'}, 500);
              //  $( this ).animate({opacity: 0.5}, 500);
            });
    }
);

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}