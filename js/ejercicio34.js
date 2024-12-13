// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos.

let radio = prompt("Ingrese el radio del depósito:");
let altura = prompt("Ingrese la altura del depósito:");
let caudal = prompt("Ingrese el caudal (litros por segundo):");
let PI = 3.1416;

let volumen = PI * Math.pow(radio, 2) * altura; // Volumen en litros
let tiempo = volumen / caudal; // Tiempo en segundos

alert("El tiempo estimado para llenar el depósito es: " + tiempo + " segundos.");

