// 20. Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constante.

let a = prompt("Ingrese el coeficiente a:");
let b = prompt("Ingrese el coeficiente b:");
let c = prompt("Ingrese el coeficiente c:");

let discriminante = Math.pow(b, 2) - 4 * a * c;

if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    alert("Las raíces reales son: x1 = " + x1 + ", x2 = " + x2);
} else if (discriminante === 0) {
    let x = -b / (2 * a);
    alert("La raíz única es: x = " + x);
} else {
    alert("La ecuación no tiene raíces reales.");
}
