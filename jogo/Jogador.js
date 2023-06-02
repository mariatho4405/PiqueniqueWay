//Comandos do jogador
class Jogador{
    constructor(){
      this.imagem = loadImage('imgSite/Cesta.png'); 
      this.posX = 200;
      this.posY = 260;
      this.velocidade = 5;
      this.largura = 180;
      this.altura = 130;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  //Movimentação do jogador no teclado
    mova(){
      image(this.imagem,this.posX,this.posY,this.largura,this.altura)
      
      if((keyIsDown(39) && (this.xFinal<600))){
        this.posX += this.velocidade;
      }
      if((keyIsDown(37) && (this.xInicial>0))){
        this.posX -= this.velocidade;
      }
      
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }
  