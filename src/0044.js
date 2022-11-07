/*
  0044.js
  Modify animation in boids.js from Ben Eater [1]
  and toggle pause with a click
  
  Sparisoma Viridi | https://github.com/dudung/js-pens
  
  20221107
  1249 Try it after discussion with rahmanfaiz.
  1259 It works locally using raw.githack.com [2].
  1459 Able to hack the callback function to animationLoop2.
  1511 Make CodePen, update GitHub, and inform rahmanfaiz.
  
  refs
  1. url https://github.com/beneater/boids/blob/master/boids.js [20221107].
  2. url url https://raw.githack.com/beneater/boids/master/boids.js [20221107].
*/


var PAUSE = false;
var CALLBACK_CHANGED = false;

main();

function main() {
  var can = document.createElement("canvas");
  can.id = "boids";
  can.width = "150";
  can.height = "150";
  can.style.border = "1px dashed white";
  
  can.addEventListener("click", function() {
    console.log("mouse click");
    
    if(!CALLBACK_CHANGED) {
      window["animationLoop"] = animationLoop2;
      CALLBACK_CHANGED = true;
    }
    
    PAUSE = !PAUSE;
    if(!PAUSE) {
      window.requestAnimationFrame(animationLoop2);
    }
  });
  
  document.body.style.margin = "0";
  document.body.style.background = "#282c34";
  document.body.style.overflow = "hidden";
  document.body.append(can);
}


// Main animation loop
// url https://github.com/beneater/boids/blob/master/boids.js
// Ben Eater [7 Feb 2022]
// is modified to animationLoop2 and insert the PAUSE state
function animationLoop2() {
  if(!PAUSE) {
    // Update each boid
    for (let boid of boids) {
      // Update the velocities according to each rule
      flyTowardsCenter(boid);
      avoidOthers(boid);
      matchVelocity(boid);
      limitSpeed(boid);
      keepWithinBounds(boid);

      // Update the position based on the current velocity
      boid.x += boid.dx;
      boid.y += boid.dy;
      boid.history.push([boid.x, boid.y])
      boid.history = boid.history.slice(-50);
    }

    // Clear the canvas and redraw all the boids in their current positions
    const ctx = document.getElementById("boids").getContext("2d");
    ctx.clearRect(0, 0, width, height);
    for (let boid of boids) {
      drawBoid(ctx, boid);
    }

    // Schedule the next frame
    window.requestAnimationFrame(animationLoop2);
  }
}
