var canvas = document.getElementById('stars');
var cut_area = document.getElementById("cut");
// var main = document.getElementById("main");
// canvas.style.width= main.clientWidth+"px";
// canvas.style.height= main.clientHeight+"px";
var area_x = 268;
var area_y = 146;
function getRandomInt(min, max) {
  	return Math.random() * (max - min) + min;
}

var ball = {
	x : getRandomInt(1,canvas.width),
	y : getRandomInt(1,canvas.height),
	vx : getRandomInt(-5,5),
	vy : getRandomInt(-5,5),
	radius: 2,
	color: 'rgba(32,32,32,1)',
	draw: function(pointer) {
	  	pointer.beginPath();
	   	pointer.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	   	pointer.closePath();
	   	pointer.fillStyle = this.color;
	   	pointer.fill();
	}
};

function draw() {
	var ctx = canvas.getContext('2d');
  	ctx.clearRect(0,0, canvas.width, canvas.height);
  	ball.draw(ctx);
  	ball.x += ball.vx;
  	ball.y += ball.vy;
  	if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  		ball.vy = -ball.vy;
	}
	if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  		ball.vx = -ball.vx;
	}
	if(ball.x + ball.vx > area_x &&
		ball.y + ball.vy > area_y &&
	 	ball.y + ball.vy < canvas.height - area_y &&
		ball.x + ball.vx < canvas.width - area_x
		){
		if(ball.x > canvas.width - area_x || ball.x < area_x){
			ball.vx = -ball.vx;
		}
		if(ball.y > canvas.height - area_y || ball.y < area_y){
			ball.vy = -ball.vy;
		}
	}
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);