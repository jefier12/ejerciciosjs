// 10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están

// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.

let tipoPizza = prompt("¿Quiere una pizza vegetariana? (sí o no):").toLowerCase();

if (tipoPizza === "sí") {
    let ingrediente = prompt("Elija un ingrediente: Pimiento o Tofu:").toLowerCase();
    alert("Pizza vegetariana con Mozzarella, Tomate y " + ingrediente);
} else if (tipoPizza === "no") {
    let ingrediente = prompt("Elija un ingrediente: Pepperoni, Jamón o Salmón:").toLowerCase();
    alert("Pizza no vegetariana con Mozzarella, Tomate y " + ingrediente);
} else {
    alert("Respuesta inválida.");
}


