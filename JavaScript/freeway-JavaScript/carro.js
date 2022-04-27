// Variáveis do carro
let yCarros = [42, 98, 150, 210, 270, 318];
let xCarros = [600, 600, 600, 700, 800, 600];
let velocidadeCarros = [2, 3.5, 4, 3, 1, 2];
let larguraCarro = 66;
let comprimentoCarro = 36;

function mostraCarro() {
  for (let i = 0; i < carros.length; i++) {
    image(carros[i], xCarros[i], yCarros[i], larguraCarro, comprimentoCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < xCarros.length; i++ ) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaAPosicao() {
  for (let i = 0; i < carros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 700;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -70;
}
