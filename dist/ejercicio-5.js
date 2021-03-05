// let cadena_1: string = 'Beard Jeans Hairbrush Knuckleduster Sand';
// let vector_c: Array<string> = cadena_1.split(" ");
// console.log( ((((vector_c.sort()).toString()).replace(/[e || a]/g, '')).toString()) );
// let cadena_aux: string = ((((vector_c.sort()).toString()).replace(/[e || a]/g, '')).toString());
// console.log(cadena_aux.replace(/[,]/g, ' '));
export function onePunch(cadena) { if (cadena.length === 0) {
    return 'Broken!';
}
else
    return (((((cadena.split(" ")).sort()).toString()).replace(/[e || a]/g, '')).toString()).replace(/[,]/g, ' '); }
let cadena_2 = onePunch('Beard Jeans Hairbrush Knuckleduster Sand');
console.log(`${cadena_2}`);
cadena_2 = 'Beard Sack Gun Parachute Face-Kicking-Shoes';
console.log(`${onePunch(cadena_2)}`);
