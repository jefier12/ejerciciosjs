// Crea una función que tome un número como argumento y devuelva la cadena si el
// número es par o impar.

function parOImpar() {
  const num = parseInt(prompt("Introduce un número:"));
  alert(num % 2 === 0 ? "Es un número par." : "Es un número impar.");
}
parOImpar();
