// 47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales.

let valor1 = prompt("Ingrese el primer valor:");
let valor2 = prompt("Ingrese el segundo valor:");
let valor3 = prompt("Ingrese el tercer valor:");

if (valor1 === valor2 && valor2 === valor3) {
    alert("Todos los valores son iguales.");
} else {
    let mayor = Math.max(valor1, valor2, valor3);
    let menor = Math.min(valor1, valor2, valor3);
    alert("El mayor es: " + mayor + " y el menor es: " + menor);
}
