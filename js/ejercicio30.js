// 30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito.

let contraseña = prompt("Ingrese una contraseña:");

if (
    contraseña.length >= 8 && contraseña.length <= 12 &&
    /[A-Z]/.test(contraseña) &&
    /[a-z]/.test(contraseña) &&
    /\d/.test(contraseña)
) {
    alert("La contraseña es fuerte.");
} else {
    alert("La contraseña no cumple los requisitos de seguridad.");
}
