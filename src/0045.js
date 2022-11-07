/*
  0045.js
  ..
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221107
  1659 Start this code.
*/

main();


function main() {
  var div1 = document.createElement("div");
  div1.style.width = "150px";
  div1.style.height = "326px";
  div1.style.background = "#eee";
  
  var ta1 = document.createElement("textarea");
  ta1.id = "";
  ta1.style.overflowY = "scroll";
  ta1.style.width = "144px";
  ta1.style.height = "142px";

  var ta2 = document.createElement("textarea");
  ta2.id = "";
  ta2.style.overflowY = "scroll";
  ta2.style.width = "144px";
  ta2.style.height = "142px";

  var bt1 = document.createElement("button");
  bt1.innerHTML = "Load";
  bt1.style.width = "50px";
  
  var bt2 = document.createElement("button");
  bt2.innerHTML = "Read";
  bt2.style.width = "50px";
  
  var bt3 = document.createElement("button");
  bt3.innerHTML = "Run";
  bt3.style.width = "50px";
  
  
  
  document.body.append(div1);
    div1.append(ta1);
    div1.append(ta2);
    div1.append(bt1);
    div1.append(bt1);
    div1.append(bt2);
    div1.append(bt3);
}