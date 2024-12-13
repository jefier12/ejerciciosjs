// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola

function contarSilabas() {
  const palabra = prompt("Introduce una palabra:");
  const silabas = palabra.split(/[^aeiouáéíóú]/).filter(Boolean);
  alert("La palabra tiene " + silabas.length + " sílabas.");
}
contarSilabas();

  