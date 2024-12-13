// Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

function sumaPositivos(arr) {
    const suma = arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
    return suma;
  }
  console.log(sumaPositivos([1, -2, 3, 4, -5])); 
  