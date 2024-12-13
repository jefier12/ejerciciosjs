// 71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.

let numero = parseInt(prompt("Ingrese un número entero:"));
let esPrimo = numero > 1;

for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        esPrimo = false;
        break;
    }
}

alert(esPrimo ? `${numero} es un número primo.` : `${numero} no es un número primo.`);
