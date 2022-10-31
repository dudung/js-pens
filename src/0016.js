/*
  0016.js
  Sparisoma Viridi | https://github.com/dudung
  Create random integer matrix in textarea
  Require: 0015.js or https://codepen.io/6unpnp/pen/jOKbjZd.js
  Require: 0017.js or https://codepen.io/6unpnp/pen/KKeVzqv.js
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
