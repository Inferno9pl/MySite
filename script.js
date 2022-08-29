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


function textInDiv(type, text, div) {
	var tag = document.createElement(type);
	var text = document.createTextNode(text);
	tag.appendChild(text);
	div.appendChild(tag);
}


function generateDays() {
    var box = document.getElementById("daysBox");

    var date1 = new Date('09/11/2022');
    var date2 = new Date();
    var difference = date1.getTime() - date2;
    var days = Math.ceil(difference / (1000 * 3600 * 24));

	if(days >= 1) {
		for(var i = 1; i <= days; i++) {
			textInDiv("p", i, box);
		}
		
		textInDiv("h2", "Jeszcze tylko tyle dni..", box);
		
		for(var i = 1; i <= 5; i++) {
			textInDiv("p", ".", box);
		}
			
		textInDiv("h2", "..i ślub!", box);
			
		for(var i = 1; i <= 5; i++) {
			textInDiv("p", ".", box);
		}
		
		textInDiv("h1", "Pobieramy się!", box);
		
	} else if(days == 0) {		
		textInDiv("h1", "Stało się!", box);
		textInDiv("h1", "Dziś wielki dzień!", box);
	} else {
		textInDiv("h1", "Już zaobrączkowani jesteśmy razem:", box);
		
		
		if(days == -1) {
			textInDiv("h1", -days + " dzień", box);
		}
		else {
			textInDiv("h1", -days + " dni", box);
		}
		
		
		
	}
}