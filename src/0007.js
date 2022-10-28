/*
  0006.js
  Sparisoma Viridi | https://github.com/dudung
  Calculate roots of quadratic equationa using quadratic formula
  20221028 Create and test it.
*/

main();

function main() {
  var ta = document.createElement("textarea");
  ta.id = "ta";
  with(ta.style) {
    width = "180px";
    height = "140px";
    overflowY = "scroll";
    float = "left";
  }
  var hint = "a =\nb = \nc =\n";
  hint += "\nfor ax^2 + bx + c = 0\n";
  hint += "only the three first lines required\n";
  ta.placeholder = hint;
  
  var bt = document.createElement("button")
  bt.innerHTML = "Find<br>roots";
  bt.addEventListener("click", btclick);
  with(bt.style) {
    float = "left";
  }
  
  document.body.append(bt);
  document.body.append(ta);
}

function btclick() {
  var ta = document.getElementById("ta");
  lines = ta.value.split("\n");
  N = lines.length;
  a = "";
  b = "";
  c = "";
  
  for(var i = 0; i < N; i++) {
    x = lines[i].split("=")[0];
    if(x[0] == 'a') a = parseFloat(lines[i].split("=")[1]);
    if(x[0] == 'b') b = parseFloat(lines[i].split("=")[1]);
    if(x[0] == 'c') c = parseFloat(lines[i].split("=")[1]);
  }
  
  ta.value = "a = " + a + "\n";
  ta.value += "b = " + b + "\n";
  ta.value += "c = " + c + "\n";
  
  if(a.length != 0 && b.lenght != 0 && c.length != 0) {
    x1 = "";
    x2 = "";
  console.log(a, b, c);    
    D = b*b - 4*a*c;
    ta.value += "\nD = " + D + "\n";
    
    if(D >= 0) {
      x1 = (-b - Math.sqrt(D)) / (2*a);
      x2 = (-b + Math.sqrt(D)) / (2*a);
    } else {
      x1 = (-b / (2 * a)) + " + " + (Math.sqrt(-D) / (2*a)) + "i";
      x2 = (-b / (2 * a)) + " + " + (Math.sqrt(-D) / (2*a)) + "i";
    }
    
    ta.value += "\n";
    ta.value += "x1 = " + x1 + "\n"
    ta.value += "x2 = " + x2 + "\n"
  }
}
