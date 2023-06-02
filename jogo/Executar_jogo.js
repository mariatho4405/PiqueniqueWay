function executarJogo(){
    background(imgFundo);
    jogador.mova();

    for(let i=0;i<comidas.length;i++){
    comidas[i].mova(); 

    if(comidas[i].posY >400){
       comidas[i] = new Itens(comidas[i].posY);
    }
  
//Verificação do toque
    if (
    jogador.xInicial < comidas[i].xFinal &&
    jogador.xFinal > comidas[i].xInicial &&
    jogador.yInicial < comidas[i].yFinal &&
    jogador.yFinal > comidas[i].yInicial
     ){
    if(comidas[i].imagem == imgComidas[4]){
    pontos = 0;
    vidas--;
    somBomba.play();
   comidas[i] = new Itens(comidas[i].posY);

    
    }else{
    comidas[i] = new Itens(comidas[i].posY);
    pontos ++
    somComidas.play();
  }
 }

 if(vidas == 0){
  controleTela = "FIM"; 
  vidas = 3;
  pontos = 0;
  comidas[i] = new Itens();
 }
}
//Pontos contagem
    
    textSize(20)
    text("PONTOS: " + pontos,50,40) 
    text("VIDAS: " + vidas, 50,60)
}