// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este número es par o impar

function aleatorioParOImpar() {
  const num = Math.floor(Math.random() * 10) + 1;
  alert(`El número generado es ${num}. Es ${num % 2 === 0 ? "par" : "impar"}.`);
}
aleatorioParOImpar();

  