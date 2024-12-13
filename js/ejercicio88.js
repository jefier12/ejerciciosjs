// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo

function inversoAditivo() {
  const arr = prompt("Introduce un conjunto de números separados por coma (por ejemplo: 1,-2,3,-4):")
    .split(',')
    .map(num => parseInt(num));
  alert("El inverso aditivo es: " + arr.map(num => -num).join(', '));
}
inversoAditivo();

  