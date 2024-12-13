// 66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

let cantidadInvertir = Number(prompt("Ingrese la cantidad a invertir:"));
let interesAnual = Number(prompt("Ingrese el interés anual (en %):")) / 100;
let anos = Number(prompt("Ingrese el número de años:"));

for (let i = 1; i <= anos; i++) {
    cantidadInvertir += cantidadInvertir * interesAnual;
    console.log(`Año ${i}: $${cantidadInvertir.toFixed(2)}`);
}
