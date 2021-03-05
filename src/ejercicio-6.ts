function isValidISBN(cadena: string): boolean {
  /* if (cadena.search(/['-']/g) != 0) {
    // cadena.replace(/[-]/g, '');
    console.log(cadena.replace(/[-]/g, ''));
  }*/

  cadena = cadena.replace(/[-]/g, '');
  // cadena = cadena.replace(/['x' || 'X']/g, '10');

  console.log(`${cadena}`);

  let tamanio: number = cadena.length;

  // console.log(`${tamanio}`);

  let indice_Aux: number = 1;
  let resultado: number = 0;

  let letra_a_Numero: number = 0;

  let caracter_Aux: string;

  for (let indice: number = tamanio - 1; indice >= 0; indice--) {
    // console.log(cadena[indice]);
    caracter_Aux = cadena[indice];
    if (caracter_Aux === 'x' || caracter_Aux === 'X') {
      letra_a_Numero = 10;
    } else {
      letra_a_Numero = parseInt(caracter_Aux);
    }
    // letra_a_Numero = parseInt(caracter_Aux);
    // console.log(parseInt(caracter_Aux));
    resultado += letra_a_Numero * indice_Aux;
    // console.log(`${resultado}`);
    indice_Aux++;
  }
  
  if (resultado % 11 === 0) {
    return true;
  } else {
    return false;
  }
}

let cadena_ej: string = '3-598-21507-X';
console.log(isValidISBN(cadena_ej));
