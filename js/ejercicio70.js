// 70. Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

const contrasena = "miClaveSecreta";
let intento;

do {
    intento = prompt("Ingrese la contraseña:");
    if (intento !== contrasena) alert("Contraseña incorrecta, inténtelo de nuevo.");
} while (intento !== contrasena);

alert("¡Contraseña correcta!");
