/*
  0039.js
  Buttons creation and caption as number of click
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221105
  1542 Start this code.
*/


main();


function main() {
  var ROW = 10;
  var COL = 5
  var N = ROW * COL;
  var buttons = [];
  
  for(var i = 0; i < N; i++) {
    var btn = document.createElement("button");
    btn.caption = "0";
    btn.style.width = "20px";
    document.body.append(btn);
    buttons.push(btn);
  }
}
