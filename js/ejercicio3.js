// 3. Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante
// excepciones y el mensaje debe ser personalizado.

let numerador = prompt("Ingrese el numerador:");
let divisor = prompt("Ingrese el divisor:");

if (divisor != 0) {
    let resultado = numerador / divisor;
    alert("El resultado de la división es: " + resultado);
} else {
    alert("No se puede dividir por cero.");
}
