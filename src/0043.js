/*
  0043.js
  Try TikZ code using TikZJax
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221107
  1023 Try this code locally at the office and error.
  1042 Make at CodePen and it works.
  1043 Update GitHub.
*/


main();

function main() {
  var s = document.createElement("script");
  s.type = "text/tikz";
  var ss = "\\begin{tikzpicture}";
  ss += "\\draw (0,0) circle (1in);";
  ss += "\\end{tikzpicture}";
  s.innerHTML = ss;
  document.body.append(s);  
}
