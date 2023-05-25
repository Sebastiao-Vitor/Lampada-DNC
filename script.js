let lampada = document.getElementById('lampada')

function estaQuebrada() {
  return lampada.src.indexOf('quebrada') > -1
}

function Ligar() {
  if (!estaQuebrada()) {
    lampada.src = "img/ligada.svg"
  }
}
function Desligar() {
  if (!estaQuebrada()) {
    lampada.src = "img/desligada.svg"
  }
}

lampada.addEventListener('click', Quebrada)
function Quebrada() {
  lampada.src = "img/quebrada.svg"
}