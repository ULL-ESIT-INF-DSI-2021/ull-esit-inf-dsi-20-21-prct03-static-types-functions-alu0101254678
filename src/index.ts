console.log('Hola Mundo');

function hola(param: number): void {
  console.log(`${param}`);
}

import {isLeapYear} from './ejercicio-1.js';

const anio: number = 1996;
const bisiesto: boolean = isLeapYear(anio);
console.log(`El anio ${anio} es bisiexto: ${bisiesto}`);


