/*
  0039.js
  Buttons creation, caption as number of mouseover, color change
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221105
  1542 Start this code.
  1619 Finish the code.
  1625 Make on CodePen and update GitHub.
*/


main();


function main() {
  var N = 400;
  
  for(var i = 0; i < N; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = "0";
    btn.style.width = "40px";
    btn.style.fontFamily = "Courier New";
    btn.style.background = "rgb(0, 0, 0)";
    btn.style.color = "rgb(255, 255, 255)";
    document.body.append(btn)
    btn.addEventListener("click", resetCount);
    btn.addEventListener("mousemove", updateCount);
  }
}


function updateCount() {
  var btn = event.target;
  var n = parseInt(btn.innerHTML);
  if(n < 255) {
    btn.innerHTML = ++n;
    btn.style.background = "rgb("
      + (n) + ","
      + (n) + ","
      + (n) + ")";
    btn.style.color = "rgb("
      + (255 - n) + ","
      + (255 - n) + ","
      + (255 - n) + ")"; 
  }
}


function resetCount() {
  var btn = event.target;
  btn.innerHTML = 0;
  btn.style.background = "rgb(0, 0, 0)";
  btn.style.color = "rgb(255, 255, 255)";
}
