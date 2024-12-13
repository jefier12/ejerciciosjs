// 54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
// segundo, en caso contrario indicar con un mensaje que la operación no es posible
// realizarla.

let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");

if (numero1 > numero2) {
    alert("La resta es: " + (numero1 - numero2));
} else {
    alert("La operación no es posible.");
}
