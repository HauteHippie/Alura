// Variáveis do ator
let xAtor = 277;
let yAtor = 366;
let hit = false;

let pontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 45, 33);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
      yAtor -= 4; 
  }
  else if (keyIsDown(DOWN_ARROW)) {
    if (podeMover()) {
    yAtor += 4;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < carros.length; i++) {
    hit = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, comprimentoCarro, xAtor, yAtor, 15);
    if (hit) {
      colidiu();
      somColisao.play();
      if ( pontosMaiorQueZero()) {
        pontos--; 
      }
    }
  }
}

function colidiu() {
  yAtor = 366;
}

function incluiPontos(){
  textSize(25);
  fill(255, 240, 60);
  textAlign(CENTER);
  text(pontos, width / 5, 27)
}

function marcaPontos() {
  if (yAtor < 30) {
    somPonto.play();
    pontos++;   
    yAtor = 366;
  }
}

function pontosMaiorQueZero() {
  return pontos > 0;
}

function podeMover() {
  return yAtor < 366;
}
