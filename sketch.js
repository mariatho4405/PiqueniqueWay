//Variáveis
    var imgFundo;
    var jogador;
    var imgComidas = [];
    var comidas = [];
    var pontos = 0;
    var somBomba;
    var somComidas;
    var imgAbertura;
    var controleTela = "INICIO";
    var imgFim;
    var vidas = 3;

//Imagens
function preload(){
    imgFundo = loadImage('./imgSite/Fundo02.jpg');
    jogador = loadImage('./imgSite/Cesta.png');
    imgComidas[0] = loadImage('./jogo/imgJogo/Item 01.png');
    imgComidas[1] = loadImage('./jogo/imgJogo/Item 02.png');
    imgComidas[2] = loadImage('./jogo/imgJogo/Item 03.png');
    imgComidas[3] = loadImage('./jogo/imgJogo/Item 04.png');
    imgComidas[4] = loadImage('./imgSite/bomba.png');
    imgAbertura = loadImage("imgSite/abertura.png");
    imgFim = loadImage("imgSite/fundoPerdeu.png");
//Variável do som
    somBomba = loadSound('som/som_bomba.mp3');
    somComidas = loadSound('som/som_itens.mp3');
  
//Criação
    comidas[0] = new Itens (200);
    comidas[1] = new Itens (200);
    comidas[2] = new Itens (200);
    comidas[3] = new Itens (200);
    comidas[4] = new Itens (200);

    jogador = new Jogador();
    
}

//Tamanho da tela de fundo
function setup() {
    createCanvas(600, 400).parent("jogo");
}

function keyPressed(){
    if(keyCode == 13){
        controleTela = "JOGO";
    }
}

function draw(){
    if(controleTela == "INICIO"){
        mostraAbertura();
    }else{
        executarJogo();
    }

    if(controleTela == "FIM"){
        mostraFim();
    }
} 