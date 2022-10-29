/*
  0012.js
  Sparisoma Viridi | https://github.com/dudung
  Include some LaTeX using MathJax in div element from textarea
  20221029 Start to create it.
  20221030 Continue to improve it with five examples.
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
  var hint = "write MathJax LaTeX expression";
  ta.placeholder = hint;
  
  var dv = document.createElement("div");
  dv.id = "dv";
  with(dv.style) {
    border = "1px solid #888";
    float = "left";
    width = "250px";
    height = "319px";
  }
  dv.width = parseInt(dv.style.width);
  dv.height = parseInt(dv.style.height);
  
  var bdiv = document.createElement("div");
  with(bdiv.style) {
    float = "left";
    width = "80px";
  }
  
  var bt1 = document.createElement("button")
  bt1.innerHTML = "Example 1";
  bt1.addEventListener("click", btE1);
  with(bt1.style) {
    width = "100%";
  }
  
  var bt2 = document.createElement("button")
  bt2.innerHTML = "Example 2";
  bt2.addEventListener("click", btE2);
  with(bt2.style) {
    width = "100%";
  }

  var bt3 = document.createElement("button")
  bt3.innerHTML = "Example 3";
  bt3.addEventListener("click", btE3);
  with(bt3.style) {
    width = "100%";
  }

  var bt4 = document.createElement("button")
  bt4.innerHTML = "Example 4";
  bt4.addEventListener("click", btE4);
  with(bt4.style) {
    width = "100%";
  }

  var bt5 = document.createElement("button")
  bt5.innerHTML = "Example 5";
  bt5.addEventListener("click", btE5);
  with(bt5.style) {
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
  dv.innerHTML = ta.value;
  MathJax.typeset();
}

// it works locally but not on Codepen
function btE1() {
  var ta = document.getElementById("ta");
  ta.value = "$y = ax^2 + bx + c$";
}
// to work it requieres
/*
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
*/
// before the MathJax cdn is called

function btE2() {
  var ta = document.getElementById("ta");
  var s = "$$\n"
  s += "x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\n";
  s += "$$";
  ta.value = s;
}

function btE3() {
  var ta = document.getElementById("ta");
  var s = "$$\\tag{10}\n"
  s += "z = \\tan x - \\frac{\\sin y}{\\cos y}\n";
  s += "$$";
  ta.value = s;
}

function btE4() {
  var ta = document.getElementById("ta");
  var s = "$$\n"
  s += "\\begin{array}{rcl}\n";
  s += "x & = & -5x + 12 \\newline\n"
  s += "x + 5x & = & 12 \\newline\n"
  s += "6x & = & 12 \\newline\n"
  s += "x & = & 2\n"
  s += "\\end{array}\n";
  s += "$$";
  ta.value = s; 
}

function btE5() {
  var ta = document.getElementById("ta");
  var s = "$$\n"
  s += "M = \\left[\n"
  s += "\\begin{array}{ccc}\n";
  s += "1 & 2 & 3 \\newline\n"
  s += "2 & 4 & 6 \\newline\n"
  s += "3 & 6 & 9 \\newline\n"
  s += "4 & 8 & 12 \\newline\n"
  s += "5 & 10 & 15 \\newline\n"
  s += "6 & 12 & 18 \\newline\n"
  s += "\\end{array}\n";
  s += "\\right]\n"
  s += "$$";
  ta.value = s; 
}
