/*
  Funcion que calcula el factorial de un numero
*/
export function factorial(dato) {
    let r = 1;
    for (let i = dato; i > 0; i--) {
        r *= i;
    }
    return r;
}
/*
  Funcion que calcula el decimal de un factorial
*/
export function factorialToDecimal(numero) {
    const iCantidad = 0;
    let iTemp = numero;
    let iTemporal = 0;
    let res = 0;
    for (let indice = 0; indice < numero.toString().length; indice++) {
        if (indice === 0) {
            iTemporal = iTemp % 10;
            res += iTemporal * factorial(indice);
        }
        else {
            iTemp = Math.trunc(iTemp / 10);
            iTemporal = iTemp % 10;
            res += iTemporal * factorial(indice);
        }
    }
    return numero;
}
/*
  Funcion que calcula el factorial de un decimal, lo devuelve como un vector
*/
export function decimalToFactorial(n, vector_aux) {
    const digitos = [];
    for (let i = vector_aux.length - 1; i >= 0; i--) {
        digitos.unshift(n % vector_aux[i]);
        n = Math.floor(n / vector_aux[i]);
    }
    return digitos;
}
console.log(factorialToDecimal(341010));
console.log(decimalToFactorial(463, [6, 5, 4, 3, 2, 1]));
