/*
  0047.js
  Draw a circle divided into annulus sector
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221222
  1900 Make an empty function.
  2138 Use getBoundingClientRect() of element with size 100%.
  2245 Test closePath() before stroke() in context("2d").
  2247 Able to draw circle from points.
  20221223
  0513 Find out that changing property of canvas will clear it.
  0542 Seperate generate points and draw the circle.
*/


function setCoordinatesRanges() {
  console.log("Set coordinates");
  
  xmin = -radius;
  xmax = radius;
  ymin = -radius;
  ymax = radius;
  
  XMAX = document.getElementById("Drawing")
    .getBoundingClientRect().width;
  document.getElementById("Drawing").width = XMAX;
  YMIN = document.getElementById("Drawing")
    .getBoundingClientRect().height;
  document.getElementById("Drawing").height = YMIN;
}


function transform([x, y]) {
  var X = (x - xmin) / (xmax - xmin) * (XMAX - XMIN) + XMIN;
  var Y = (y - ymin) / (ymax - ymin) * (YMAX - YMIN) + YMIN;
  return [X, Y];
}


function generateCirclePoints(R, N) {
  console.log("Generate points for circle");
  
  var dq = 2 * Math.PI / N;
  
  var x = [];
  var y = [];
  for(var i = 0; i < N; i++) {
    var q = i * dq;
    var xx = R * Math.cos(q);
    var yy = R * Math.sin(q);
    x.push(xx);
    y.push(yy);
  }
  
  var X = [];
  var Y = [];
  for(var i = 0; i < N; i++) {
    var XX, YY;
    [XX, YY] = transform([x[i], y[i]]);
    X.push(XX)
    Y.push(YY);
  }
  return [X, Y];
}


function drawCircle([X, Y]) {
  console.log("Draw circle using polyline")

  var N = Math.min(X.length, Y.length);
  var can = document.getElementById("Drawing");
  var ctx = can.getContext("2d");
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#000";
  ctx.beginPath();
  for(var i = 0; i < N; i++) {
    ctx.lineTo(X[i], Y[i]);
  }
  ctx.closePath();
  ctx.stroke();
}


function generatePolarGridsPoints(radius, rows, cols) {
  var R = radius;
  var N = rows;
  var M = cols;
  
  var sqrtsum = 0;
  for(var i = 0; i < N; i++) {
    sqrtsum =+ Math.sqrt(i + 1);
  }
  var R1 = R / sqrtsum;
  
  var RN = [];
  for(var i = 0; i < N; i++) {
    var rn = R1 * Math.sqrt{i + 1};
    RN.push(rn);
  }
}


function drawGrids(radius, rows, cols) {
  console.log("Draw grids in the form of annulus sector")
}



