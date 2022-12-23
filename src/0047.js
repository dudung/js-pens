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
  var r1 = radius / Math.sqrt(rows);
  
  var rn = [];
  for(var i = 0; i <= rows; i++) {
    var ri = r1 * Math.sqrt(i);
    rn.push(ri);
  }
  
  var qn = [];
  var dq = 2 * Math.PI / cols; 
  for(var i = 0; i <= cols; i++) {
    var qi = dq * i;
    qn.push(qi);
  }
  
  return [rn, qn];
}


function drawGridPoints(rn, qn) {
  var rows = rn.length;
  var cols = qn.length;
  
  var X = [];
  var Y = [];
  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < cols; j++) {
      var x = rn[i] * Math.cos(qn[j]);
      var y = rn[i] * Math.sin(qn[j]);
      
      var XX, YY;
      [XX, YY] = transform([x, y]);
      X.push(XX);
      Y.push(YY);
    }
  }
  
  var can = document.getElementById("Drawing");
  var ctx = can.getContext("2d");
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#090";
  
  var N = Math.min(X.length, Y.length);
  for(var i = 0; i < N; i++) {
    ctx.beginPath();
    ctx.arc(X[i], Y[i], 1, 0, 2 * Math.PI);
    ctx.stroke();
  }
}



function createGrids(rn, qn) {
  var rows = rn.length;
  var cols = qn.length;
  
  var X = [];
  var Y = [];
  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < cols; j++) {
      var x = rn[i] * Math.cos(qn[j]);
      var y = rn[i] * Math.sin(qn[j]);
      
      var XX, YY;
      [XX, YY] = transform([x, y]);
      X.push(XX);
      Y.push(YY);
    }
  }
  
  var G = [];
  var N = Math.min(X.length, Y.length);
  for(var i = 0; i < N; i++) {
    var grid = [];
    grid.push({x: X[i], y: Y[i]});
    grid.push({x: X[i + 1], y: Y[i + 1]});
    grid.push({x: X[i + 1 + cols], y: Y[i + 1 + cols]});
    grid.push({x: X[i + cols], y: Y[i + cols]});
    
    G.push(grid);
  }
  
  return G;
}


function drawGrids2(G) {
  var N = G.length;
  
  var can = document.getElementById("Drawing");
  var ctx = can.getContext("2d");
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = "#000";
  
  for(var i = 0; i < N; i++) {
    ctx.beginPath();
    ctx.moveTo(G[i][0].x, G[i][0].y);
    ctx.lineTo(G[i][1].x, G[i][1].y);
    ctx.lineTo(G[i][2].x, G[i][2].y);
    ctx.lineTo(G[i][3].x, G[i][3].y);
    ctx.stroke();    
  }
}


function drawGrids(rn, qn) {
  console.log("Draw grids in the form of annulus sector")
  
  var rows = rn.length;
  var cols = qn.length;
  
  var X = [];
  var Y = [];
  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < cols; j++) {
      var x = rn[i] * Math.cos(qn[j]);
      var y = rn[i] * Math.sin(qn[j]);
      
      var XX, YY;
      [XX, YY] = transform([x, y]);
      X.push(XX);
      Y.push(YY);
    }
  }
  
  var can = document.getElementById("Drawing");
  var ctx = can.getContext("2d");
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = "#000";
  
  var N = Math.min(X.length, Y.length);
  for(var i = 0; i < N; i++) {
    ctx.beginPath();
    ctx.moveTo(X[i], Y[i]);
    ctx.lineTo(X[i + 1], Y[i + 1]);
    ctx.lineTo(X[i + cols + 1], Y[i + cols + 1]);
    ctx.stroke();
  }
}
