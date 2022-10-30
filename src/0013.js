/*
  0013.js
  Sparisoma Viridi | https://github.com/dudung
  Matrix from textarea to div using MathJax
  20221030 Start to create it and it works.
*/

main();

function main() {
  var ta = document.createElement("textarea");
  ta.id = "ta";
  with(ta.style) {
    width = "250px";
    height = "315px";
    overflowY = "scroll";
    float = "left";
    tabSize = 4;
  }
  var hint = "write matrix\n";
  hint += "one row in one line\n";
  hint += "column seperated by space\n";
  hint += "e.g. for 2x3 matrix\n\n";
  hint += "1.2 -5 8.3E-2\n";
  hint += "321 100.24 -4.3E+32\n\n";
  hint += "or click matrix n button";
  ta.placeholder = hint;
  
  var dv = document.createElement("div");
  dv.id = "dv";
  with(dv.style) {
    border = "1px solid #888";
    float = "left";
    width = "359px";
    height = "319px";
  }
  dv.width = parseInt(dv.style.width);
  dv.height = parseInt(dv.style.height);
  
  var bdiv = document.createElement("div");
  with(bdiv.style) {
    float = "left";
    width = "70px";
  }
  
  var bt1 = document.createElement("button")
  bt1.innerHTML = "Matrix 1";
  bt1.addEventListener("click", btE1);
  with(bt1.style) {
    width = "100%";
  }
  
  var bt2 = document.createElement("button")
  bt2.innerHTML = "Matrix 2";
  bt2.addEventListener("click", btE2);
  with(bt2.style) {
    width = "100%";
  }

  var bt3 = document.createElement("button")
  bt3.innerHTML = "Matrix 3";
  bt3.addEventListener("click", btE3);
  with(bt3.style) {
    width = "100%";
  }

  var bt4 = document.createElement("button")
  bt4.innerHTML = "Matrix 4";
  bt4.addEventListener("click", btE4);
  with(bt4.style) {
    width = "100%";
  }

  var bt5 = document.createElement("button")
  bt5.innerHTML = "Matrix 5";
  bt5.addEventListener("click", btE5);
  with(bt5.style) {
    width = "100%";
  }

  var bt6 = document.createElement("button")
  bt6.innerHTML = "Matrix 6";
  bt6.addEventListener("click", btE6);
  with(bt6.style) {
    width = "100%";
  }
  
  var btC = document.createElement("button")
  btC.innerHTML = "Clear";
  btC.addEventListener("click", btClear);
  with(btC.style) {
    width = "100%";
  }
  
  var bt = document.createElement("button")
  bt.innerHTML = "MathJax";
  bt.addEventListener("click", btMJ);
  with(bt.style) {
    width = "100%";
  }

  document.body.append(ta);
  document.body.append(bdiv);
    bdiv.append(btC);
    bdiv.append(bt1);
    bdiv.append(bt2);
    bdiv.append(bt3);
    bdiv.append(bt4);
    bdiv.append(bt5);
    bdiv.append(bt6);
    bdiv.append(bt);
  document.body.append(dv);
}

function btClear() {
  var ta = document.getElementById("ta");
  ta.value = "";
}

function btMJ() {
  var ta = document.getElementById("ta");
  var dv = document.getElementById("dv");
  var mat = strToArray(ta.value);
  var jax = arrayToMathJax(mat);
  dv.innerHTML = jax;
  MathJax.typeset();
}

function btE1() {
  var ta = document.getElementById("ta");
  var s = ""
  s += "1 0 0 0 0\n";
  s += "0 1 0 0 0\n";
  s += "0 0 1 0 0\n";
  s += "0 0 0 1 0\n";
  s += "0 0 0 0 1";
  ta.value = s;
}

function btE2() {
  var ta = document.getElementById("ta");
  var s = ""
  s += "1 2 3 4 5 6 7 8\n";
  s += "2 3 4 5 6 7 8 9\n";
  s += "3 4 5 6 7 8 9 0\n";
  s += "4 5 6 7 8 9 0 1";
  ta.value = s;
}

function btE3() {
  var ta = document.getElementById("ta");
  var s = ""
  s += "1.0 1.2 0.4 5.7\n";
  s += "0.0 2.3 0.5 3.8\n";
  s += "0.0 3.4 0.1 2.9\n";
  s += "0.0 4.5 0.3 1.0\n";
  s += "0.0 5.6 1.6 0.9\n";
  s += "0.0 6.7 0.9 1.8\n";
  s += "0.0 7.8 3.9 2.7\n";
  s += "1.0 8.9 1.7 3.6\n";
  ta.value = s;
}

function btE4() {
  var ta = document.getElementById("ta");
  var s = "";
  s += "-1 +1 -1 +1 -1 +1 -1 +1\n";
  s += "+1 -1 +1 -1 +1 -1 +1 -1\n";
  s += "-1 +1 -1 +1 -1 +1 -1 +1\n";
  ta.value = s;
}

function btE5() {
  var ta = document.getElementById("ta");
  var s = ""
  s += "+0 -1 +1 -1 +1 -0 +1 -0\n";
  s += "-1 +0 -1 +1 -0 +1 -1 +1\n";
  s += "+1 -0 +1 -0 +1 -1 +0 -1\n";
  s += "-0 +1 -0 +1 -1 +1 -1 +0\n";
  s += "+1 -0 +1 -1 +1 -0 +1 -1\n";
  ta.value = s;
}

function btE6() {
  var ta = document.getElementById("ta");
  var s = ""
  s += "1 x x^2 x^3 x^4 x^5 x^6\n";
  s += "1 x^{-1} x^{-2} x^{-3} x^{-4} x^{-5} x^{-6}\n";
  s += "1 2 3 4 5 6 7\n";
  s += "\\frac12 \\frac13 \\frac14 \\frac15 \\frac16 \\frac17 \\frac18\n";
  s += "1 \\sqrt2 \\frac38 \\sin{x} \\cos{y} \\tan{z} 7-\\frac1x\n";
  ta.value = s;
}

function strToArray(str) {
  var lines = str.split("\n");
  var N = lines.length;
  if(lines[N - 1] == 0) N--;
  var Mat = [];
  for(var j = 0; j < N; j++) {
    var cols = lines[j].split(" ");
    var M = cols.length;
    var row = [];
    for(var i = 0; i < M; i++) {
      row.push(cols[i]);
    }
    Mat.push(row);
  }
  return Mat;
}

function arrayToMathJax(mat) {
  var N = mat.length;
  var M = mat[0].length;
  var cols = "c".repeat(M);
  var str_matrix = "";
  
  for(var j = 0; j < N; j++) {
    row = ""; 
    for(var i = 0; i < M; i++) {
      row += mat[j][i];
      if(i < M - 1)
        row += " & "
      else {
        row += "\\newline\n";
      }
    }
    str_matrix += row;
  }
  
  var mjs = "$$\n";
  mjs += "\\left[\n";
  mjs += "\\begin{array}{" + cols + "}\n";
  mjs += str_matrix;
  mjs += "\\end{array}\n";
  mjs += "\\right]\n";
  mjs += "$$";
  
  return mjs;
}
