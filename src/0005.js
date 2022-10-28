/*
  0005.js
  Sparisoma Viridi | https://github.com/dudung
  Create some random numbers in textarea triggered by button click event
  20221028 Create and test it.
*/

main();

var N = 23;

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
  bt.innerHTML = "Random";
  bt.addEventListener("click", btclick);
  with(bt.style) {
    float = "left";
  }
  
  document.body.append(bt);
  document.body.append(ta);
}

function btclick() {
  var ta = document.getElementById("ta");
  var str = ""
  for(var i = 0; i < N; i++) {
    x = Math.random();
    str += x.toFixed(3);
    str += ", " 
  }
  ta.value = str;
  ta.scrollTop = ta.scrollHeight;
}
