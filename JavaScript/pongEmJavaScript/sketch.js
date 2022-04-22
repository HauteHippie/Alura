// Variáveis gerais
let altura = 400;
let comprimento = 600

// Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 5;

// Variáveis da Raquete do Jogador
let xMinhaRaquete = 10;
let yMinhaRaquete = 150;
let comprimentoMinhaRaquete = 10;
let alturaMinhaRaquete = 90;

// Variáveis da Raquete do Oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

// Variáveis de Colisão (p5.collide2d)
let hit = false;

// Sons do Jogo
let raquetada;
let ponto;
let trilha;

// Placar do Jogo
let meusPontos = 0;
let pontosOponente = 0;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(comprimento, altura);
  trilha.loop();
}

function draw() {
  background(0);
  mostraPlacar();
  mostraPlacar();
  mostraBolinha();
  mostraRaquete(xMinhaRaquete, yMinhaRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  moveBolinha();
  moveMinhaRaquete();
  moveRaqueteOponente();
  colisaoBolinhaBordas();
  colisaoRaqueteBiblioteca(xMinhaRaquete, yMinhaRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  avaliaPontos();
}

function mostraPlacar() {
  stroke(255);
  fill(color(255, 140, 0));
  rect(190, 10, 40, 20);
  rect(370, 10, 40, 20);
  textAlign(CENTER);
  textSize(16);
  fill(255);
  text(meusPontos, 210, 26);
  text(pontosOponente, 390, 26)
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete(x, y) {
  rect(x, y, comprimentoMinhaRaquete, alturaMinhaRaquete);
}

function moveMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yMinhaRaquete -= 5;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    yMinhaRaquete += 5;
  }
}

function moveRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoMinhaRaquete / 2 - 30;
  
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
}

function calculaChanceDeErrar() {
  if(pontosOponente >= meusPontos) {
    chanceDeErrar += 1;
    if (chanceDeErrar >= 39) {
      chanceDeErrar = 40;
    } else {
      chanceDeErrar -= 1;
      if (chanceDeErrar <= 35) {
        chanceDeErrar = 35;
      }
    }
  }
}

function moveBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBolinhaBordas() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  else if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function colisaoRaqueteBiblioteca(xRaquete, yRaquete) {
  hit = collideRectCircle(xRaquete, yRaquete, comprimentoMinhaRaquete, alturaMinhaRaquete, xBolinha, yBolinha, raio);
  
  if (hit == true){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function avaliaPontos() {
  if (xBolinha > 590) {
    ponto.play();
    meusPontos += 1;
  }
  else if (xBolinha < 10) {
    ponto.play();
    pontosOponente += 1;
  }
}
