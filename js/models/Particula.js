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
        this.speed = 1.5;
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

    static linkParticulas(particula,  outrasParticulas, contexto) {
        for (const p of outrasParticulas) {
            const distancia = Math.hypot( (p.vPosition.x - particula.vPosition.x) , (p.vPosition.y - particula.vPosition.y) );
            if (distancia< 100)
            {
                contexto.linetWidth = 1;
                contexto.strokeStyle = 'white';
                contexto.beginPath();
                contexto.moveTo(particula.vPosition.x, particula.vPosition.y);
                contexto.lineTo(p.vPosition.x, p.vPosition.y);
                contexto.stroke();
            }
        }
    }
}