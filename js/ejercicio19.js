// 19. Escribir un programa que calcule el área y el volumen de un cilindro.

let radio = prompt("Ingrese el radio del cilindro:");
let altura = prompt("Ingrese la altura del cilindro:");
let PI = 3.1416;

let area = 2 * PI * radio * (radio + altura);
let volumen = PI * Math.pow(radio, 2) * altura;

alert("El área del cilindro es: " + area);
alert("El volumen del cilindro es: " + volumen);
