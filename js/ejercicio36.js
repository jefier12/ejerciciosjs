// 36. En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
// bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos
// de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. ¿La
// cantidad de gramos de harina para hacer el bizcocho es?

let cantidadCacao = 20; // gramos de cacao deseados
let proporcionHarina = 100 / 10; // 100g de harina por 10g de cacao

let cantidadHarina = cantidadCacao * proporcionHarina;
alert("Se necesitan " + cantidadHarina + " gramos de harina.");
