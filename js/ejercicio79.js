// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola

function contarSilabas(palabra) {
    const silabas = palabra.split(/[^aeiouáéíóú]/).filter(Boolean);
    return silabas.length;
  }
  console.log(contarSilabas("computadora"));
  