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


