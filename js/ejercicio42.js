// 42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día

let libros = prompt("Ingrese la cantidad de libros vendidos:");
let cuadernos = prompt("Ingrese la cantidad de cuadernos vendidos:");
let lapiceros = prompt("Ingrese la cantidad de lapiceros vendidos:");

let total = (libros * 10000) + (cuadernos * 7550) + (lapiceros * 5550);
alert("El monto total de ventas es: $" + total);
