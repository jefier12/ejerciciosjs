// Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales

function eliminarVocales() {
  const cadena = prompt("Introduce una cadena:");
  alert("La cadena sin vocales es: " + cadena.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, ''));
}
eliminarVocales();

  