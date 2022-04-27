// Variáveis do ator
let hit = false;
let xAtor = 277;
let yAtor = 366;

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

function verificaColisao() {
  for (let i = 0; i < carros.length; i++) {
    hit = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, comprimentoCarro, xAtor, yAtor, 15);
    if (hit) {
      colidiu();
    }
  }
}

function colidiu() {
  yAtor = 366;
}
