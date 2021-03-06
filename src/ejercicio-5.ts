/*
  Funcion de Chuck Norris, debe ser escrita en una linea de codigo
*/

export function onePunch(cadena: string): string { if (cadena.length === 0){ return 'Broken!'; } else return (((((cadena.split(" ")).sort()).toString()).replace(/[e || a]/g, '')).toString()).replace(/[,]/g, ' '); }

let cadena_2: string = onePunch('Beard Jeans Hairbrush Knuckleduster Sand');
console.log(`${cadena_2}`);

cadena_2 = 'Beard Sack Gun Parachute Face-Kicking-Shoes';
console.log(`${onePunch(cadena_2)}`);
