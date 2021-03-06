"use strict";
/*
  Funcion que calcula el siguiente numero mayor que se forma al reposicionar
  sus digitos
*/
function the_Next_Number(numero) {
    let intermedio_resto = 0;
    let intermedio_division = 0;
    let resultado_intermedio = 0;
    if (numero.toString().length === 1) {
        return -1;
    }
    if (numero.toString().length === 2) {
        intermedio_resto = numero % 10;
        intermedio_division = Math.trunc(numero / 10);
        // console.log(intermedio_resto);
        // console.log(intermedio_division);
        // console.log(`${numero}`);
        // console.log(parseInt(intermedio_resto.toString() + intermedio_division.toString()));
        if ((parseInt(intermedio_resto.toString() + intermedio_division.toString())) > numero) {
            return parseInt(intermedio_resto.toString() + intermedio_division.toString());
        }
        else {
            return -1;
        }
    }
    else {
        intermedio_resto = numero % 10;
        intermedio_division = ((Math.trunc(numero / 10)) % 10);
        // console.log(`${intermedio_resto}`);
        // console.log(`${intermedio_division}`);
        // console.log(`${numero % 100}`);
        if ((parseInt(intermedio_resto.toString() + intermedio_division.toString())) > (numero % 100)) {
            let numero_auxiliar = parseInt(intermedio_resto.toString() + intermedio_division.toString());
            // console.log(`${numero_auxiliar}`);
            let cifras_menos_dos = Math.trunc(numero / 100);
            // console.log(`${cifras_menos_dos}`);
            return parseInt((cifras_menos_dos.toString() + numero_auxiliar.toString()));
        }
        else {
            return -1;
        }
    }
}
let numero_1 = 21;
let numero_2 = 513;
let numero_3 = 2017;
console.log(the_Next_Number(numero_1));
console.log(the_Next_Number(numero_2));
console.log(the_Next_Number(numero_3));
