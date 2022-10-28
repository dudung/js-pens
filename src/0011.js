/*
  0011.js
  Sparisoma Viridi | https://github.com/dudung
  Generate random x, y  [0, 1] data in textarea canvas
  20221029 Create and test it.
*/

main();

function main() {
  var ta = document.createElement("textarea");
  ta.id = "ta";
  with(ta.style) {
    width = "150px";
    height = "315px";
    overflowY = "scroll";
    float = "left";
    tabSize = 4;
  }
  var hint = "click button";
  ta.placeholder = hint;
  
  var ca = document.createElement("canvas");
  ca.id = "ca";
  with(ca.style) {
    border = "1px solid #888";
    float = "left";
    width = "319px";
    height = "319px";
  }
  ca.width = parseInt(ca.style.width);
  ca.height = parseInt(ca.style.height);
  
  var bt1 = document.createElement("button")
  bt1.innerHTML = "Random";
  bt1.addEventListener("click", btLoad);
  with(bt1.style) {
    width = "100%";
  }
  
  var bt2 = document.createElement("button")
  bt2.innerHTML = "Draw";
  bt2.addEventListener("click", btDraw);
  with(bt2.style) {
    width = "100%";
  }
  
  var bt3 = document.createElement("button")
  bt3.innerHTML = "Clear";
  bt3.addEventListener("click", btClear);
  with(bt3.style) {
    width = "100%";
  }
  
  var div = document.createElement("div");
  with(div.style) {
    float = "left";
    width = "70px";
  }
  
  document.body.append(div);
    div.append(bt1);
    div.append(bt2);
    div.append(bt3);
  document.body.append(ta);
  document.body.append(ca);
}

function btLoad() {
  var ta = document.getElementById("ta");
  
  str = "";
  N = 21;
  for(var i = 0; i < N; i++) {
    x = Math.random().toFixed(3);
    y = Math.random().toFixed(3);
    
    str += i + "\t" + x + "\t" + y;
    if(i < N - 1) str += "\n";
  }
  
  ta.value = str;
}

var color = [
  "red",
  "black",
  "cyan",
  "green",
  "magenta",
  "yellow",
  "gray",
  "blue"
];
var c = 0;

function btDraw() {
  drawOn("ca", "ta");
  c++;
  if(c > color.length) c = 0;
}

function btClear() {
  var ta = document.getElementById("ta");
    str = "";
  ta.value = str;

  var ca = document.getElementById("ca");
  var ctx = ca.getContext("2d");
  ctx.clearRect(0, 0, ca.width, ca.height);
}

function drawOn(caId, taId) {
  var xmax = 1;
  var xmin = 0;
  var ymax = 1;
  var ymin = 0;

  var ca = document.getElementById(caId);
  var XMIN = 0;
  var XMAX = ca.width;
  var YMIN = ca.height;
  var YMAX = 0;
  
  var ta = document.getElementById(taId);
  lines = ta.value.split("\n");
  x = [];
  y = [];
  N = lines.length;
  for(var i = 0; i < N; i++) {
    data = lines[i].split("\t");
    x.push(parseFloat(data[1]));
    y.push(parseFloat(data[2]));
  }
  
  var ca = document.getElementById(caId);
  var XMIN = 0;
  var XMAX = parseInt(ca.width);
  var YMIN = parseInt(ca.height);
  var YMAX = 0;
  
  var xmin = 0;
  var xmax = 1;
  var ymin = 0;
  var ymax = 1;
  
  var ctx = ca.getContext("2d");
  ctx.lineWidth = 1;
  ctx.strokeStyle = color[c];
  
  for(var i = 0; i < N; i++) {
    var X = (x[i] - xmin) / (xmax - xmin) * (XMAX - XMIN) + XMIN;
    var Y = (y[i] - ymin) / (ymax - ymin) * (YMAX - YMIN) + YMIN;
    var R = 4;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.stroke();
  }
}
