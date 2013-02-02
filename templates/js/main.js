var canvas = document.querySelector("#board");
var context = canvas.getContext("2d");


var sketch = document.querySelector('#wrapper');
var sketch_style = getComputedStyle(sketch);
canvas.width = parseInt(sketch_style.getPropertyValue('width'));
canvas.height = parseInt(sketch_style.getPropertyValue('height'));

var mouse = {
	x: 0,
	y: 0
	};

canvas.addEventListener("mousemove", function(e){
	mouse.x = e.pageX - this.offsetLeft;
	mouse.y = e.pageY - this.offsetTop;
}, false);

context.lineWidth  = 12;
context.lineJoin = "round";
context.lineCap = "round";
context.strokeStyle = "blue";

canvas.addEventListener("mousedown", function(e){
	context.beginPath();
	context.moveTo(mouse.x, mouse.y);
	
	canvas.addEventListener("mousemove", onPaint, false);
}, false);

canvas.addEventListener("mouseup", function(){
	canvas.removeEventListener("mousemove", onPaint, false);
}, false);

var onPaint = function(){
	context.lineTo(mouse.x, mouse.y);
	context.stroke();
};
