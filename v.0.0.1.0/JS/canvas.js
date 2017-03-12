var canvas = document.getElementById('stars');
var main = document.getElementById('forkaen');
var width = main.clientWidth;
var height = document.documentElement.clientHeight;

canvas.setAttribute('width',width);
canvas.setAttribute('height',height);

document.body.style.overflow = "hidden";

function getRandomInt(min, max) {
  	return Math.random() * (max - min) + min;
}

var x , y ;
for(var i = 0 ; i < 250 ; i++){
	var op = getRandomInt(0.3,0.8);
	var currBall = {
		x : getRandomInt(4,canvas.width - 4),
		y : getRandomInt(4,canvas.height - 4),
		vx : getRandomInt(-1,1),
		vy : getRandomInt(-1,1),
		radius : getRandomInt(0.1,3),
		draw: function(pointer) {
	  		pointer.beginPath();
	   		pointer.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	   		pointer.closePath();
	   		eval("pointer.fillStyle = "+"'rgba(255,255,255,"+op+")'");
	  		pointer.fill();
		}
	};
 	eval('var ball'+i+' = currBall');
}

function draw() {
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
  	for(var i = 0 ; i < 250 ; i++){
  		eval('var currB = ball'+i);
  		currB.draw(ctx);
	  	currB.x += currB.vx;
	  	currB.y += currB.vy;
	  	if (currB.y + currB.vy > canvas.height - 3 || currB.y + currB.vy < 3) {
	  		currB.vy = -currB.vy;
		}
		if (currB.x + currB.vx > canvas.width - 3 || currB.x + currB.vx < 3) {
	  		currB.vx = -currB.vx;
		}
	}
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);