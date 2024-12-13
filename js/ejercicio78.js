// • Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
//     cortas menores de 5 caracteres).

function longitudPalabra() {
  const palabra = prompt("Introduce una palabra:");
  alert(palabra.length < 5 ? "La palabra es corta." : "La palabra es larga.");
}
longitudPalabra();

  