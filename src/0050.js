/*
  0050.js
  Textarea element for input parameters
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221224
  1450 Start and distracted.
  1639 Continue after make draft/todo.md file.
  
  Refs
  1. Scroll textarea to bottom when updated
     url https://stackoverflow.com/a/7373136/9475509 [20221224].
  2. Style of an element
     url https://stackoverflow.com/a/45061666/9475509 [20221224].
  3. Change style of an element
     url https://stackoverflow.com/a/5192938/9475509 [20221224].
  4. Pygame Rect() arguments
     url https://stackoverflow.com/q/47829248/9475509 [20221224].
*/


main();


function main() {
  var params = {
    "LETF": "20",
    "TOP": "10",
    "WIDTH": "40",
    "HEIGHT": "30",
  };
  
  var styles = {
    "width": "200px",
    "height": "120px",
    "overflowY": "scroll",
  };
  
  var id = "Params";
  var ta = createParamsTextarea(id, params, styles);
  document.body.append(ta);
}


function createParamsTextarea(id, params, styles) {
  var ta = document.createElement("textarea");
  ta.id = id;
  
  var str = "";
  for(var key in params) {
    str += key + "\t" + params[key] + '\n';
  }
  ta.value = str;
  
  for(var key in styles) {
    ta.style[key] = styles[key];
  }
  
  return ta;
}
