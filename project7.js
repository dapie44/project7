var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var colorSelect = document.getElementById("colorSelect");
var shapeSelect = document.getElementById("shapeSelect");
var sizeSelect = document.getElementById("sizeSelect");
var size;
var color;
var shape;
var drawing = false;

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var newRect = document.createElementNS(namespace, "rect")
  newRect.setAttribute("x", x)
  newRect.setAttribute("y", y)
  newRect.setAttribute("width", size)
  newRect.setAttribute("height", size)
  newRect.setAttribute("fill", color)
  screen.appendChild(newRect)
}

function drawCircle(x, y, r, color) {
  var newCircle = document.createElementNS(namespace, "circle")
  newCircle.setAttribute("cx", x)
  newCircle.setAttribute("cy", y)
  newCircle.setAttribute("r", r)
  newCircle.setAttribute("fill", color)
  screen.appendChild(newCircle);
}
// Step 3: Event listeners

screen.addEventListener("mousemove", function(event) {
 var pt = transformPoint(event)
 shape = shapeSelect.value;
 color = colorSelect.value;
 size = sizeSelect.value;

 if(shape == "square") {
   drawSquare(pt.x, pt.y, size, color);
 }
 else if (shape == "circle") {
   drawCircle(pt.x, pt.y, size, color)
 }
})
screen.addEventListener("mousedown", function(event){
  drawing = true;
})
screen.addEventListener("mouseup", function(event){
  drawing = false;
})
if(drawing == "true") {

}
