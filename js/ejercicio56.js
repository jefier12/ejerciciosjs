// 56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.

let saldo = prompt("Ingrese el saldo en la cuenta:");

let interes = saldo < 100000 ? 0.03 : 0.04;
let interesPagado = saldo * interes;
let saldoFinal = saldo + interesPagado;

alert(`Saldo final: $${saldoFinal}\nInterés pagado: $${interesPagado}`);
