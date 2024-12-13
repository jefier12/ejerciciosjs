// 64. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma.

let numero = prompt("Ingrese un número entero positivo:");
let impares = [];

for (let i = 1; i <= numero; i += 2) {
    impares.push(i);
}

alert(`Números impares: ${impares.join(", ")}`);

