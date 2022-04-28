// Variáveis do carro
let yCarros = [42, 98, 150, 215, 265, 320];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [2, 3.5, 4, 3.1, 1, 5];
let larguraCarro = 66;
let comprimentoCarro = 36;

function mostraCarro() {
  for (let i = 0; i < carros.length; i++) {
    image(carros[i], xCarros[i], yCarros[i], 66, 36);
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
