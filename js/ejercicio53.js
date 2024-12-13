// 53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.

const IVA = 0.19; // 19% de IVA

let productos = [];
for (let i = 1; i <= 5; i++) {
    productos.push(Number(prompt(`Ingrese el precio del producto ${i}:`)));
}

let subtotal = productos.reduce((a, b) => a + b, 0);
let iva = subtotal * IVA;
let total = subtotal + iva;

alert(`Subtotal: $${subtotal}\nIVA: $${iva}\nTotal: $${total}`);
