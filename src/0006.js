/*
  0006.js
  Sparisoma Viridi | https://github.com/dudung
  Change background color of textarea by button click
  20221028 Create and test it.
*/

main();

function main() {
  var ta = document.createElement("textarea");
  ta.id = "ta";
  with(ta.style) {
    height = "120px";
    overflowY = "scroll";
    float = "left";
  }
  ta.placeholder = "click button on the left";
  
  var bt = document.createElement("button")
  bt.innerHTML = "Random<br>color";
  bt.addEventListener("click", btclick);
  with(bt.style) {
    float = "left";
  }
  
  document.body.append(bt);
  document.body.append(ta);
}

function btclick() {
  var ta = document.getElementById("ta");
  var h = "0123456789abcdef";
  r = Math.floor(Math.random() * 16);
  g = Math.floor(Math.random() * 16);
  b = Math.floor(Math.random() * 16);
  str = "#" + h[r] + h[g] + h[b];
  ta.style.background = str;
}
