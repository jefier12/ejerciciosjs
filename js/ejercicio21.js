// 21. Escribir un programa que calcule el volumen de un elipsoide.

let radioA = prompt("Ingrese el radio a:");
let radioB = prompt("Ingrese el radio b:");
let radioC = prompt("Ingrese el radio c:");
let PI = 3.1416;

let volumen = (4 / 3) * PI * radioA * radioB * radioC;
alert("El volumen del elipsoide es: " + volumen);
