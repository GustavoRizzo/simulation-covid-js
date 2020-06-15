class QuadroParticulasController{

    constructor() {

        // conect to DOM
        const elCanvas = document.querySelector('#canvas');
        const elQaudro = document.querySelector('#quadroPacticulas');
    
        // Faz com que o canvas ocupe o mesmo tamanho do quadro
        elCanvas.width = elQaudro.clientWidth;
        elCanvas.height = elQaudro.clientHeight;
    
        // Dando contexto ao cnavas
        this.ctx = elCanvas.getContext('2d');
    
        console.log ('antes');
    
        let particlas = [];
        particlas.push(
            new Particula(this.ctx),
            new Particula(this.ctx),
            new Particula(this.ctx),
            new Particula(this.ctx)
        );
    
        this.x = 0;
         
        this.render(particlas);
    }

    render( particlas){
        // variaveis globais:
        //    x , existe somente para animação do quadrado de teste

        // Criando o looping de renderização
        requestAnimationFrame(()=>this.render);
        this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth , this.ctx.canvas.clientHeight);

        particlas.forEach (particla => {
            particla.draw(this.ctx);        
        });

        // Desenhando quadrado teste
        this.ctx.fillStyle = '#F00';
        this.ctx.fillRect(this.x, 0, 100, 100);
        // animando
        this.x++;
        console.log(this.x);
        
    }

}
