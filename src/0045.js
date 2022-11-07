/*
  0045.js
  Try to simplify Clark unit hydrograph model [1]
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221108
  0313 Continue to view sum of elements of a matrix.
  0328 Sum of elements work but water volume is not conserved.
  0329 Can reproduce yesterday error N --> M, explode and saturated.
  0358 Better but not yet right, pause.
  20221107
  1659 Start this code.
  1722 Create UI elements.
  1728 Modify UI elements and add event handler each button.
  1747 Load data is done for now.
  1843 Simplify layout of UI.
  1900 Read data from three input textarea elements.
  1913 Can calc to copy I matrix to ta4 (current).
  2022 Resize ta4 larger and reduce can1.
  2037 Flow works, but not yet with the right formulation.
  2130 Can run with setInterval.
  2144 Make it symmetrical update for flow matrix.
  2218 Test witout infiltration and source, still fails.
  2247 It still fails even flow has been repair for the border.
  2307 It is a little bit better but do not understand why. Pause.
  2310 Rearrange the operation and it seems work.
  
  refs
  1. url https://www.hec.usace.army.mil/confluence/hmsdocs/hmstrm/surface-runoff/clark-unit-hydrograph-model [20221107].
*/


var H, I, S;
var sH, sI, sS;
var id;
var t = 0;

main();


function main() {
  createUIElements();
}



function calcData() {
  //console.log("calc data");
  
  var bt = event.target;
  if(bt.innerHTML == "Start") {
    id = setInterval(calculate, 100);
    bt.innerHTML = "Stop";
  } else {
    clearInterval(id);
    bt.innerHTML = "Start"
  }
  
}


function calculate() {
  H = add(H, S);
  H = average(H);
  //H = sub(H, I);
  //H = ge(H, 0)
  
  sS += sumOfElements(S);
  sI += sumOfElements(I);
  sH = sumOfElements(H);
  
  var res = strFromMatrix(H);
  
  var current = document.getElementById("current");
  current.value = res;
  current.value += " " + t + " +"
    + sS + " -"
    + sI + " "
    + sH.toFixed(3).padStart(6, ' ');
  
  drawMatrixOnCanvas(H, "grid");
  t++;
}


function sumOfElements(M) {
  var ROW = M.length;
  var COL = M[0].length;
  var sum = 0;
  for(var i = 0; i < ROW; i++) {
    for(var j = 0; j < COL; j++) {
      sum += M[i][j];
    }
  }
  return sum  
}


function drawMatrixOnCanvas(M, id) {
  var can = document.getElementById(id);
}


function average(M) {
  //console.log("flow");
  
  var ROW = M.length;
  var COL = M[0].length;
  //var N = zeroMatrix(ROW, COL);
  
  /**/
  if(t % 2 == 0) {
    for(var i = 0; i < ROW; i++) {
      for(var j = 0; j < COL; j++) {
        update(i, j, M);
      }
    }    
  } else {
    for(var j = 0; j < COL; j++) {
      for(var i = 0; i < ROW; i++) {
        update(i, j, M);
      }
    }        
  }
  /**/
  return M;  
}


function update(i, j, M) {
  var ROW = M.length;
  var COL = M[0].length;
  if(i == 0 && j == 0) {
    var sum = M[i][j] + M[i+1][j] + M[i][j+1] + M[i+1][j+1];
    sum = sum * 0.25;
    M[i][j] = sum;
    M[i+1][j] = sum;
    M[i][j+1] = sum;
    M[i+1][j+1] = sum;
  } else if(i == 0 && j == COL-1) {
    var sum = M[i][j] + M[i+1][j] + M[i][j-1] + M[i+1][j-1];
    sum = sum * 0.25;
    M[i][j] = sum;
    M[i+1][j] = sum;
    M[i][j-1] = sum;
    M[i+1][j-1] = sum;
  } else if(i == ROW-1 && j == 0) {
    var sum = M[i][j] + M[i-1][j] + M[i][j+1] + M[i-1][j+1];
    sum = sum * 0.25;
    M[i][j] = sum;
    M[i-1][j] = sum;
    M[i][j+1] = sum;
    M[i-1][j+1] = sum;
  } else if(i == ROW-1 && j == COL-1) {
    var sum = M[i][j] + M[i-1][j] + M[i][j-1] + M[i-1][j-1];
    console.log(M[i][j], M[i-1][j], M[i][j-1], M[i-1][j-1]);
    console.log(sum);
    sum = sum * 0.25;
    console.log(sum);
    M[i][j] = sum;
    M[i-1][j] = sum;
    M[i][j-1] = sum;
    M[i-1][j-1] = sum;
  } else if(i == 0) {
    var sum = M[i][j] + M[i][j-1] + M[i][j+1] + M[i+1][j];
    sum = sum * 0.25;
    M[i][j] = sum;
    M[i][j-1] = sum;
    M[i][j+1] = sum;
    M[i+1][j] = sum;    
  } else if(i == ROW-1) {
    var sum = M[i][j] + M[i][j-1] + M[i][j+1] + M[i-1][j];
    sum = sum * 0.25;
    M[i][j] = sum;
    M[i][j-1] = sum;
    M[i][j+1] = sum;
    M[i-1][j] = sum;    
  } else if(j == 0) {
    var sum = M[i][j] + M[i-1][j] + M[i+1][j] + M[i][j+1];
    sum = sum * 0.25;
    M[i][j] = sum;
    M[i-1][j] = sum;
    M[i+1][j] = sum;
    M[j][j+1] = sum;    
  } else if(j == COL -1) {
    var sum = M[i][j] + M[i-1][j] + M[i+1][j] + M[i][j-1];
    sum = sum * 0.25;
    M[i][j] = sum;
    M[i-1][j] = sum;
    M[i+1][j] = sum;
    M[j][j-1] = sum;    
  } else {
    var sum = M[i][j]
      + M[i-1][j] + M[i+1][j]
      + M[i][j-1] + M[i][j+1];
    sum = sum * 0.20;
    M[i][j] = sum;
    M[i-1][j] = sum;
    M[i+1][j] = sum;
    M[i][j-1] = sum;
    M[i][j+1] = sum;
  }
}


function ge(M, x) {
  var ROW = M.length;
  var COL = M[0].length;
  var N = zeroMatrix(ROW, COL);
  for(var i = 0; i < ROW; i++) {
    for(var j = 0; j < COL; j++) {
      N[i][j] = M[i][j] < x ? x : M[i][j];
    }
  }
  return N;
}


function strFromMatrix(M) {
  var ROW = M.length;
  var COL = M[0].length;
  var str = "";
  for(var i = 0; i < ROW; i++) {
    for(var j = 0; j < COL; j++) {
      str += M[i][j].toFixed(3).padStart(6, ' ');
      if(j < COL-1) str += " ";
    }
    str += "\n";
  }
  return str;
}


function readData() {
  //console.log("read data");
  
  var height = document.getElementById("height");
  H = matrixFromStr(height.value);
  
  var infil = document.getElementById("infil");
  I = matrixFromStr(infil.value);
  
  var source = document.getElementById("source");
  S = matrixFromStr(source.value);
  
  var current = document.getElementById("current");
  current.value = strFromMatrix(H);
  
  sH = 0;
  sI = 0;
  sS = 0;
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
  //console.log("load data");
  
  var height = document.getElementById("height");
  height.value
    = "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 9";
  
  var infil = document.getElementById("infil");
  infil.value
    = "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0";
    
  var source = document.getElementById("source");
  source.value
    = "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0\n"
    + "0 0 0 0 0 0 0 0";
}


function clearData() {
  //console.log("clear data");
  
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
  ta4.style.width = "436px";
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
  bt4.innerHTML = "Start";
  bt4.style.width = "50px";
  bt4.style.height = "37px";
  bt4.addEventListener("click", calcData);
  bt4.style.float = "left";
  
  var can1 = document.createElement("canvas");
  can1.id = "grid";
  can1.width = "146";
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