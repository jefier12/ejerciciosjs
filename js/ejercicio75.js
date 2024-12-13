// Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.

function mayorDeDos() {
  const num1 = parseInt(prompt("Introduce el primer número:"));
  const num2 = parseInt(prompt("Introduce el segundo número:"));
  alert("El mayor de los dos números es: " + (num1 > num2 ? num1 : num2));
}
mayorDeDos();

  