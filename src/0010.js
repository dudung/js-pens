/*
  0010.js
  Sparisoma Viridi | https://github.com/dudung
  Generate random x, y  [0, 1] data in textarea and delete it
  20221029 Create and test it.
*/

main();

function main() {
  var ta = document.createElement("textarea");
  ta.id = "ta";
  with(ta.style) {
    width = "150px";
    height = "315px";
    overflowY = "scroll";
    float = "left";
    tabSize = 4;
  }
  var hint = "click button";
  ta.placeholder = hint;
  
  var bt1 = document.createElement("button")
  bt1.innerHTML = "Random";
  bt1.addEventListener("click", btLoad);
  with(bt1.style) {
    width = "100%";
  }
  
  var bt2 = document.createElement("button")
  bt2.innerHTML = "Clear";
  bt2.addEventListener("click", btClear);
  with(bt2.style) {
    width = "100%";
  }
  
  var div = document.createElement("div");
  with(div.style) {
    float = "left";
    width = "70px";
  }
  
  document.body.append(div);
    div.append(bt1);
    div.append(bt2);
  document.body.append(ta);
}

function btLoad() {
  var ta = document.getElementById("ta");
  
  str = "";
  N = 21;
  for(var i = 0; i < N; i++) {
    x = Math.random().toFixed(3);
    y = Math.random().toFixed(3);
    
    str += i + "\t" + x + "\t" + y;
    if(i < N - 1) str += "\n";
  }
  
  ta.value = str;
}

function btClear() {
  var ta = document.getElementById("ta");
    str = "";
  ta.value = str;
}
