let cadena: string = '3hey5hello2hiiiii';


// let cadena_1: string = ((cadena.split(/[0-9]/g)).toString()).trim();

let vector_cad: Array<string> = ((cadena.split(/[0-9]/g)).splice(1));

let vector_num: Array<string> = (cadena.split(/[a-z]/g)).filter((word) => word.length >= 1);

console.log(`${vector_cad}`);
console.log(`${vector_num}`);


let centinela: boolean = true;

let tamanio_car: number = 0;

console.log(`${vector_num.length}`);
let indice_general: number = 0;

for (let indice = 0; indice < vector_num.length; indice ++) {
  tamanio_car = vector_cad[indice].length;
  console.log(`${tamanio_car}`);
  //console.log(`${vector_cad[indice]}`);
  console.log((parseInt(vector_num[indice])));
  //console.log(vector_num[indice]);

  if ((parseInt(vector_num[indice])) != tamanio_car) {
    centinela = false;
  }
  else{
    centinela = false;
  }
  console.log((parseInt(vector_num[indice])) != tamanio_car);

  // centinela = true;
  indice_general++;

}

console.log(`${centinela}`);
console.log(`${indice_general}`);