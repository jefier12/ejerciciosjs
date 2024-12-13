// 43. Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
// la presencia de comillas y caracteres escapados.

let texto = prompt("Ingrese un texto para buscar cadenas entre comillas:");
let regex = /"(\\.|[^"\\])*"/g;

let coincidencias = texto.match(regex);
alert("Cadenas encontradas: " + (coincidencias ? coincidencias.join(", ") : "Ninguna"));
