/*
  0041.js
  Textarea onkeyup event
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221105
  1858 Start this code.
  1926 Finish the code.
*/


main();


function main() {
  var taL = document.createElement("textarea");
  taL.style.width = "300px";
  taL.style.height = "400px";
  taL.style.overflowY = "scroll";
  taL.placeholder = "type here (only letter, with or without shift)";
  
  var taR = document.createElement("textarea");
  taR.id = "out";
  taR.style.width = "300px";
  taR.style.height = "400px";
  taR.style.overflowY = "scroll";
  taR.disabled = "True";
  
  taL.addEventListener("keyup", taChange)
  
  document.body.append(taL);
  document.body.append(taR);
  taL.focus();
}


function taChange() {
  var code = event.keyCode;
  var shift = event.shiftKey;
  var ch = shift? String.fromCharCode(code) : String.fromCharCode(code + 32);
  var taOut = document.getElementById("out");
  if(code == 13) {
    taOut.value += "\n";
  } else {
    if(code != 16) {
      taOut.value += ch;      
    }
  }
  console.log(code);
}