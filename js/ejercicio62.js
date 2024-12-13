// 62. Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

let palabra = prompt("Ingrese una palabra:");
let resultado = [];
let cont = 0;
for (let i = 1; i <= 10; i++) {
    resultado.push(palabra);
}
alert(resultado);
