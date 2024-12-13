// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo

function inversoAditivo(arr) {
    return arr.map(num => -num);
  }
  console.log(inversoAditivo([1, -2, 3, -4])); 
  