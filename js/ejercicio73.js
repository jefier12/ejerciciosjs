// 73. Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
// por pantalla el número de veces que aparece la letra en la frase.

let frase = prompt("Ingrese una frase:");
let letra = prompt("Ingrese una letra para contar:");

let contador = 0;
for (let char of frase) {
    if (char === letra) contador++;
}

alert(`La letra "${letra}" aparece ${contador} veces en la frase.`);
