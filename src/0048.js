/*
  0048.js
  ..
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221222
  0836 Try to continue js-pens with problem from MK.
  
  refs
  1. url .. [20221222].
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
  
  var btns = createButtons(["Clear", "Load", "Read", "Start"]);
  
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


function createButtons(buttons) {
  var btns = [];
  for(var i of buttons) {
    var btn = document.createElement("button");
    btn.innerHTML = i;
    btn.style.width = "50px";
    btns.push(btn);
  }
  return btns;
}