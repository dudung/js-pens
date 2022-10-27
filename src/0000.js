/*
  0000.js
  Sparisoma Viridi | https://github.com/dudung
  Click a button and display 'Hello, World!' in a textarea
  20221027 Create and test it.
*/

main();

function main() {
  var ta = document.createElement("textarea");
  ta.id = "ta";
  with(ta.style) {
    height = "100px";
    overflowY = "scroll";
    float = "left";
  }
  ta.placeholder = "click Hello button";
  
  var bt = document.createElement("button")
  bt.innerHTML = "Hello";
  bt.addEventListener("click", btclick);
  with(bt.style) {
    float = "left";
  }
  
  document.body.append(bt);
  document.body.append(ta);
}

function btclick() {
  var ta = document.getElementById("ta");
  ta.value = "Hello, World!";
}
