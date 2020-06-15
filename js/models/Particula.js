class Particula {

    constructor(context) {
        this.drawContext = context;
        this.drawContextWidthLimit = this.drawContext.canvas.clientWidth;
        this.drawContextHeightLimit = this.drawContext.canvas.clientHeight;

        this.radius = 10;
        this.vPosition = {
            x: Math.random() * this.drawContextWidthLimit,
            y: Math.random() * this.drawContextHeightLimit
        };        
        this.speed = 3;
        this.directionAngle = Math.floor(Math.random() * 360);
        this.vSpeed = {
            x: (Math.cos(this.directionAngle) * this.speed),
            y: (Math.sin(this.directionAngle) * this.speed)
        }
    }

    draw() {
        this.drawContext.beginPath();
        this.drawContext.arc( this.vPosition.x, this.vPosition.y, this.radius, 0, Math.PI*2);
        this.drawContext.closePath();
        this.drawContext.fillStyle = '#FFF';
        this.drawContext.fill();

        this.update();
    }

    update() {
        this.checkBoudaries();
        this.vPosition.x += this.vSpeed.x; 
        this.vPosition.y += this.vSpeed.y; 
    }

    checkBoudaries() {
        if ( this.vPosition.x < 0 || this.vPosition.x > this.drawContextWidthLimit ) {
            this.vSpeed.x *= -1;
        }

        if ( this.vPosition.y < 0 || this.vPosition.y > this.drawContextHeightLimit ) {
            this.vSpeed.y *= -1;
        }
    }
}