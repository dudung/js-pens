/*
  0012.js
  Sparisoma Viridi | https://github.com/dudung
  Include some LaTeX using MathJax in div element from textarea
  20221029 Start to create it.
  20221030 Continue to improve it with example.
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
  
  var bt1 = document.createElement("button")
  bt1.innerHTML = "Example 1";
  bt1.addEventListener("click", btE1);
  
  var bt2 = document.createElement("button")
  bt2.innerHTML = "Example 2";
  bt2.addEventListener("click", btE2);

  var bt3 = document.createElement("button")
  bt3.innerHTML = "Example 3";
  bt3.addEventListener("click", btE3);

  var bt4 = document.createElement("button")
  bt4.innerHTML = "Example 4";
  bt4.addEventListener("click", btE4);

  var bt = document.createElement("button")
  bt.innerHTML = "MathJax";
  bt.addEventListener("click", btMJ);
  with(bt.style) {
    float = "left";
  }
  
  
  
  document.body.append(ta);
  document.body.append(bt);
  document.body.append(dv);
}

function btMJ() {
  var ta = document.getElementById("ta");
  var dv = document.getElementById("dv");
  dv.innerHTML = ta.value;
}
