// 46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes

let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");
let numero3 = prompt("Ingrese el tercer número:");

let mayor = numero1;

if (numero2 > mayor) {
    mayor = numero2;
}
if (numero3 > mayor) {
    mayor = numero3;
}

alert("El número mayor es: " + mayor);
