// 40. Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema.

let anioNacimiento = prompt("Ingrese el año de nacimiento del solicitante:");
let anioActual = new Date().getFullYear();

let edad = anioActual - anioNacimiento;
alert("La edad del solicitante es: " + edad + " años.");
