let primerNumero = "";
let segundoNumero = "";
let operacion = "";

function ingresaDigit(digito) {
  if (!operacion) {
    primerNumero += digito;
    document.getElementById("display").innerHTML = primerNumero;
  } else {
    segundoNumero += digito;
    document.getElementById("display").innerHTML = segundoNumero;
  }
}

function cambioOperacion(operac) {
  operacion = operac;
}

function igual() {
  if (primerNumero && segundoNumero) {
    if (operacion == "suma") {
      resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
    }
    if (operacion == "resta") {
      resultado = parseFloat(primerNumero) - parseFloat(segundoNumero);
    }
    if (operacion == "multiplicacion") {
      resultado = parseFloat(primerNumero) * parseFloat(segundoNumero);
    }
    if (operacion == "division") {
      resultado = parseFloat(primerNumero) / parseFloat(segundoNumero);
    }
    if (operacion == "potencia") {
      resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
    }
    if (operacion == "raiz") {
      resultado = parseFloat(primerNumero) - parseFloat(segundoNumero);
    }
    document.getElementById("display").innerHTML = resultado;
    primerNumero = resultado;
    segundoNumero = "";
  }
}

function borrar() {
  if (primerNumero && segundoNumero) {
    segundoNumero = segundoNumero.substring(0, segundoNumero.length - 1);
    document.getElementById("display").innerHTML = segundoNumero;
  } else {
    primerNumero = primerNumero.substring(0, primerNumero.length - 1);
    document.getElementById("display").innerHTML = primerNumero;
  }
}
