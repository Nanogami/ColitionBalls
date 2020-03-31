var balls = []

function setup() {
	createCanvas(windowWidth, windowHeight)
	tablero = new Tablero(windowWidth,windowHeight,'#FAFAFA')
}

function draw() {
	tablero.draw()
	for(let i=0 ; i < balls.length; i++){
		balls[i].draw()
	}
}

function mousePressed(){
	ball = new Ball(mouseX, mouseY, 50, this.balls)
	balls.push(ball)
}