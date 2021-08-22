//drawing pad script
var color = document.getElementById("hex").value;
var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = 700;
canvas.height = 550;

var mouse = {x: 0, y: 0};

 
function draw(e) {
  if (e.buttons !== 1) return; // if mouse is not clicked, do not go further

  var canvas = document.getElementById("draw");

  var ctx = canvas.getContext("2d");
  
  
  // initialize position as 0,0
  var pos = { x: 0, y: 0 };
  
  // new position from mouse events
  function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }
  
  function draw(e) {
    if (e.buttons !== 1) return; // if mouse is not clicked, do not go further
  
    var color = document.getElementById("hex").value;
  
    ctx.beginPath(); // begin the drawing path
  
    ctx.lineWidth = 20; // width of line
    ctx.lineCap = "round"; // rounded end cap
    ctx.strokeStyle = color; // hex color of line
  
    ctx.moveTo(pos.x, pos.y); // from position
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to position
  
    ctx.stroke(); // draw it!
  }
  
  
  // add window event listener to trigger when window is resized
  window.addEventListener("resize", resize);
  
  // add event listeners to trigger on different mouse events
  document.addEventListener("mousemove", draw);
  document.addEventListener("mousedown", setPosition);
  document.addEventListener("mouseenter", setPosition);

  ctx.beginPath(); // begin the drawing path

  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
}


 
/* Mouse Capturing Work */
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

/* Drawing on Paint App */
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.strokeStyle = "red";
function getColor(colour){ctx.strokeStyle = colour;}

function getSize(size){ctx.lineWidth = size;}

  var color = document.getElementById("hex").value;

//ctx.strokeStyle = 
//ctx.strokeStyle = document.settings.colour[1].value;
 
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};


