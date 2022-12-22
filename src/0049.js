/*
  0049.js
  HTML elements for a circle divided into annulus sector
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221222
  0929 Update GitHub with initial layout but not functioned yet.
*/


function createElements() {
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
  ta.id = "params";
  
  var captions = ["Clear", "Load", "Read", "Start"];
  var btns = createButtons(captions);
  
  var can = document.createElement("canvas");
  can.style.border = "1px solid #000";
  can.style.boxSizing = "border-box";
  can.style.width = "100%";
  can.style.height = "100%";
  
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
    btn.style.width = "50px";
    btn.addEventListener("click", clickButton);
    btns.push(btn);
  }
  return btns;
}


function clickButton() {
  var ta = document.getElementById("params");
  var btn = event.target.innerHTML;
  
  if(btn == "Clear") {
    ta.value = "";
  } else if(btn == "Load") {
    ta.value = getDefaultParameters();
  } else if(btn == "Read") {
    [radius, rows, cols, speed] = readParameters(ta.value);
  } else if(btn == "Start") {
    //
  }
}