/*
  0048.js
  Default parameters for a circle divided into annulus sector
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221222
  1856 Start the default parameters definition.
  1937 Read parameters from string with newline characters.
*/


function getDefaultParameters() {
  var s = "";
  s += "RADIUS 10\n";
  s += "ROWS    4\n";
  s += "COLS    5\n";
  s += "SPEED   2\n";
  return s;
}

function readParameters(str) {
  var lines = str.split('\n');
  
  for(var l of lines) {
    if(l.length > 0) {
      var words = l.split(/\s+/);
      var key = words[0];
      var val = parseInt(words[1]);
      
      if(key == "RADIUS") radius = val;
      if(key == "ROWS") rows = val;
      if(key == "COLS") cols = val;
      if(key == "SPEED") speed = val;
    }
  }
  
  return [radius, rows, cols, speed];
}