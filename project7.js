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
  var newRect = document.createElementNS(namespace. "rect")
  newRect.setAttribute("x", x)
  newRect.setAttribute("y", y)
  newRect.setAttribute("width", size)
  newRect.setAttribute("height", size)
  newRect.setAttribute("fill", color)
  screen.appendChild(newRect)
}

function drawCircle(x, y, r, color) {
  var newCircle = document.createElementNS(namespace, "circle")
  newcircle.setAttribute("cx", x)
  newcircle.setAttribute("cy", y)
  newcircle.setAttribute("r", r)
  newcircle.setAttribute("fill", color)
  screen.appendChild(newCircle);
}
// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})
