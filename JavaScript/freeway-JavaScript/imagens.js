// Carregando imagens e sons do jogo

let imagemEstrada;
let imagemAtor;
let imagemCarro;
let carros;

let somTrilha;
let somColisao;
let somPonto;

function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  carros = [carro1, carro2, carro3, carro1, carro3, carro2];
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}
