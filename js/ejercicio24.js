// 24. Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
//     2.3e-1, -3e2, 23, 3.2).

let numero = prompt("Ingrese un número en formato flotante:");

let regex = /^-?\d+(\.\d+)?(e-?\d+)?$/;

if (regex.test(numero)) {
    alert("El número ingresado es válido.");
} else {
    alert("El número ingresado no es válido.");
}
