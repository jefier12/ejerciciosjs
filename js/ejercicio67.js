// 67. Escribir un programa que pida al usuario un número entero y muestre por pantalla un
// triángulo rectángulo como el de más abajo, de altura el número introducido

let altura = prompt("Ingrese la altura del triángulo:");

for (let i = 1; i <= altura; i++) {
    console.log("*".repeat(i));
}
