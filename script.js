window.ondragstart = function() {return false}
generateDays();

/* methods for PCs */
function changeImageTo2(x) {
    x.classList.remove('image-black1');
    x.classList.add('image-black2');
}
  
function changeImageTo1(x) {
    x.classList.remove('image-black2');
    x.classList.add('image-black1');
}


/* methods for mobile devices */
function startup() {
    var img = document.getElementById("image");
    img.addEventListener("touchstart", handleStart, false);
    img.addEventListener("touchend", handleEnd, false);
}
  
document.addEventListener("DOMContentLoaded", startup);
  
function handleStart(evt) {
    //evt.preventDefault();
    console.log("touchstart.");
    var img = document.getElementById("image");
    
    img.classList.remove('image-black1');
    img.classList.add('image-black2');
}

function handleEnd(evt) {
    //evt.preventDefault();
    console.log("touchend.");
    var img = document.getElementById("image");
    
    img.classList.remove('image-black2');
    img.classList.add('image-black1');
}


function generateDays() {
    var box = document.getElementById("daysBox");

    var date1 = new Date('09/11/2022');
    var date2 = new Date();
    var difference = date1.getTime() - date2;
    var days = Math.ceil(difference / (1000 * 3600 * 24));

    for(var i = 1; i <= days; i++) {
        var tag = document.createElement("p");
        var text = document.createTextNode(i);
        tag.appendChild(text);
        box.appendChild(tag);
    }
}