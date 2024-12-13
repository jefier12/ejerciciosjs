// 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.

let tipoEmpleado = prompt("Ingrese el tipo de empleado (planta/administrativo):");
let horasTrabajadas = prompt("Ingrese las horas trabajadas:");

let pagoHora = tipoEmpleado.toLowerCase() === "planta" ? 20000 : 10000;
let totalPago = horasTrabajadas * pagoHora;

alert("El pago total es: $" + totalPago);
