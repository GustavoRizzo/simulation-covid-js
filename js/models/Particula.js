class Particula {

    constructor(context) {
        this.drawContext = context;
        this.radius = 10;
        this.vPosition = {
            x: Math.random() * this.drawContext.canvas.clientWidth,
            y: Math.random() * this.drawContext.canvas.clientHeight
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
        this.vPosition.x += this.vSpeed.x; 
        this.vPosition.y += this.vSpeed.y; 
    }
}