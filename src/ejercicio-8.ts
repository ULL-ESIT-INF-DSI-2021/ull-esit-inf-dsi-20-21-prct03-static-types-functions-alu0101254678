// ipsInRange(“10.0.0.0”, “10.0.0.50”)

let ip_Cad_1: string = '192.168.2.1';

let ip_Cad_1_Vector: Array<string> = ip_Cad_1.split('.'); 

let vector_aux: Array<number> = [];

let faltan_ceros: number = 0;

for (let indice = 0; indice < 4; indice++) {
  /*if( ip_Cad_1_Vector[indice].length < 8){
    faltan_ceros = 8 - ip_Cad_1_Vector[indice].length;

  }

  if (8 - ip_Cad_1_Vector[indice].length === 1) {
    
  }*/

  vector_aux.push(parseInt(ip_Cad_1_Vector[indice]));
}

console.log(`${vector_aux}`);

function rellenarCeros(numero: number, digitos: number, base = 10){
  let num = Math.abs(numero).toString(base),
      len = num.split('.',1)[0].length,
      signo = numero<0?'-':'';
  
  return signo + '0'.repeat(Math.max(0,digitos-len)) + num;
}

console.log( rellenarCeros(2, 8, 2) ); 

// let ip_Cad_1_Aux: string = ip_Cad_1.replace(/['.']/g, '');

// console.log(`${ip_Cad_1_Aux}`);

// let ip_Num_Aux: number = parseInt(ip_Cad_1_Aux, 2);

// console.log(`${ip_Num_Aux}`);