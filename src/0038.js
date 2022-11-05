/*
  0038.js
  Some elements of HTML with default style
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221105
  0923 Find info about the elements of HTML [1].
  0952 Finish this JS file.
  1023 Create of CodePen and update GitHub.
  
  References
  1. url https://html.spec.whatwg.org/#toc-semantics
*/


main();


function main() {
  var btn1 = document.createElement("button");
  btn1.innerHTML = "buttoN 1";

  var btn2 = document.createElement("button");
  btn2.innerHTML = "buTton 2";
  
  var btn3 = document.createElement("button");
  btn3.innerHTML = "Button 3";
  
  var txa1 = document.createElement("textarea");
  txa1.value = "content 1";
  
  var txa2 = document.createElement("textarea");
  txa2.value = "content 2";
  
  var txa3 = document.createElement("textarea");
  txa3.value = "content 3";
  
  var div1 = document.createElement("div");
  div1.style.width = "300px";
  div1.style.height = "300px";
  div1.style.background = "#fcc";
  div1.style.border = "1px #800 solid";
  div1.style.float = "left";
  div1.innerHTML = "div 1<br>";
  
  var div2 = document.createElement("div");
  div2.style.width = "300px";
  div2.style.height = "300px";
  div2.style.background = "#cfc";
  div2.style.border = "1px #080 solid";
  div2.style.float = "left";
  div2.innerHTML = "div 2<br>";

  var div3 = document.createElement("div");
  div3.style.width = "200px";
  div3.style.height = "200px";
  div3.style.background = "#ccf";
  div3.style.border = "1px #008 solid";
  div3.style.float = "right";
  div3.innerHTML = "div 3<br>";
  
  document.body.append(div1);
    div1.append(txa1);
    div1.append(btn1);
  document.body.append(div2);
    div2.append(btn2);
    div2.append(txa2);
    div2.append(div3);
      div3.append(btn3);
      div3.append(txa3);
}
