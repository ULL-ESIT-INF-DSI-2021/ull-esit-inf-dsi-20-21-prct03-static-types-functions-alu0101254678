/*
  Funcion que calcula si un nombre de usuario es valido
*/
export function isValidUsername(cadena) {
    if (cadena.length >= 4 && cadena.length <= 30) {
        if ((cadena[0] != '_') || (cadena[cadena.length - 1] != '_')) {
            if ((cadena.search(/[A-Z]/i) != -1) && (cadena.search(/[a-z]/i) != -1) && (cadena.search(/[0-9]/i) != -1) && (cadena.search(/['$' || '-' || '_']/i) != -1)) {
                if ((cadena.search(/[A-Z]{3}/g) == -1) && (cadena.search(/[A-Z]{3}/g) == -1) && (cadena.search(/[A-Z]{3}/g) == -1) && (cadena.search(/[A-Z]{3}/g) == -1)) {
                    return true;
                }
            }
        }
    }
    return false;
}
console.log(isValidUsername('HO_a7'));
