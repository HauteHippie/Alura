// Variáveis do ator
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