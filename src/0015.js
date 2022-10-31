/*
  0015.js
  Sparisoma Viridi | https://github.com/dudung
  View matrix as colored grid in canvas 
  20221031 Start to create it as simple as possible.
*/

main();

function main() {
}


function test() {
  var M1 = zeroMatrix(2, 4);
  console.log(M1);
  
  var M2 = identityMatrix(3);
  console.log(M2);
}


function identityMatrix(RC) {
  var M = zeroMatrix(RC, RC);
  for(var i = 0; i < RC; i++) {
    M[i][i] = 1;
  }
  return M;
}


function zeroMatrix(ROW, COL) {
  var M = [];
  for(var i = 0; i < ROW; i++) {
    var row = [];
    row.length = COL;
    row.fill(0);
    M.push(row);
  }
  return M;
}