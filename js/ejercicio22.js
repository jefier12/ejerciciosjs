// 22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%.

let minutos = prompt("Ingrese la duración de la llamada en minutos:");
let costoMinuto = 355;
let IVA = 0.2;

let costoSinIVA = minutos * costoMinuto;
let costoConIVA = costoSinIVA + (costoSinIVA * IVA);

alert("El costo de la llamada es: $" + costoConIVA);
