/*
  0016.js
  Sparisoma Viridi | https://github.com/dudung
  Create random integer matrix
  Require: 0015.js or https://codepen.io/6unpnp/pen/jOKbjZd.js
  20221101 Start to create this as simple as possible.
*/

main();

function main() {
  var ta = document.createElement("textarea");
  ta.id = "ta";
  with(ta.style) {
    float = "left";
    width = "150px";
    height = "300px";
    overflowY = "scroll";
  }
  
  var bt = document.createElement("button");
  bt.innerHTML = "Random<br>4 - 8";
  bt.addEventListener("click", function() {
    var imin = 4;
    var imax = 8;
    var M = zeroMatrix(18, 8);
    var R = randomMatrixInt(M, imin, imax);
    var T = matrix2Text(R);
    ta.value = T;    
  });
  
  document.body.append(ta);
  document.body.append(bt);
  
}


function test_0016() {
  var Z = zeroMatrix(10, 5);
  console.log(Z);
  
  var R = randomMatrixInt(Z);
  console.log(R);
}


function matrix2Text(M) {
  var ROW = M.length;
  var COL = M[0].length;
  var t = "";
  for(var i = 0; i < ROW; i++) {
    for(var j = 0; j < COL; j++) {
      t += M[i][j];
      if(j < COL -1) t+= " ";
    }
    t += "\n";
  }
  return t;
  
}


function randomMatrixInt(M, imin, imax) {
  var ROW = M.length;
  var COL = M[0].length;
  var N = [];
  for(var i = 0; i < ROW; i++) {
    var row = [];
    for(var j = 0; j < COL; j++) {
      var x = randInt(imin, imax);
      row.push(x);
    }
    N.push(row);
  }
  return N;
}


function randInt(imin, imax) {
  var x = Math.floor(Math.random() * (imax - imin + 1)) + imin;
  return x;
}