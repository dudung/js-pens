/*
  0012.js
  Sparisoma Viridi | https://github.com/dudung
  Include some LaTeX using MathJax in div element from textarea
  20221029 Create and test it.
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
}
