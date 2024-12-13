// 33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.

let edadMadre = prompt("Ingrese la edad actual de la madre:");
let edadHijo = prompt("Ingrese la edad actual del hijo:");

let edadMadreAlDarALuz = edadMadre - edadHijo;
alert("La madre tenía " + edadMadreAlDarALuz + " años cuando dio a luz.");
