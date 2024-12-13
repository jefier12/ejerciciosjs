// 57. Consideramos la asignación de una calificación literal a un rango dado de calificaciones
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
// Aprobado.

let calificacion = prompt("Ingrese la calificación (0-10):");

if (calificacion >= 9.1) {
    alert("A: Excelente");
} else if (calificacion >= 8.1) {
    alert("A: Muy bien");
} else if (calificacion >= 7.5) {
    alert("A: Bien");
} else {
    alert("NA: No Aprobado");
}
