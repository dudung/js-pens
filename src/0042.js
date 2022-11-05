/*
  0042.js
  Use div element for preformatted text but with color
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221105
  2104 Start this code with empty but this information.
  20221106
  0432 Continue with static example, not yet automatic.
  0456 Finish <x style='color:#000'> and </x> tag pair for coloring.
  0457 CodePen and GitHub.
*/


main();


function main() {
  var divpre = document.createElement("div");
  
  divpre.style.fontFamily = "monospace";
  divpre.style.whiteSpace = "pre";
  divpre.style.background = "#777";
  divpre.style.color = "#eee";
  divpre.style.padding = "0px 15px";
  
  var x = 0;
  var y = x + 2.5;
  
  divpre.innerHTML =`
<x style='color:#8c8;'>/*
  0042.js
  Use div element for preformated text but with color
*/</x>
<x style='color:#ff0;'>function</x> main() {
  <x style='color:#ff0;'>var</x> divpre = document.createElement(<x style='color:#faa;'>"div"</x>);
  
  divpre.style.fontFamily = <x style='color:#faa;'>"monospace"</x>;
  divpre.style.whiteSpace = <x style='color:#faa;'>"pre"</x>;
  divpre.style.background = <x style='color:#faa;'>"#777"</x>;
  divpre.style.color = <x style='color:#faa;'>"#eee"</x>;
  
  <x style='color:#ff0;'>var</x> x = <x style='color:#9ff;'>0</x>;
  <x style='color:#ff0;'>var</x> y = x + <x style='color:#9ff;'>2.5</x>;
  
  divpre.innerHTML = <x style='color:#faa;'>''</x>;
}

`;
  
  document.body.append(divpre);
}
