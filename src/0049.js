/*
  0049.js
  Update textarea with setInterval triggered by buttons
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221224
  0938 Start the project with elements layout.
  1004 Create 20 buttons and 1 textarea.
  1008 Reduce to 10 buttons to suit time interval.
  1104 Record all SO refs for future references.
  1112 Create style using JS as in [9].
  1114 Upload to Codepen.
  1115 Update toc in GitHub.
  
  Refs
  1. Create dictionary
     url https://stackoverflow.com/a/22315575/9475509 [20221224].
  2. Delete entry of dictionary
     url https://stackoverflow.com/a/27809732/9475509 [20221224].
  3. setInterval and clearInterval
     url https://stackoverflow.com/a/109091/9475509 [20221224].
  4. Leading zeros
     url https://stackoverflow.com/q/10073699/9475509 [20221224].
  5. Textarea scrolled to bottom as updated
     url https://stackoverflow.com/a/9170709/9475509 [20221224].
  6. Clicked style
     url https://stackoverflow.com/a/65350732/9475509 [20221224].
  7. Add class to an elememnt
     url https://stackoverflow.com/a/69869373/9475509 [20221224].
  8. CSS invert color
     url https://stackoverflow.com/q/23428133/9475509 [20221224].
  9. Ceate style with JS
     url https://stackoverflow.com/q/23428133/9475509 [20221224].
*/


main();


function main() {
  createStyles();
  createAndArrangeElements();
}


function createStyles() {
  var css = ".on { filter: invert(100%); }";
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  
  head.appendChild(style);
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
}


function createAndArrangeElements() {
  console.log("Create and arrange elements");
  
  var divL = document.createElement("div");
  divL.style.width = "30px";
  divL.style.height = "300px";
  divL.style.float = "left";
  divL.style.border = "0px solid #000";
  
  var divR = document.createElement("div");
  divR.style.width = "300px";
  divR.style.height = "300px";
  divR.style.float = "left";
  divR.style.paddingLeft = "4px";
  
  var ta = document.createElement("textarea");
  ta.style.boxSizing = "border-box";
  ta.style.width = "100%";
  ta.style.height = "100%";
  ta.style.overflowY = "scroll";
  ta.id = "Output";
  
  var captions = [
    "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "10",
  ];
  var btns = createButtons(captions);
  
  document.body.append(divL);
    for(b of btns) divL.append(b);
  document.body.append(divR);
    divR.append(ta);
}


function createButtons(captions) {
  var btns = [];
  for(var i of captions) {
    var btn = document.createElement("button");
    btn.innerHTML = i;
    btn.id = i;
    btn.style.width = "100%";
    btn.style.height = "10%";
    btn.addEventListener("click", clickButton);
    btns.push(btn);
  }
  
  return btns;
}

var proc = {};

function clickButton() {
  var ta = document.getElementById("Params");
  var btn = event.target;
  //console.log("Click button");
  //console.log(btn.innerHTML);
  
  if(proc[btn.innerHTML] == undefined) {
    proc[btn.innerHTML] = setInterval(
      function() {
        var str = ("00" + btn.innerHTML).slice(-2);
        updateOutput("Output", str); 
      },
      parseInt(btn.innerHTML) * 100
    );
    btn.classList.add("on");
  } else {
    clearInterval(proc[btn.innerHTML]);
    delete proc[btn.innerHTML];
    btn.classList.remove("on");
  }
  
}


function updateOutput(id, str) {
  var ta = document.getElementById(id);
  ta.value += str + " ";
  ta.scrollTop = ta.scrollHeight;
}
