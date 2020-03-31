class Ball{

	constructor(x, y, w, balls){
		this.x = x
		this.y = y
		this.w = w
		this.c = color(random(255),random(255),random(255))		
		this.dirX = this.direction()
		this.dirY = this.direction()
		this.balls = balls
		this.speed = 2
	}

	draw(){
		push()
		noStroke();
		fill(this.c)
		ellipse(this.x, this.y, this.w)
		pop()
		this.move()
		this.bounce()
	}

	move(){
		this.x += this.speed * this.dirX
		this.y += this.speed * this.dirY
	}

	direction(){
		return floor(random(3)) * 2 - 1
	}

	bounce(){
		for(let i=0; i<this.balls.length; i++)
		{
			const dX = this.x - this.balls[i].x;
            const dY = this.y - this.balls[i].y;
            const distance = Math.sqrt(dX * dX + dY * dY);

            if (distance < floor(this.w/2) + floor(this.w/2)) {
                
            	this.balls[i].dirX=-this.balls[i].dirX;
                this.balls[i].dirY=-this.balls[i].dirY;
                this.dirX=-this.dirX;
                this.dirY=-this.dirY;
            }
		}

		if(this.y > (height - (this.w/2) )){
			this.dirY -=1
		}

		if(this.y < (0 + (this.w/2) )){
			this.dirY +=1
		}

		if(this.x > (width - (this.w/2) )){
			this.dirX -=1
		}

		if(this.x < (0 + (this.w/2) )){
			this.dirX +=1
		}
	}
}