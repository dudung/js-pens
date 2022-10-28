/*
  0004.js
  Sparisoma Viridi | https://github.com/dudung
  Add new line to text area triggered by button click event
  20221028 Create and test it.
*/

main();

var count = 0;

function main() {
  var ta = document.createElement("textarea");
  ta.id = "ta";
  with(ta.style) {
    height = "100px";
    overflowY = "scroll";
    float = "left";
  }
  ta.placeholder = "click button on the left";
  
  var bt = document.createElement("button")
  bt.innerHTML = "Add new line";
  bt.addEventListener("click", btclick);
  with(bt.style) {
    float = "left";
  }
  
  document.body.append(bt);
  document.body.append(ta);
}

function btclick() {
  var ta = document.getElementById("ta");
  count += 1;
  ta.value += "Line number " + count + "\n";
  ta.scrollTop = ta.scrollHeight;
}
