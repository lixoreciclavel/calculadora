let numero1 = '';
let operador = '';
let numero2 = '';

function botaoClicado(valor) {
  let display = document.getElementById('display');
  if (valor == '+' || valor == '-' || valor == 'x' || valor == '/' || valor == '%') {
    operador = valor;
    display.value = '';
  } else {
    if (operador == '') {
      numero1 += valor;
      display.value = numero1;
    } else {
      numero2 += valor;
      display.value = numero2;
    }
  }
}

function calcular() {
  let resultado = 0;
  switch (operador) {
    case '+':
      resultado = parseFloat(numero1) + parseFloat(numero2);
      break;
    case '-':
      resultado = parseFloat(numero1) - parseFloat(numero2);
      break;
    case 'x':
      resultado = parseFloat(numero1) * parseFloat(numero2);
      break;
    case '/':
      resultado = parseFloat(numero1) / parseFloat(numero2);
      break;
    case '%':
        resultado = parseFloat((numero1) / 100) * (numero2);
        break;
  }
  let display = document.getElementById('display');
  display.value = resultado;
}

function limpar() {
  let display = document.getElementById('display');
  display.value = '';
  numero1 = '';
  operador = '';
  numero2 = '';
}
