// Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function numeroATexto() {
  const num = parseInt(prompt("Introduce un número entre 0 y 5:"));
  const numeros = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
  alert(numeros[num] || "Número fuera de rango");
}
numeroATexto();

  