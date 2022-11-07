/*
  0045.js
  ..
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221107
  1659 Start this code.
  1722 Create UI elements.
  1728 Modify UI elements and add event handler each button.
  1747 Load data is done for now.
*/

main();


function main() {
  createUIElements();
}


function loadData() {
  console.log("load data");
  
  var height = document.getElementById("height");
  height.value
    = "9 9 8 7 6 6 5 5\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0";
  
  var infil = document.getElementById("infil");
  infil.value
    = "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 1 1 0 0 0\n"
    + "0 0 0 0 1 0 0 0";
}


function readData() {
  console.log("read data");  
}


function calcData() {
  console.log("calc data");  
}


function createUIElements() {
  var div1 = document.createElement("div");
  div1.style.width = "180px";
  div1.style.height = "326px";
  div1.style.background = "#eee";
  div1.style.float = "left";
  
  var ta1 = document.createElement("textarea");
  ta1.id = "height";
  ta1.style.overflowY = "scroll";
  ta1.style.width = "174px";
  ta1.style.height = "142px";
  ta1.placeholder = "water height on surface, e.g\n"
    + "9 1 4 3 2\n"
    + "8 3 3 0 0\n"
    + "1 1 4 3 3";

  var ta2 = document.createElement("textarea");
  ta2.id = "infil";
  ta2.style.overflowY = "scroll";
  ta2.style.width = "174px";
  ta2.style.height = "142px";
  ta2.placeholder = "infiltration from surface, e.g\n"
    + "1 0 0 0 0\n"
    + "1 1 0 0 1\n"
    + "1 1 0 0 1";

  var bt1 = document.createElement("button");
  bt1.innerHTML = "Load";
  bt1.style.width = "60px";
  bt1.addEventListener("click", loadData);
  
  var bt2 = document.createElement("button");
  bt2.innerHTML = "Read";
  bt2.style.width = "60px";
  bt2.addEventListener("click", readData);
  
  var bt3 = document.createElement("button");
  bt3.innerHTML = "Calc";
  bt3.style.width = "60px";
  bt3.addEventListener("click", calcData);
  
  var can1 = document.createElement("canvas");
  can1.width = "324";
  can1.style.width = can1.width + "px";
  can1.height = "324";
  can1.style.height = can1.height + "px";
  can1.style.border = "1px solid #888";
  can1.style.float = "left";
  
  document.body.append(div1);
    div1.append(ta1);
    div1.append(ta2);
    div1.append(bt1);
    div1.append(bt1);
    div1.append(bt2);
    div1.append(bt3);
  document.body.append(can1);  
}