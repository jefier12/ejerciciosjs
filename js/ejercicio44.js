// 44. Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda.

const VALOR_DOLAR = 4000; // Ejemplo: $1 USD = $4000 COP
const VALOR_EURO = 4500;  // Ejemplo: $1 EUR = $4500 COP

let pesos = prompt("Ingrese la cantidad en pesos colombianos:");

let dolares = pesos / VALOR_DOLAR;
let euros = pesos / VALOR_EURO;

alert(
    "Equivalente en dólares: $" + dolares.toFixed(2) +
    "\nEquivalente en euros: €" + euros.toFixed(2)
);
