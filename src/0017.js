/*
  0017.js
  Sparisoma Viridi | https://github.com/dudung
  Some function related to random matrix
  20221101 Start to create this as simple as possible, int only.
*/


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
