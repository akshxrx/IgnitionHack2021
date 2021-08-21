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


function formatTimeLeft(time) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);
  
  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;
  
  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}
// Start with an initial value of 20 seconds
const TIME_LIMIT = 20;

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

document.getElementById("app").innerHTML = `...`

function startTimer() {
  timerInterval = setInterval(() => {
    
    // The amount of time passed increments by one
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    
    // The time left label is updated
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
  }, 1000);
}
document.getElementById("app").innerHTML = `...`
startTimer();
const COLOR_CODES = {
  info: {
    color: "green"
  }
};

let remainingPathColor = COLOR_CODES.info.color;
