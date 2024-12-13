// 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

let figura = prompt("¿Qué figura desea calcular? Escriba T para triángulo o C para círculo:");

if (figura === "T" || figura === "t") {
    let base = prompt("Ingrese la base del triángulo:");
    let altura = prompt("Ingrese la altura del triángulo:");
    let area = (base * altura) / 2;
    alert("El área del triángulo es: " + area);
} else if (figura === "C" || figura === "c") {
    let radio = prompt("Ingrese el radio del círculo:");
    let area = 3.1416 * radio * radio;
    alert("El área del círculo es: " + area);
} else {
    alert("Opción inválida.");
}
