//Para movimentar as comidas
class Itens{
    constructor(parametroX){
      this.imagem = imgComidas[int(random(0,4.9))];
      this.posX = random(10,560);
      this.posY = 0;
      this.velocidade = random(1,5);
      this.largura = 40;
      this.altura = 50;
      
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  
  //Para movimentar as comidas
    mova(){
      this.posY+=this.velocidade;
      image(this.imagem,this.posX,this.posY,this.largura,this.altura);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }