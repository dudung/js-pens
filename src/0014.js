/*
  0014.js
  Sparisoma Viridi | https://github.com/dudung
  Add two matrices from textarea and show result in div using MathJax
  20221030 Start to create it with more complex layout of elements.
*/

main();

function main() {
  var dv1 = document.createElement("div");
  with(dv1.style) {
    border = "0px solid #888";
    background = "#eee";
    float = "left";
    width = "180px";
    height = "179px";
  }
  
  var ta1 = document.createElement("textarea");
  ta1.id = "ta1";
  with(ta1.style) {
    width = "174px";
    height = "150px";
    overflowY = "scroll";
    float = "left";
    tabSize = 4;
  }
  
  var bt10 = document.createElement("button")
  bt10.innerHTML = "C";
  bt10.addEventListener("click", function (){ btClear("ta1"); });
  with(bt10.style) {
    width = "25%";
  }

  var bt11 = document.createElement("button")
  bt11.innerHTML = "Ex11";
  bt11.addEventListener("click", function (){ btExample("ex11", "ta1"); });
  with(bt11.style) {
    width = "25%";
  }

  var bt12 = document.createElement("button")
  bt12.innerHTML = "Ex12";
  bt12.addEventListener("click", function (){ btExample("ex12", "ta1"); });
  with(bt12.style) {
    width = "25%";
  }

  var bt13 = document.createElement("button")
  bt13.innerHTML = "Ex13";
  bt13.addEventListener("click", function (){ btExample("ex13", "ta1"); });
  with(bt13.style) {
    width = "25%";
  }
  
  var dv2 = document.createElement("div");
  with(dv2.style) {
    border = "0px solid #888";
    background = "#eee";
    float = "left";
    width = "180px";
    height = "179px";
  }
  
  var ta2 = document.createElement("textarea");
  ta2.id = "ta2";
  with(ta2.style) {
    width = "174px";
    height = "150px";
    overflowY = "scroll";
    float = "left";
    tabSize = 4;
  }
  
  var bt20 = document.createElement("button")
  bt20.innerHTML = "C";
  bt20.addEventListener("click", function (){ btClear("ta2"); });
  with(bt20.style) {
    width = "25%";
  }

  var bt21 = document.createElement("button")
  bt21.innerHTML = "Ex21";
  bt21.addEventListener("click", function (){ btExample("ex21", "ta2"); });
  with(bt21.style) {
    width = "25%";
  }

  var bt22 = document.createElement("button")
  bt22.innerHTML = "Ex22";
  bt22.addEventListener("click", function (){ btExample("ex22", "ta2"); });
  with(bt22.style) {
    width = "25%";
  }

  var bt23 = document.createElement("button")
  bt23.innerHTML = "Ex23";
  bt23.addEventListener("click", function (){ btExample("ex23", "ta2"); });
  with(bt23.style) {
    width = "25%";
  }
  
  var dv3 = document.createElement("div");
  with(dv3.style) {
    border = "0px solid #888";
    background = "#eee";
    float = "left";
    width = "180px";
    height = "179px";
  }
  
  var ta3 = document.createElement("textarea");
  ta3.id = "ta3";
  with(ta3.style) {
    width = "174px";
    height = "150px";
    overflowY = "scroll";
    float = "left";
    tabSize = 4;
  }
  
  var bt30 = document.createElement("button")
  bt30.innerHTML = "Add";
  bt30.addEventListener("click", function (){ btClear("ta3"); });
  with(bt30.style) {
    width = "50%";
  }
  
  var bt31 = document.createElement("button")
  bt31.innerHTML = "MatJax";
  bt31.addEventListener("click", function (){
    btMathJax("ta1", "ta2", "ta3"); 
  });
  with(bt31.style) {
    width = "50%";
  }

  var dv4 = document.createElement("div");
  with(dv4.style) {
    border = "0px solid #888";
    background = "#fee";
    float = "left";
    width = "540px";
    height = "180px";
  }
  
  var ta4 = document.createElement("div");
  ta4.id = "ta3";
  with(ta4.style) {
    width = "539x";
    height = "180px";
    border = "1px solid #888";
  }
  
  document.body.append(dv1);
    dv1.append(ta1);
    dv1.append(bt10);
    dv1.append(bt11);
    dv1.append(bt12);
    dv1.append(bt13);
  document.body.append(dv2);
    dv2.append(ta2);
    dv2.append(bt20);
    dv2.append(bt21);
    dv2.append(bt22);
    dv2.append(bt23);
  document.body.append(dv3);
    dv3.append(ta3);
    dv3.append(bt30);
    dv3.append(bt31);
  document.body.append(dv4);
    dv4.append(ta4);
}

function btClear(taId) {
  var ta = document.getElementById(taId);
  ta.value = "";
}

function btExample(exId, taId) {
  var ta = document.getElementById(taId);
  ta.value = exId;
}

function btMathJax(ta1Id, ta2Id, ta3Id) {
  var ta1 = document.getElementById(ta1Id);
  var ta2 = document.getElementById(ta2Id);
  var ta3 = document.getElementById(ta3Id);
  //console.log(ta1, ta2, ta3);
}
