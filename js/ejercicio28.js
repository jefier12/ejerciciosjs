// 28. Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.

let nombre = prompt("Ingrese el nombre del empleado:");
let horasTrabajo = prompt("Ingrese las horas trabajadas:");
let pagoPorHora = prompt("Ingrese el pago por hora:");

let sueldo = horasTrabajo * pagoPorHora;
alert("El sueldo de " + nombre + " es: $" + sueldo);
