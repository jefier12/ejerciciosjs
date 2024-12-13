// 74. Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
// usuario escriba “salir” que terminará.

let inputEco;
let counter = 0;

while (true) {
    inputEco = prompt("Escribe algo (o escribe 'salir' para terminar):");
    counter++;
    if (inputEco.toLowerCase() === "salir") {
        break;
    }
    alert(`Eco (${counter}): ${inputEco}`);
}

