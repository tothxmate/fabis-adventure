(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 500,
    height = 200,
    player = {
      x : width/2,
      y : height - 5,
      width : 5,
      height : 5,
      speed: 3,
      velX: 0,
      velY: 0
    },
    keys = [];

canvas.width = width;
canvas.height = height;

function update(){
  if (keys[38]) {
    // up arrow
  }
  if (keys[39]) {
    // right arrow
    if (player.velX < player.speed) {                         
        player.velX++;                  
    }          
  }          
  if (keys[37]) {                 
     // left arrow                  
    if (player.velX > -player.speed) {
        player.velX--;
    }
  }
  friction = 0.8;
  player.velX *= friction;
  player.x += player.velX;
  player.y += player.velY;
  if (player.x >= width-player.width) {
    player.x = width-player.width;
  } else if (player.x <= 0) {
    player.x = 0;
  }	
  // draw our player
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, player.width, player.height);
  // run through the loop again
  requestAnimationFrame(update);
}

window.addEventListener("load", function(){
  update();
});

document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});

