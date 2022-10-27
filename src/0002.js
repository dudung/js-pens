/*
  0002.js
  Sparisoma Viridi | https://github.com/dudung
  Read numbers and show their sum from textarea to other one
  20221028 Create and test it.
*/

main();

function main() {
  var lta = document.createElement("textarea");
  lta.id = "lta";
  with(lta.style) {
    height = "200px";
    overflowY = "scroll";
    float = "left";
  }
  ph = "write some numbers, one in each line, ";
  ph += "then press Sum button"
  lta.placeholder = ph;
  
  var cbt = document.createElement("button")
  cbt.innerHTML = "Sum";
  cbt.addEventListener("click", btclick);
  with(cbt.style) {
    float = "left";
  }
  
  var rta = document.createElement("textarea");
  rta.id = "rta";
  with(rta.style) {
    height = "200px";
    overflowY = "scroll";
    float = "left";
  }
  
  document.body.append(lta);
  document.body.append(cbt);
  document.body.append(rta);
}

function btclick() {
  var lta = document.getElementById("lta");
  var rta = document.getElementById("rta");
  var t = lta.value;
  lines = t.split("\n")
  N = lines.length;
  sum = 0;
  if(N > 0) {
    for(var i = 0; i < N; i++) {
      if(lines[i].length > 0) {
        sum += parseFloat(lines[i]);
      }
    }    
  }
  rta.value = sum;
}
