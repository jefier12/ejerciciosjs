// Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es válido y false si no es válido.

function validarPin() {
  const pin = prompt("Introduce un PIN (de 4 o 6 dígitos):");
  alert(/^[0-9]{4}$|^[0-9]{6}$/.test(pin) ? "PIN válido." : "PIN inválido.");
}
validarPin();
 