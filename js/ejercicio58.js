// 58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.

let mes = prompt("Ingrese el nombre del mes:").toLowerCase();

if (mes === "enero" || mes === "febrero") {
    alert("Signo Zodiacal: Acuario");
} else if (mes === "marzo" || mes === "abril") {
    alert("Signo Zodiacal: Aries");
} else if (mes === "mayo" || mes === "junio") {
    alert("Signo Zodiacal: Géminis");
} else {
    alert("Mes no válido o falta agregar más signos.");
}
