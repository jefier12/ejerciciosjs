// 27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.

let parcial1 = prompt("Ingrese la calificación del primer parcial:");
let parcial2 = prompt("Ingrese la calificación del segundo parcial:");
let parcial3 = prompt("Ingrese la calificación del tercer parcial:");
let examenFinal = prompt("Ingrese la calificación del examen final:");
let trabajoFinal = prompt("Ingrese la calificación del trabajo final:");

let promedioParciales = (Number(parcial1) + Number(parcial2) + Number(parcial3)) / 3;
let promedioFinal = (promedioParciales * 0.55) + (examenFinal * 0.3) + (trabajoFinal * 0.15);

alert("El promedio final es: " + promedioFinal);
