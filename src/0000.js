/*
  0000.js
  https://github.com/dudung
  copy content from left textarea to righttext area after button is clicked
  20221027 Create and test it at https://jsfiddle.net/6unpnp/hpanL8cs.
*/

function main() {
  console.log("0000.js");
  
  var lta = document.createElement("textarea");
  lta.id = "lta";
  with(lta.style) {
    height = "200px";
    overflowY = "scroll";
    float = "left";
  }
  lta.placeholder = "write some words\nclick Copy button";
  
  var cbt = document.createElement("button")
  cbt.innerHTML = "Copy";
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

main();

function btclick() {
  var lta = document.getElementById("lta");
  var rta = document.getElementById("rta");
  var t = lta.value;
  rta.value = t;
}
