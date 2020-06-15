class Particula {

    constructor(context) {
        this.drawContext = context;
        this.x = Math.random() * this.drawContext.canvas.clientWidth;
        this.y = Math.random() * this.drawContext.canvas.clientHeight;
        this.radius = 10;
        this.speed = 10;
    }

    draw() {
        this.drawContext.beginPath();
        this.drawContext.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        this.drawContext.closePath();
        this.drawContext.fillStyle = '#FFF';
        this.drawContext.fill();

        this.update();
    }

    update() {
        this.x += this.speed; 
    }
}