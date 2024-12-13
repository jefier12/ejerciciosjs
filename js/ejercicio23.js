// 23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.

let velocidadKmH = prompt("Ingrese la velocidad en km/h:");

let velocidadMS = (velocidadKmH * 1000) / 3600;
alert("La velocidad en m/s es: " + velocidadMS);
