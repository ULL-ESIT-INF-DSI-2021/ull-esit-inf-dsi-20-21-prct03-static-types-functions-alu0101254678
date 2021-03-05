//console.log('Hola Mundo');
function hola(param) {
    console.log(`${param}`);
}
import { isLeapYear } from './ejercicio-1.js';
const anio = 1996;
const bisiesto = isLeapYear(anio);
// console.log(`El anio ${anio} es bisiexto: ${bisiesto}`);
import { isValid } from './ejercicio-3.js';
// const ejemplo_string: string = '2eh3sol';
const cadena_valida = isValid('3 soles');
console.log(cadena_valida);
