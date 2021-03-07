# Desarrollo de Sistemas Informáticos
## Práctica 3 - Tipos de Datos Estáticos y Funciones
## Yago Pérez Molanes (alu0101254678@ull.edu.es)
__*Contenidos del informe*__

__*Pasos realizados para el desarrollo de la práctica*__

* Algunas tareas a realizar previamente:
  * Aceptar la tarea asignada a [GitHub Classroom](https://classroom.github.com/assignment-invitations/043a4b635e0a45d17d138439626f2f2f/status)

## __Introducción y Objetivos__
En esta práctica conoceremos como se usan las funciones y los tipos de datos estáticos en el lenguaje TypeScript, a través de una serie
ejercicios que se proponen a continuación.

El código fuente se aloja en el repositorio dentro del directorio */src*, con la extensión *.ts*, y el identificador del ejercicio.

Pasaremos a explicar brevemente la resolución de dichos ejercicios.

## __Ejercicio-1: Años bisiestos__
En este ejercicio creamos una función que sirve para calcular si un año determinado es bisiesto o no, para ello seguimos estas tres reglas:
1. Cada año tiene que ser divisible por 4.
2. Dicho año no puede ser divisible por 100.
3. O también los años que son divisibles por 400.


La funión devolverá verdadero o falso según el año que corresponda.

Podemos fijarnos en algunas características que diferencian a TypeScript del resto de lenguajes, sobre todo, resltamos el hecho de que es
interesante escribir qué tipo de dato devuelve la función, de forma explícita, así como la palabra reservada "export", que nos indica que 
podemos "transportar" la funcióna  otros módulos.

```
/*
  Funcion que calcula si un año es bisiesto
*/

export function isLeapYear(anio_inicio: number): boolean {
  if ((anio_inicio % 4 === 0 && anio_inicio % 100 != 0) || (anio_inicio % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
```
## __Ejercicio-2: Notación decimal y factorial__
En este ejercicio creamos varias funciones, por un lado, una que nos permite transformar un número que se encuentra en notación decimal, a otro que
se encuentra en notación factorial,__decimalToFactorial__, y otra función que hará la transformación inversa,__factorialToDecimal__ ,es decir, dado 
un número de entrada en notación factorial, devuelve su representación en forma decimal.

La función __factorialToDecimal__, así como __decimalToFactorial__, se apoyan en el sigueinte principio, como ejemplo:
* 463 = notación decimal, 341010 = notación factorial
* 463 = 3 x 5! + 4 x 4! + 1 x 3! + 0 x 2! + 1 x 1! + 0 x 0!

Necesitamos cada uno de los dígitos del valor numérico, así como la posición que ocupan para ir calculando el factorial, y hacer la suma.

```
/*
  Funcion que calcula el decimal de un factorial
*/

export function factorialToDecimal(numero: number): number {
  const iCantidad: number = 0;
  let iTemp: number = numero;

  let iTemporal: number = 0;

  let res: number = 0;

  for (let indice = 0; indice < numero.toString().length; indice ++) {
    if (indice === 0) {
      iTemporal = iTemp % 10;
      res += iTemporal * factorial(indice); 
    } else {
      iTemp = Math.trunc(iTemp/10);
      iTemporal = iTemp % 10;
      res += iTemporal * factorial(indice);
    }
  }

  return numero;
}
```

Esta función se apoya en la siguiente, que calcula el factorial de un número:
```
/*
  Funcion que calcula el factorial de un numero
*/

export function factorial(dato: number): number {
  let r: number = 1;
  for (let i: number = dato; i > 0; i --) {
    r *= i;
  }
  return r;
}
```

Y por último, en la función __decimalToFactorial__ hemos de dividir el número por la posición más alta del número que puede ser
representado, y coger su residuo, es decir el resto de la división, y así sucesivamente.
```
/*
  Funcion que calcula el factorial de un decimal, lo devuelve como un vector
*/

export function decimalToFactorial(n: number, vector_aux: Array<number>): Array<number> {
  const digitos = [];
  for (let i = vector_aux.length - 1; i >= 0; i--) {
    digitos.unshift(n % vector_aux[i]);
    n = Math.floor(n/vector_aux[i]);
  }
  return digitos;
}
```
Cabe aclarar, que devuelve el valor, como un vector, y en la función tenemos que especificar, dichos índices.

## __Ejercicio-3: Validador de mensajes__
Este ejercicio consiste en validar un mensaje determinado, que viene de la forma *XSubcadena1YSubcadena2*, en donde *X* e *Y* son números
y *Subcadena1* y *Subcadena2* son cadenas de texto. Para decidir si el mensaje es válido, dividimos en subcadenas, de números y letras, y para
cada subcadena numérica, hemos de encontrar la cadena de texto que tenga el mismo tamaño que el número anterior.

Por ejemplo: “3hey5hello2hi” se debería dividir en 3, hey, 5, hello, 2, hi.

La función devolverá verdadero o falso según corresponda.

*Notas:*

* Los mensajes solo tienen letras y números.
* Los números pueden tener varios dígitos.
* Cada número debe corresponder a la longitud de la cadena de texto que se encuentra a continuación.
* La cadena vacía se considera un mensaje válido.






## __Ejercicio-8: Contando IPs__
En este ejercicio tenemos que trabajar con cadenas de texto, que representan direcciones IP:

* “10.0.0.0”, sería una dirección IP válida.

En esencia, la función debe calcular el número de direcciones IP dentro de un rango específico:

* Ejemplos:
  * ipsInRange(“10.0.0.0”, “10.0.0.50”) == 50
  * ipsInRange(“10.0.0.0”, “10.0.1.0”) == 256
  * ipsInRange(“20.0.0.10”, “20.0.1.0”) == 246

Para su resolución, sería interesante apoyarnos en una función auxiliar, que calculase el valor decimal de una
dirección IP que se le pasa como parámetro.
```
export function convertIpToNumeric(ipAddress: string) {
  let arrIp = ipAddress.split('.');

  let segment1: number = parseInt(arrIp[0]);
  let segment2: number = parseInt(arrIp[1]);
  let segment3: number = parseInt(arrIp[2]);
  let segment4: number = parseInt(arrIp[3]);

  // reverse order calc 
  // eg. 255.255.240.0     &lt;-- start at the end
  // 0 + (240*256) + (255*65536) + (255*16777216)
  let calc: number = segment4 + (segment3 * 256) + (segment2 * 65536) + (segment1 * 16777216);

  return calc;
}
```

Una vez tenemos los valores decimales, solo tenemos que restar sus valores, el más alto al más bajo:
```
export function ipsInRange(ip_1: string, ip_2: string) {
  // console.log(convertIpToNumeric(ip_1));
  // console.log(convertIpToNumeric(ip_2));

  let ip_1_decimal:number = convertIpToNumeric(ip_1);
  let ip_2_decimal:number = convertIpToNumeric(ip_2);

  let resultado_final: number = ip_2_decimal - ip_1_decimal;

  console.log(`${resultado_final}`);
}
```
Y de esta forma obtendríamos el valor de direcciones IP dentro del rango-

## __Ejercicio-9: Entrenador Pokémon__
En este ejercicio hemos de calcular el daño total que le causará un Pokémon a otro, teniendo en cuenta la sigueinte fórmula:
```
daño = 50 * (ataque / defensa) * efectividad
```
El *ataque* representa el daño de ataque del Pokémon que está atacando, *defensa*, es la defensa del Pokémon oponente, y *efectividad*
representa un valor que se calcula en función de los tipos de ambos Pokémon.

Dicho valor puede ser el doble, un ataque neutro, o un ataque poco eficaz, en función de la compatibilidad entre los tipos:

```
fuego > hierba
fuego < agua
fuego = eléctrico
agua < hierba
agua < eléctrico
hierba = eléctrico
```
Entonces, observamos cuatro tipos distintos, además el daño a Pokémon del mismo tipo es poco efectivo, y la relación es simétrica, si un
Pokémon A, es muy eficaz contra otro Pokémon B, entonces el ataque que le causará B a A será poco efectivo.

La función tiene que saber los tipos de ambos Pokémon, así como el daño de ataque del Pokémon atacante y la defensa del Pokémon defensor,
todo ello indicado como parámetros a la función, que tiene que conocer todas las posibilidades, en sus sentencias condicionales.
```
/*
  Funcion que calcula el dano que puede hacer un pokemon
*/

export function efective_Pokemon(mi_tipo: string, tipo_oponente: string, mi_ataque: number, defensa_oponente: number) {
  const super_efectivo: number = 50 * (mi_ataque / defensa_oponente) * 2;
  const normal: number = 50 * (mi_ataque / defensa_oponente);
  const poco_efectivo: number = 50 * (mi_ataque / defensa_oponente) * 0.5;


  if (mi_tipo === 'fuego') {
    if (tipo_oponente === 'fuego') {
      return poco_efectivo;
    }
    if (tipo_oponente === 'hierba') {
      return super_efectivo;
    }
    if (tipo_oponente === 'agua') {
      return poco_efectivo;
    }
    if (tipo_oponente === 'electrico') {
      return normal;
    }
  }

  if (mi_tipo === 'agua') {
    if (tipo_oponente === 'agua') {
      return poco_efectivo;
    }
    if (tipo_oponente === 'fuego') {
      return super_efectivo;
    }
    if (tipo_oponente === 'hierba') {
      return poco_efectivo;
    }
    if (tipo_oponente === 'electrico') {
      return normal;
    }
  }
  if (mi_tipo === 'hierba') {
    if (tipo_oponente === 'hierba') {
      return poco_efectivo;
    }
    if (tipo_oponente === 'fuego') {
      return poco_efectivo;
    }
    if (tipo_oponente === 'agua') {
      return super_efectivo;
    }
    if (tipo_oponente === 'electrico') {
      return normal;
    }
  }
  if (mi_tipo === 'electrico') {
    if (tipo_oponente === 'electrico') {
      return poco_efectivo;
    }
    if (tipo_oponente === 'fuego') {
      return normal;
    }
    if (tipo_oponente === 'agua') {
      return super_efectivo;
    }
    if (tipo_oponente === 'hierba') {
      return normal;
    }
  }
}
```
Como resultado, la función devuelve el daño causado, que puede ser eficaz, poco eficaz o super efeicaz.

## __Ejercicio-10: Validador de nombre de usuario__
En este ejercicio creamos una función que comprueba si un nombre de usuario es correcto o no, se llamará __isValidUsername__
y se basará en las siguientes reglas:

1. EL nombre de usuario tiene que contener entre 4 y 30 caracteres.
2. El nombre de usuario no puede empezar ni terminar con un guión bajo.
3. Tiene que estar conformado por al menos una letra mayúscula, una letra minúscula, un número y un símbolo especial($,-,_).
4. No se repite la misma repetición de un tipo de carácter más de dos veces seguidas.

Es decir, que el nombre de usuario, no puede contener más de dos números seguidos, letras minúsculas o mayúsculas, o caracteres 
especiales.
```
/*
  Funcion que calcula si un nombre de usuario es valido
*/

export function isValidUsername(cadena: string): boolean {
  if (cadena.length >= 4 && cadena.length <= 30) {
    if ((cadena[0] != '_') || (cadena[cadena.length - 1] != '_')) {
      if ((cadena.search(/[A-Z]/i) != -1) && (cadena.search(/[a-z]/i) != -1) && (cadena.search(/[0-9]/i) != -1) && (cadena.search(/['$' || '-' || '_']/i) != -1)) {
        if ( (cadena.search(/[A-Z]{3}/g) == -1) && (cadena.search(/[A-Z]{3}/g) == -1) && (cadena.search(/[A-Z]{3}/g) == -1) && (cadena.search(/[A-Z]{3}/g) == -1) ) {
          return true;
        }
      }
    }
  }
  return false;
}
```

## __Conclusiones__
hola
## __Bibliografía__
