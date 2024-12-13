// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.

function invertirCadena() {
  const cadena = prompt("Introduce una cadena:");
  alert("La cadena invertida es: " + cadena.split('').reverse().join(''));
}
invertirCadena();

  