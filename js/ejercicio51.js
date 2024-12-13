// 51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

let consumo = prompt("Ingrese el valor del consumo:");

if (consumo > 130000) {
    consumo *= 0.85; // Aplicar 15% de descuento
}

alert("El valor total a pagar es: $" + consumo);
