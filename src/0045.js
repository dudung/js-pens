/*
  0045.js
  Try to simplify Clark unit hydrograph model [1]
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221107
  1659 Start this code.
  1722 Create UI elements.
  1728 Modify UI elements and add event handler each button.
  1747 Load data is done for now.
  1843 Simplify layout of UI.
  1900 Read data from three input textarea elements.
  
  refs
  1. url https://www.hec.usace.army.mil/confluence/hmsdocs/hmstrm/surface-runoff/clark-unit-hydrograph-model [20221107].
*/


var H, I, S;

main();


function main() {
  createUIElements();
}


function calcData() {
  console.log("calc data");
}


function readData() {
  console.log("read data");
  
  var height = document.getElementById("height");
  H = matrixFromStr(height.value);
  
  var infil = document.getElementById("infil");
  I = matrixFromStr(infil.value);
  
  var source = document.getElementById("source");
  S = matrixFromStr(source.value);
}


function matrixFromStr(str) {
  var lines = str.split('\n');
  var N = lines.length;
  var M = [];
  for(var i of lines) {
    var col = [];
    var cols = i.split(' ');
    for(var j of cols) {
      col.push(parseFloat(j));
    }
    M.push(col);
  }
  return M;
}


function loadData() {
  console.log("load data");
  
  var height = document.getElementById("height");
  height.value
    = "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0";
  
  var infil = document.getElementById("infil");
  infil.value
    = "1 1 1 0 0 0 0 0\n"
    + "1 1 0 0 0 0 0 0\n"
    + "1 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0";
    
  var source = document.getElementById("source");
  source.value
    = "0 0 0 0 0 0 0 1\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 1";
}


function clearData() {
  console.log("clear data");
  
  var height = document.getElementById("height");
  height.value = "";
  
  var infil = document.getElementById("infil");
  infil.value = "";
    
  var source = document.getElementById("source");
  source.value = "";
  
  var current = document.getElementById("current");
  current.value = "";
}


function createUIElements() {
  var div1 = document.createElement("div");
  div1.style.width = "590px";
  div1.style.height = "296px";
  div1.style.background = "#eee";
  div1.style.float = "left";
  
  var ta1 = document.createElement("textarea");
  ta1.id = "height";
  ta1.style.overflowY = "scroll";
  ta1.style.width = "174px";
  ta1.style.height = "142px";
  ta1.placeholder = "initial water height on surface, e.g\n"
    + "0 0 0 0 0\n"
    + "0 0 0 0 0\n"
    + "0 0 0 0 0";
  ta1.style.float = "left";

  var ta2 = document.createElement("textarea");
  ta2.id = "infil";
  ta2.style.overflowY = "scroll";
  ta2.style.width = "174px";
  ta2.style.height = "142px";
  ta2.placeholder = "infiltration down to soil, e.g\n"
    + "1 0 0 0 0\n"
    + "1 1 0 0 0\n"
    + "1 1 0 0 0";
  ta2.style.float = "left";

  var ta3 = document.createElement("textarea");
  ta3.id = "source";
  ta3.style.overflowY = "scroll";
  ta3.style.width = "174px";
  ta3.style.height = "142px";
  ta3.placeholder = "water source (rain, spring), e.g\n"
    + "0 0 0 0 0\n"
    + "0 0 0 0 0\n"
    + "0 0 0 0 1";
  ta3.style.float = "left";

  var ta4 = document.createElement("textarea");
  ta4.id = "current";
  ta4.style.overflowY = "scroll";
  ta4.style.width = "354px";
  ta4.style.height = "142px";
  ta4.style.float = "left";
  ta4.placeholder = "results"
  ta4.disabled = true;
  
  var bt1 = document.createElement("button");
  bt1.innerHTML = "Clear";
  bt1.style.width = "50px";
  bt1.style.height = "37px";
  bt1.addEventListener("click", clearData);
  bt1.style.float = "left";
  
  var bt2 = document.createElement("button");
  bt2.innerHTML = "Load";
  bt2.style.width = "50px";
  bt2.style.height = "37px";
  bt2.addEventListener("click", loadData);
  bt2.style.float = "left";
  
  var bt3 = document.createElement("button");
  bt3.innerHTML = "Read";
  bt3.style.width = "50px";
  bt3.style.height = "37px";
  bt3.addEventListener("click", readData);
  bt3.style.float = "left";
  
  var bt4 = document.createElement("button");
  bt4.innerHTML = "Calc";
  bt4.style.width = "50px";
  bt4.style.height = "37px";
  bt4.addEventListener("click", calcData);
  bt4.style.float = "left";
  
  var can1 = document.createElement("canvas");
  can1.width = "228";
  can1.style.width = can1.width + "px";
  can1.height = "146";
  can1.style.height = can1.height + "px";
  can1.style.border = "1px solid #888";
  can1.style.float = "left";
  can1.style.background = "white";
  
  document.body.append(div1);
    div1.append(ta1);
    div1.append(ta2);
    div1.append(ta3);
    div1.append(bt1);
    div1.append(bt1);
    div1.append(bt2);
    div1.append(bt3);
    div1.append(bt4);
    div1.append(ta4);
    div1.append(can1);  
}