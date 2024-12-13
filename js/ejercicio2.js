// 2. escribir un programa que almacene la cadena de caracteres contraseña de una variable,
// pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida


// por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
// minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.

let contraseñaGuardada = "Segura123";
let contraseñaUsuario = prompt("Ingrese su contraseña:");
if (/^[a-zA-Z0-9]+$/.test(contraseñaUsuario)) {
    if (contraseñaGuardada.toLowerCase() === contraseñaUsuario.toLowerCase()) {
        alert("Contraseña correcta.");
    } else {
        alert("Contraseña incorrecta.");
    }
} else {
    alert("La contraseña solo debe contener caracteres alfanuméricos.");
}
