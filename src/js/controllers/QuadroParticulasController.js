import Particula from '../models/Particula'

export default class QuadroParticulasController{

    constructor() {

        // conect to DOM
        const elCanvas = document.querySelector('#canvas');
        const elQaudro = document.querySelector('#quadroPacticulas');
    
        // Faz com que o canvas ocupe o mesmo tamanho do quadro
        elCanvas.width = elQaudro.clientWidth;
        elCanvas.height = elQaudro.clientHeight;
    
        // Dando contexto ao cnavas
        this.ctx = elCanvas.getContext('2d');
    
        this.particulas = [];

        for (var i=0; i<35; i++){
            this.particulas.push( new Particula(this.ctx) );
        }  

        this.x = 0;
        this.render();
    }

    render(){
        
        // Criando o looping de renderização
        requestAnimationFrame(this.render.bind(this));
        this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth , this.ctx.canvas.clientHeight);

        this.particulas.forEach (particula => {
            particula.draw(this.ctx);
            Particula.linkParticulas(particula, this.particulas, this.ctx);        
        });

        // Desenhando quadrado teste
        this.ctx.fillStyle = '#0FF';
        this.ctx.fillRect(this.x, 0, 100, 100);
        // animando
        this.x++;        
    }
}
