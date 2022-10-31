/*
  0015.js
  Sparisoma Viridi | https://github.com/dudung
  Some functions related to matrix 
  20221031 Start to create it as simple as possible.
*/

/*
main();

function main() {
}
*/


function test_0015() {
  var M1 = zeroMatrix(2, 4);
  console.log(M1);
  
  var M2 = identityMatrix(3);
  console.log(M2);
  
  var M3 = fillMatrix(M2, 2);
  console.log(M4);
  
  M1[1][2] = 3;
  M1[0][3] = 1;
  var M4 = transpose(M1);
  console.log(M4);

  var M5 = [[1, 2, 3], [4, 5, 6]];
  var M6 = [[2, 3, 4], [3, 4, 2]];
  var M7 = add(M1, M2);
  console.log(M5);
  console.log(M6);
  console.log(M7);
  
  var M8 = neg(M5);
  var M9 = add(M5, M8);
  console.log(M5);
  console.log(M8);
  console.log(M9);
  
  var M10 = [[1, 2, 3], [4, 5, 6]];
  var M11 = [[2, 3], [3, 4], [1, 1]];
  var M12 = mul(M10, M11);
  console.log(M10);
  console.log(M11);
  console.log(M12);
}


function mul(M1, M2) {
  var ROW = M1.length;
  var MID = M1[0].length;
  var COL = M2[0].length;
  
  M3 = [];
  for(var i = 0; i < ROW; i++) {
    var row = [];
    for(var j = 0; j < COL; j++) {
      var sump = 0;
      for(var k = 0; k < MID; k++) {
         sump += M1[i][k] * M2[k][j]
      }
      row.push(sump);
    }
    M3.push(row);
  }
  
  return M3;
}


function neg(M) {
  var ROW = M.length;
  var COL = M[0].length;
  var N = [];
  for(var i = 0; i < ROW; i++) {
    var row = [];
    for(var j = 0; j < COL; j++) {
      row.push(-M[i][j]);
    }
    N.push(row);
  }
  return N;
}


function sub(M1, M2) {
  var ROW1 = M1.length;
  var COL1 = M1[0].length;
  var ROW2 = M2.length;
  var COL2 = M2[0].length;
  var ROW = Math.min(ROW1, ROW2);
  var COL = Math.min(COL1, COL2);
  
  M3 = [];
  for(var i = 0; i < ROW; i++) {
    var row = [];
    for(var j = 0; j < COL; j++) {
      row.push(M1[i][j] - M2[i][j]);
    }
    M3.push(row)
  }
  return M3;
}


function add(M1, M2) {
  var ROW1 = M1.length;
  var COL1 = M1[0].length;
  var ROW2 = M2.length;
  var COL2 = M2[0].length;
  var ROW = Math.min(ROW1, ROW2);
  var COL = Math.min(COL1, COL2);
  
  M3 = [];
  for(var i = 0; i < ROW; i++) {
    var row = [];
    for(var j = 0; j < COL; j++) {
      row.push(M1[i][j] + M2[i][j]);
    }
    M3.push(row)
  }
  return M3;
}


function transpose(M) {
  var COL = M.length;
  var ROW = M[0].length;
  var N = [];
  for(var i = 0; i < ROW; i++) {
    row = [];
    for(var j = 0; j < COL; j++) {
      row.push(M[j][i])
    }
    N.push(row);
  }
  return N;
}


function fillMatrix(M, x) {
  var ROW = M.length;
  var N = [];
  for(var i = 0; i < ROW; i++) {
    var row = [];
    row.length = M[i].length;
    row.fill(x);
    N.push(row);
  }
  return N;
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