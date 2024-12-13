// 29. Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.

let nota1 = prompt("Ingrese la primera calificación:");
let nota2 = prompt("Ingrese la segunda calificación:");
let nota3 = prompt("Ingrese la tercera calificación:");
let nota4 = prompt("Ingrese la cuarta calificación:");

let promedio = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;
alert("El promedio de las calificaciones es: " + promedio);
