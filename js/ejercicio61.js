// 61. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60


let cantidadNotas = prompt("Ingrese la cantidad de notas a procesar:");
let notas = [];
let maxNota = 0, minNota = 100, alumnos100 = 0, rangoA = 0, rangoB = 0, rangoC = 0, rangoD = 0;

for (let i = 0; i < cantidadNotas; i++) {
    let nota = Number(prompt(`Ingrese la nota ${i + 1} (1-100):`));
    notas.push(nota);

    if (nota > maxNota) maxNota = nota;
    if (nota < minNota) minNota = nota;
    if (nota === 100) alumnos100++;
    else if (nota >= 90) rangoA++;
    else if (nota >= 80) rangoB++;
    else if (nota >= 70) rangoC++;
    else if (nota >= 60) rangoD++;
}

alert(`Nota más alta: ${maxNota}\nNota más baja: ${minNota}\nAlumnos con 100: ${alumnos100}\nRango A: ${rangoA}\nRango B: ${rangoB}\nRango C: ${rangoC}\nRango D: ${rangoD}`);
