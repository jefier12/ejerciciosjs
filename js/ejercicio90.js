// Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function numeroATexto(num) {
    const numeros = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
    return numeros[num] || "Número fuera de rango";
  }
  console.log(numeroATexto(3));
  console.log(numeroATexto(6)); 
  