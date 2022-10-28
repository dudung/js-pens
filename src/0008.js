/*
  0008.js
  Sparisoma Viridi | https://github.com/dudung
  Use for loop to arrange letters in right triangle
  20221028 Create and test it.
*/

main();

function main() {
  var ta = document.createElement("textarea");
  ta.id = "ta";
  with(ta.style) {
    width = "180px";
    height = "150px";
    overflowY = "scroll";
    float = "left";
  }
  var hint = "click button";
  ta.placeholder = hint;
  
  var bt = document.createElement("button")
  bt.innerHTML = "Arrange<br> 0 in &angle;|";
  bt.addEventListener("click", btclick);
  with(bt.style) {
    float = "left";
  }
  
  document.body.append(bt);
  document.body.append(ta);
}

function btclick() {
  var ta = document.getElementById("ta");
  
  str = "";
  N = 10;
  for(var i = 1; i < N; i++) {
    for(var j = 0; j < i; j++) {
      str += "0";
    }
    str += "\n";
  }
  
  ta.value = str;
}
