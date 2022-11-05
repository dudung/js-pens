/*
  0040.js
  Buttons with two states
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221105
  1632 Start this code.
  1742 Finish without information of default color of a button.
  1744 Try to use CodePen with bad internet connection.
*/


main();


var bgcolor, color;

function main() {
  var N = 100;
  bgcolor = "#eeeeee";
  color = "#000000";
  
  for(var i = 0; i < N; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = "0";
    btn.style.width = "30px";
    btn.style.height = "30px";
    btn.style.fontFamily = "Courier New";
    document.body.append(btn)
    btn.addEventListener("click", toggle);
  }
}


function toggle() {
  var btn = event.target;
  var n = parseInt(btn.innerHTML);
  n = 1 - n;
  btn.innerHTML = n;
  if(n == 0) {
    btn.style.color = "";
    btn.style.background = "";
  } else {
    btn.style.color = invert(color);
    btn.style.background = invert(bgcolor);    
  }
}


function invert(color) {
  var r = color.slice(1, 3);
  var g = color.slice(3, 5);
  var b = color.slice(5);
  
  var rr = 255 - parseInt(r, 16);
  var rg = 255 - parseInt(g, 16);
  var rb = 255 - parseInt(b, 16);
  
  var rcolor = "rgb("
  + rr + ","
  + rg + ","
  + rb + ")";
  
  return rcolor;
}
