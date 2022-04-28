// Variáveis do ator
let xAtor = 277;
let yAtor = 366;

let pontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 45, 33);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 4;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    yAtor += 4;
  }
}

function incluiPontos(){
  textSize(25);
  fill(255, 240, 60);
  textAlign(CENTER);
  text(pontos, width / 5, 27)
}

function marcaPontos() {
  if (yAtor < 30) {
    pontos++;   
    yAtor = 366;
  }
}
