/*
  0009.js
  Sparisoma Viridi | https://github.com/dudung
  Generate data in textarea and delete it
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
  bt1.innerHTML = "Load";
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
    width = "50px";
  }
  
  document.body.append(div);
    div.append(bt1);
    div.append(bt2);
  document.body.append(ta);
}

function btLoad() {
  var ta = document.getElementById("ta");
  str = "0\t0.0\n";
  str += "1\t0.3\n";
  str += "2\t0.6\n";
  str += "3\t0.9\n";
  str += "4\t1.2\n";
  str += "5\t1.5\n";
  str += "6\t1.8\n";
  str += "7\t2.1\n";
  str += "8\t2.4\n";
  str += "9\t2.7\n";
  str += "10\t3.0\n";
  str += "11\t3.3\n";
  str += "12\t3.6\n";
  str += "13\t3.9\n";
  str += "14\t4.2\n";
  str += "15\t4.5\n";
  str += "16\t4.8\n";
  str += "17\t5.1\n";
  str += "18\t5.4\n";
  str += "19\t5.7\n";
  str += "20\t6.0";
  ta.value = str;
}

function btClear() {
  var ta = document.getElementById("ta");
    str = "";
  ta.value = str;
}
