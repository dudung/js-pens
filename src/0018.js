/*
  0018.js
  Sparisoma Viridi | https://github.com/dudung
  Process a CSV data from boid simulation
  20221101 Start to create this as in simplest way, copy paste.
*/

main();


function main() {
  var taIn = document.createElement("textarea");
  taIn.id = "csv-input";
  with(taIn.style) {
    width = "250px";
    height = "520px";
    overflowY = "scroll";
    float = "left";
  }
  taIn.placeholder = "copy and paste data to textarea\n";
  taIn.placeholder += "or load test data";
  
  var div = document.createElement("div");
  with(div.style) {
    background = "#eee";
    float = "left";
    width = "70px";
  }
  
  var bt1 = document.createElement("button");
  bt1.innerHTML = "Load test data";
  with(bt1.style) {
    width = "100%";
  }
  bt1.addEventListener("click", function() {
    taIn.value = testCSVData();
  });
  
  var bt2 = document.createElement("button");
  bt2.innerHTML = "Process data";
  with(bt2.style) {
    width = "100%";
  }
  
  var taOut = document.createElement("textarea");
  taOut.id = "txt-output";
  with(taOut.style) {
    width = "250px";
    height = "520px";
    overflowY = "scroll";
    float = "left";
  }
  
  document.body.append(taIn);
  document.body.append(div);
    div.append(bt1);
    div.append(bt2);
  document.body.append(taOut);
}


function testCSVData() {
  return `Boid,Speed
Boid0,3.677079,0
Boid1,2.031432,0
Boid2,2.653247,0
Boid3,1.439437,0
Boid4,3.47273,0
Boid5,2.108201,0
Boid6,2.755306,0
Boid7,1.585385,0
Boid8,3.345268,0
Boid9,4.418495,0
Boid10,4.716328,0
Boid0,2.174525,0.02
Boid1,2.297987,0.02
Boid2,3.110619,0.02
Boid3,1.578084,0.02
Boid4,4.964255,0.02
Boid5,1.531127,0.02
Boid6,1.643833,0.02
Boid7,4.010314,0.02
Boid8,3.930318,0.02
Boid9,3.94364,0.02
Boid10,3.290606,0.02
Boid0,2.901866,0.3533334
Boid1,4.213333,0.3533334
Boid2,4.174588,0.3533334
Boid3,4.269248,0.3533334
Boid4,3.928509,0.3533334
Boid5,3.809738,0.3533334
Boid6,1.497351,0.3533334
Boid7,1.562894,0.3533334
Boid8,2.16801,0.3533334
Boid9,2.591207,0.3533334
Boid10,3.78873,0.3533334`;
}