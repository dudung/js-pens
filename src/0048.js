/*
  0048.js <-- 0050.js
  A circle divided into annulus sector
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221222
  0836 Try to continue js-pens with problem from MK.
  1901 Separate draw, params, elements, and main application.
  20221224
  0909 Merge 0048, 0049, 0050 to single file 0048.js.
  0913 Comment SPEED in default parameters, postponed.
  0924 Upload to https://codepen.io.
*/


main();


function main() {
  createElements();
  initializeParameters();
}


/*
  0048.js <-- 0049.js
  HTML elements for a circle divided into annulus sector
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221222
  0929 Update GitHub with initial layout but not functioned yet.
  2112 Make buttons and textarea toggle disable or enable.
  2225 Clear canvas.
  20121223
  0512 Test drawCircle() for different COLS and it works.
*/


function createElements() {
  console.log("Create elements");
  
  var divL = document.createElement("div");
  divL.style.width = "200px";
  divL.style.height = "225px";
  divL.style.float = "left";
  
  var divR = document.createElement("div");
  divR.style.width = "225px";
  divR.style.height = "225px";
  divR.style.float = "left";
  divR.style.paddingLeft = "4px";
  
  var ta = document.createElement("textarea");
  ta.style.boxSizing = "border-box";
  ta.style.width = "100%";
  ta.style.height = "200px";
  ta.style.overflowY = "scroll";
  ta.id = "Params";
  
  var captions = ["Clear", "Load", "Read", "Start"];
  var btns = createButtons(captions);
  
  var can = document.createElement("canvas");
  can.style.border = "1px solid #000";
  can.style.boxSizing = "border-box";
  can.style.width = "100%";
  can.style.height = "100%";
  can.id = "Drawing";
  
  document.body.append(divL);
    divL.append(ta);
    for(b of btns) divL.append(b);
  document.body.append(divR);
    divR.append(can);
}


function createButtons(captions) {
  var btns = [];
  for(var i of captions) {
    var btn = document.createElement("button");
    btn.innerHTML = i;
    btn.id = i;
    btn.style.width = "50px";
    btn.addEventListener("click", clickButton);
    if(i != "Clear" && i != "Load") {
      btn.disabled = true;
    }
    btns.push(btn);
  }
  
  return btns;
}


function clickButton() {
  var ta = document.getElementById("Params");
  var btn = event.target.innerHTML;
  console.log("Click button");
  console.log(btn);
  
  if(btn == "Clear") {
    ta.value = "";
    document.getElementById("Read").disabled = true;
    document.getElementById("Start").disabled = true;
    var can = document.getElementById("Drawing");
    var ctx = can.getContext("2d");
    ctx.clearRect(0, 0, XMAX, YMIN);
  } else if(btn == "Load") {
    ta.value = generateDefaultParameters();
    document.getElementById("Read").disabled = false;
    document.getElementById("Start").disabled = true;
  } else if(btn == "Read") {
    document.getElementById("Start").disabled = false;
    var keys = ["RADIUS", "ROWS", "COLS", "SPEED"];
    [radius, rows, cols, speed] = readParameters(ta.value, keys);
    setCoordinatesRanges();
  } else if(btn == "Start") {
    console.log("Start simulation");
    event.target.innerHTML = "Stop";
    document.getElementById("Clear").disabled = true;
    document.getElementById("Load").disabled = true;
    document.getElementById("Read").disabled = true;
    document.getElementById("Params").disabled = true;
    
    /*
    var X, Y;
    [X, Y] = generateCirclePoints(radius, cols);
    drawCircle([X, Y]);
    */
    
    var rn, qn;
    [rn, qn] = generatePolarGridsPoints(radius, rows, cols);
    //drawGridPoints(rn, qn);
    //drawGrids(rn, qn);
    var G = createGrids(rn, qn);
    drawGrids2(G);
  } else {
    console.log("Stop simulation");      
    event.target.innerHTML = "Start";
    document.getElementById("Clear").disabled = false;
    document.getElementById("Load").disabled = false;
    document.getElementById("Read").disabled = false;
    document.getElementById("Params").disabled = false;
  }
}


/*
  0048.js
  Default parameters for a circle divided into annulus sector
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221222
  1856 Start the default parameters definition.
  1937 Read parameters from string with newline characters.
  2052 Initialize parameters but not yet true.
  2248 Change rows to 20 as default value.
  20221223
  0455 set to generate in DefaultParameters.
*/

var radius, rows, cols, speed;
var XMIN, XMAX, YMIN, YMAX;
var xmin, xmax, ymin, ymax;


function initializeParameters() {
  console.log("Initialize parameters");
  
  radius = 1;
  rows = 1;
  cols = 1;
  speed = 1;

  XMIN = 0;
  XMAX = 100;
  YMIN = 100;
  YMAX = 0;

  xmin = -1;
  xmax = 1;
  ymin = -1;
  ymax = 1;
}


function generateDefaultParameters() {
  console.log("Get default parameters");
  
  var s = "";
  s += "RADIUS 10\n";
  s += "ROWS    10\n";
  s += "COLS    36\n";
  //s += "SPEED   2\n";
  return s;
}


function readParameters(str, keys) {
  console.log("Read parameters");
  
  var lines = str.split('\n');
  
  for(var l of lines) {
    if(l.length > 0) {
      var words = l.split(/\s+/);
      var key = words[0];
      var val = parseInt(words[1]);
      
      if(key == keys[0]) radius = val;
      if(key == keys[1]) rows = val;
      if(key == keys[2]) cols = val;
      if(key == keys[3]) speed = val;
    }
  }
  
  return [radius, rows, cols, speed];
}