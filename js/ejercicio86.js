// Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.

function sumaEnBinario() {
  const num1 = parseInt(prompt("Introduce el primer número:"));
  const num2 = parseInt(prompt("Introduce el segundo número:"));
  const suma = num1 + num2;
  alert("La suma en binario es: " + suma.toString(2));
}
sumaEnBinario();

  
