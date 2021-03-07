/*
  Funcion que devuelve el numero de direcciones IP dentro de un rango
*/
/* function zfill(number: number, width: number) {
  const numberOutput = Math.abs(number); /* Valor absoluto del número
  const length = number.toString().length; /* Largo del número
  const zero = '0'; /* String de cero

  if (width <= length) {
    if (number < 0) {
      return ('-' + numberOutput.toString());
    } else {
      return numberOutput.toString();
    }
  } else {
    if (number < 0) {
      return ('-' + (zero.repeat(width - length)) + numberOutput.toString());
    } else {
      return ((zero.repeat(width - length)) + numberOutput.toString());
    }
  }
}

function rellenarCeros(numero: number, digitos: number, base = 10): string {
  const num = Math.abs(numero).toString(base);
  const len = num.split('.', 1)[0].length;
  const signo = numero<0?'-':'';

  return signo + '0'.repeat(Math.max(0, digitos-len)) + num;
}

let ip_1: string = '10.0.0.0';

let ip_Cad_1_V: Array<string> = ip_1.split('.');

console.log(`${ip_Cad_1_V}`);
let vector_Aux_1: string = '';
for (let indice:number = 0; indice < 4; indice ++) {
  vector_Aux_1 += rellenarCeros(parseInt(ip_Cad_1_V[indice]), 8, 2);
}

let binario_1: string = parseInt(vector_Aux_1).toString();
console.log(`${binario_1}`);


let ip_2: string = '1.1.1.1';

let ip_Cad_2_V: Array<string> = ip_2.split('.');

console.log(`${ip_Cad_2_V}`);
let vector_Aux_2: string = '';
for (let indice:number = 0; indice < 4; indice ++) {
  vector_Aux_2 += rellenarCeros(parseFloat(ip_Cad_2_V[indice]), 8, 2);
}

let binario_2: string = parseFloat(vector_Aux_2).toString();
console.log(`${binario_2}`);

console.log(binTodecimal(binario_2));

function binTodecimal(binstr: string){
  return binstr.split('').reverse().reduce(function(x, y, i){
    return (y === '1') ? x + Math.pow(2, i) : x;
  }, 0);
}*/
/* function ip2int(ip): number {
  return ip.split('.').reduce(function(ipInt: number, octet: number) { return (ipInt<<8) + parseInt(octet, 10)}, 0) >>> 0;
}

let ip_1: string = '192.188.1.1';
console.log(IPtoNum(ip_1));*/
export function convertIpToNumeric(ipAddress) {
    let arrIp = ipAddress.split('.');
    let segment1 = parseInt(arrIp[0]);
    let segment2 = parseInt(arrIp[1]);
    let segment3 = parseInt(arrIp[2]);
    let segment4 = parseInt(arrIp[3]);
    // reverse order calc 
    // eg. 255.255.240.0     &lt;-- start at the end
    // 0 + (240*256) + (255*65536) + (255*16777216)
    let calc = segment4 + (segment3 * 256) + (segment2 * 65536) + (segment1 * 16777216);
    return calc;
}
/* function convertNumericToIp(bigNumber) {

  let Octet1 = Math.floor(bigNumber / 16777216)
  let RestOfIP = bigNumber - (Octet1 * 16777216)

  let Octet2 = Math.floor(RestOfIP / 65536)
  let RestOfIP = RestOfIP - (Octet2 * 65536)

  let Octet3 = Math.floor(RestOfIP / 256)
       
  let Octet4 = RestOfIP - (Octet3 * 256)

  let returnValue = Octet1 + &quot;.&quot; + Octet2 + &quot;.&quot; + Octet3 + &quot;.&quot; + Octet4;

  return returnValue;

}*/
export function ipsInRange(ip_1, ip_2) {
    // console.log(convertIpToNumeric(ip_1));
    // console.log(convertIpToNumeric(ip_2));
    let ip_1_decimal = convertIpToNumeric(ip_1);
    let ip_2_decimal = convertIpToNumeric(ip_2);
    let resultado_final = ip_2_decimal - ip_1_decimal;
    console.log(`${resultado_final}`);
}
ipsInRange('20.0.0.10', '20.0.1.0');
ipsInRange('10.0.0.0', '10.0.0.50');
ipsInRange('10.0.0.0', '10.0.1.0');
