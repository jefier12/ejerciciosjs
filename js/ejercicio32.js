// 32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.

let producto1 = prompt("Ingrese el precio del primer producto:");
let producto2 = prompt("Ingrese el precio del segundo producto:");
let producto3 = prompt("Ingrese el precio del tercer producto:");
let producto4 = prompt("Ingrese el precio del cuarto producto:");
let producto5 = prompt("Ingrese el precio del quinto producto:");

let descuento1 = producto1 * 0.05;
let descuento2 = producto2 * 0.05;
let descuento3 = producto3 * 0.02;
let descuento4 = producto4 * 0.02;

let total = producto1 - descuento1 + producto2 - descuento2 + producto3 - descuento3 + producto4 - descuento4 + Number(producto5);
alert("El total a pagar es: $" + total);
