"use strict";
/*
  Funcion que pasa de estilo snake a estilo camel
*/
function snakeToCamel(string) {
    return string.replace(/(_\w)/g, function (m) {
        return m[1].toUpperCase();
    });
}
/*
  Funcion que pasa de estilo camel a estilo snake
*/
function camelToSnake(string) {
    return string.replace(/[\w]([A-Z])/g, function (m) {
        return m[0] + "_" + m[1];
    }).toLowerCase();
}
let cadena_snake = 'lorem_ipsum';
let cadena_camel = 'EjemploDeUpperCamelCase';
console.log(snakeToCamel(cadena_snake));
console.log(camelToSnake(cadena_camel));
