/*
  0050.js
  Textarea element for input parameters
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221224
  1450 Start and distracted.
  1639 Continue after make draft/todo.md file.
  1743 Finish createParamsTextarea params and styles as object.
  1828 Continue with readParams.
  1909 Finish readParamsFromTextarea and create global variables.
  
  Refs
  1. Scroll textarea to bottom when updated
     url https://stackoverflow.com/a/7373136/9475509 [20221224].
  2. Style of an element
     url https://stackoverflow.com/a/45061666/9475509 [20221224].
  3. Change style of an element
     url https://stackoverflow.com/a/5192938/9475509 [20221224].
  4. Pygame Rect() arguments
     url https://stackoverflow.com/q/47829248/9475509 [20221224].
  5. Split on multiple white space or tabs
     url https://stackoverflow.com/a/42683530/9475509 [20221224].
*/


main();


function main() {
  var params = {
    "CIRCX": "20",
    "CIRCY": "10",
    "CIRCR": "40",
    "STROKE": "#00a",
    "FILL": "#ccf",
  };
  
  var styles = {
    "width": "120px",
    "height": "120px",
    "overflowY": "scroll",
  };
  
  var keys = {
    "CIRCX": "cx",
    "CIRCY": "cy",
    "CIRCR": "cr",
    "STROKE": "cstroke",
    "FILL": "cfill",
  }
  
  var id = "Params";
  var ta = createParamsTextarea(id, params, styles);
  document.body.append(ta);
  
  readParamsFromTextarea(id, keys);
  
  console.log(cx, cstroke, cfill);
}


function readParamsFromTextarea(id, keys) {
  var ta = document.getElementById(id);
  var str = ta.value;
  var lines = str.split('\n');
  for(var l of lines) {
    var cols = l.split(/(?:[[:space:]][[:space:]]+|\t)/);
    
    for(var k in keys) {
      if(k == cols[0]) {
        var num = parseFloat(cols[1]);
        if(isNaN(num)) {
          window[keys[k]] = cols[1];          
        } else {
          window[keys[k]] = num;
        }
      }
    }
  }
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
