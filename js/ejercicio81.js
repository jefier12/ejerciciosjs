// Crea una función de nos devuelva el elemento mayor de un arreglo de números

function mayorEnArreglo() {
  const arr = prompt("Introduce un arreglo de números separados por coma (por ejemplo: 3,5,7,2,8):")
    .split(',')
    .map(num => parseInt(num));
  alert("El número mayor en el arreglo es: " + Math.max(...arr));
}
mayorEnArreglo();

  