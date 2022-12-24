/*
  0050.js
  A simple JS object and JSON
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221224
  1450 Start to learn about this.
  
  Refs
  1. JSON Object v. JavaScript Object
     url https://medium.com/geekculture/f00ae788cc1f [20221224].
  2. Use of let and var
     url https://stackoverflow.com/a/21907082/9475509 [20221224].
*/

var a = 2
let b = 1;

{
  console.log(a);
  //console.log(b);

  let b = 3
  var a = 100;
}

//var a = -2

console.log(a);
console.log(b);
