// • Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
//     cortas menores de 5 caracteres).

function longitudPalabra(palabra) {
    return palabra.length < 5 ? "Corta" : "Larga";
  }
  console.log(longitudPalabra("hola")); 
  console.log(longitudPalabra("computadora")); 
  