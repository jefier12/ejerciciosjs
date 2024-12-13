// 55. En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.
let tipoMembresia = prompt("Ingrese el tipo de membresía (A/B/C):");
let montoCompra = prompt("Ingrese el monto de la compra:");

let descuento = tipoMembresia.toUpperCase() === "A" ? 0.1 :
                tipoMembresia.toUpperCase() === "B" ? 0.15 : 0.2;

let montoFinal = montoCompra * (1 - descuento);

alert("El monto final con descuento es: $" + montoFinal);
