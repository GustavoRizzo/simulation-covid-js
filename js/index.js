console.clear();

// conect to DOM
const elCanvas = document.querySelector('#canvas');
const elBody = document.body;
//Dando contexto ao cnavas
const ctx = elCanvas.getContext('2d');

const width = elCanvas.width = elBody.clientWidth;
const height = elCanvas.height = elBody.clientHeight;


// Particula
class Particle {
    // variaveis globais:
    //    elCanvas, porem talves pudessemos passar o drawContex como paramento no contrutor.

    constructor(context) {
        this.drawContext = context;
        this.x = Math.random() * this.drawContext.canvas.clientWidth;
        this.y = Math.random() * this.drawContext.canvas.clientHeight;
        this.radius = 10;
    }

    draw() {
        this.drawContext.beginPath();
        this.drawContext.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        this.drawContext.closePath();
        this.drawContext.fillStyle = '#FFF';
        this.drawContext.fill();
    }
}

let particles = [];
particles.push(
    new Particle(ctx),
    new Particle(ctx),
    new Particle(ctx),
    new Particle(ctx)
);

let x = 0;
function render(){
    // variaveis globais:
    //    elCanvas, porem talves pudessemos passar o drawContex como paramento no contrutor.
    //    x

    // Criando o looping de renderização
    
    ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);

    particles.forEach (particle => {
        particle.draw(ctx);        
    });

    // Desenhando objeto
    ctx.fillStyle = '#F00';
    ctx.fillRect(x, 0, 100, 100);
    // animando
    x++;
    requestAnimationFrame(render);
}
render()

