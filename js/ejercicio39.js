// 39. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.

let metrosCuadrados = prompt("Ingrese los metros cuadrados a pintar:");
let precioPorMetro = prompt("Ingrese el precio por metro cuadrado:");

let totalPresupuesto = metrosCuadrados * precioPorMetro;
alert("El presupuesto para pintar es: $" + totalPresupuesto);
