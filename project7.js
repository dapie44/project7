var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

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
var examplecanvas = document.getElementById("screen");

examplecanvas.addEventListener("mousedown", function(event) {
 var pt = transformPoint(event, examplecanvas)
 var x = pt.x
 var y = pt.y

 drawCircle.setAttribute("cx", x)
 drawCircle.setAttribute("cy", y)
})
