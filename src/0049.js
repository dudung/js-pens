/*
  0049.js
  HTML elements for a circle divided into annulus sector
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221222
  0929 Update GitHub with initial layout but not functioned yet.
  2112 Make buttons and textarea toggle disable or enable.
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
  } else if(btn == "Load") {
    ta.value = getDefaultParameters();
    document.getElementById("Read").disabled = false;
    document.getElementById("Start").disabled = true;
  } else if(btn == "Read") {
    document.getElementById("Start").disabled = false;
    [radius, rows, cols, speed] = readParameters(ta.value);
    setCoordinatesRanges();
  } else if(btn == "Start") {
    console.log("Start simulation");
    event.target.innerHTML = "Stop";
    document.getElementById("Clear").disabled = true;
    document.getElementById("Load").disabled = true;
    document.getElementById("Read").disabled = true;
    document.getElementById("Params").disabled = true;
  } else {
    console.log("Stop simulation");      
    event.target.innerHTML = "Start";
    document.getElementById("Clear").disabled = false;
    document.getElementById("Load").disabled = false;
    document.getElementById("Read").disabled = false;
    document.getElementById("Params").disabled = false;
  }
}