// 69. Escribir un programa que pida al usuario un número entero y muestre por consola un
// triángulo rectángulo como el de más abajo.

let altura = prompt("Ingrese la altura del triángulo:");

for (let i = 1; i <= altura; i++) {
    console.log(" ".repeat(altura - i) + "*".repeat(i));
}

