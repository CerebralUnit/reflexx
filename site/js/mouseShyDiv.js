//Public Vars
var container = document.getElementById("container"),
    animDiv = document.getElementById("testDiv"),
    origDivLeft = animDiv.offsetLeft,
    origDivTop = animDiv.offsetTop,
    hCenter = Math.floor(animDiv.parentNode.offsetWidth / 2),
    vCenter = Math.floor(animDiv.parentNode.offsetHeight / 2),
    windowHCenter = Math.floor(window.innerWidth / 2),
    windowVCenter = Math.floor(window.innerHeight / 2),
    leftSide = parseInt(animDiv.style.marginleft, 10) || 0,
    topSide = parseInt(animDiv.offsetTop + animDiv.parentNode.offsetTop, 10) || 0,
    width = parseInt(animDiv.offsetWidth, 10) || 0,
    height = parseInt(animDiv.offsetHeight, 10) || 0,
    divCenter = (width / 2),
    divMiddle = (height / 2),
    mouseIn = false,
    mousePos = {
        x: hCenter,
        y: vCenter
    },
    mouseOffset = {
        x: (mousePos.x - hCenter),
        y: (mousePos.y - vCenter)
    };

//Initialize relative Mouse and find Center
relativeMouse();
findCenter();

//Initialize Mouse-Tracking Event Handler
window.onmousemove = mouseMove;

//When Mouse Leaves Window Change to False and Call Do Reset Function (I tried so hard not to use jQuery, but alas)
$(document).mouseleave(function() {
    mouseIn = false;
    doReset();
});

//Reset Div to Initial Position Unless Mouse Reenters Window
function doReset() {
    var curDivLeft = animDiv.offsetLeft,
        curDivTop = animDiv.offsetTop,
        marLeft = parseInt(animDiv.style.marginLeft, 10) || 0,
        marTop = parseInt(animDiv.style.marginTop, 10) || 0,
        parentCenter = (animDiv.offsetParent.offsetWidth/2),
        divCenter = (curDivLeft + (width/2)),
        xDone = false,
        yDone = false;
    if (mouseIn === false){
        if (divCenter > parentCenter) {
            animDiv.style.marginLeft = marLeft - 1 + "px";
            xDone = false;
    
        } else if (divCenter < parentCenter) {
            animDiv.style.marginLeft = marLeft + 1 + "px";
            xDone = false;
        } else {
            if (!xDone) {
                xDone = true;
            }
        }
        if (curDivTop > origDivTop) {
            animDiv.style.marginTop = marTop - 1 + "px";
            yDone = false;
        } else if (curDivTop < origDivTop) {
            animDiv.style.marginTop = marTop + 1 + "px";
            yDone = false;
        } else {
            yDone = true;
        }
        if (!xDone || !yDone) {
            setTimeout(doReset, 1000/60);
        }
    }
    if (xDone && yDone){
    }
}


//Determine offset of mouse to screen center
function relativeMouse() {
    mouseOffset = {
        x: (mousePos.x - windowHCenter),
        y: (mousePos.y - windowVCenter)
    };
    

}

//Reset Mouse Position to Current Center On Mouse Out
function mouseReset(event) {
    event = event || window.event;
    mousePos = {
        x: windowHCenter,
        y: windowVCenter
    };
    relativeMouse();
}

//Track Mouse when Moved inside Window
function mouseMove(event) {
    event = event || window.event;

    mousePos = {
        x: event.clientX,
        y: event.clientY
    };
    relativeMouse();
    moveDiv();
    mouseIn = true;
}

//findCenter on Window Resize
window.onresize = function () {
    findCenter();
    doReset();
};

//findCenter of Window
function findCenter() {
    hCenter = Math.floor(animDiv.parentNode.offsetWidth / 2);
    vCenter = Math.floor(animDiv.offsetTop + animDiv.parentNode.offsetTop);
   
}

//Move Element one sixteenth the Opposite Direction of the Mouse offset from the body's center
function moveDiv(event) {
    test = document.getElementById("test");
    testDivTop = animDiv.offsetTop,
    event = event || window.event;
    animDiv.style.marginLeft = -(((mouseOffset.x - hCenter) + divCenter * 16) / 16 - hCenter / 1.065) + "px";
    animDiv.style.marginTop = (origDivTop - (mouseOffset.y)/16) + "px";
    test.innerHTML= "Mouse Offset: " + mouseOffset.y + " Original Margin: " + origDivTop + " Current Margin:  " + testDivTop ;
}