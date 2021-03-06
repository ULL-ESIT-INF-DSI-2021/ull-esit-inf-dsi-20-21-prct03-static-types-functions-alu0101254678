/*
  Funcion que valida un mensaje de varias subcadenas, los valores de los
  numeros deben ser iguales al tamano de los caracteres que les acompanan
*/

function isValid(cadena: string): boolean {
  const vector_cad: Array<string> = ((cadena.split(/[0-9]/g)).splice(1));

  const vector_num: Array<string> = (cadena.split(/[a-z]/g)).filter((word) => word.length >= 1);


  let centinela: boolean = true;

  let tamanio_car: number = 0;


  let indice_general: number = 0;

  for (let indice = 0; indice < vector_num.length; indice ++) {
    tamanio_car = vector_cad[indice].length;

    if ((parseInt(vector_num[indice])) != tamanio_car) {
      centinela = false;
      console.log(`La cadena es `);
      return false;
    } else {
      centinela = true;
    }
    // console.log((parseInt(vector_num[indice])) != tamanio_car);
    indice_general++;
  }

  console.log(`La cadena es `);
  return centinela;
}

console.log(isValid('3say5hello2hi'));


