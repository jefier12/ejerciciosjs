// 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.

let precio = prompt("Ingrese el costo del medicamento:");
let descuento = 0.1;

let precioFinal = precio - (precio * descuento);
alert("El precio final con descuento es: $" + precioFinal);
