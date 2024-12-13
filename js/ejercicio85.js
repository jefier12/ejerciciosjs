// Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

function sumaPositivos() {
  const arr = prompt("Introduce un conjunto de números separados por coma (por ejemplo: 1,-2,3,4,-5):")
    .split(',')
    .map(num => parseInt(num));
  const suma = arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
  alert("La suma de los números positivos es: " + suma);
}
sumaPositivos();

  