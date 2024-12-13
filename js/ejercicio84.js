// Genera un patrón de asteriscos en forma de pirámide.

function piramideAsteriscos() {
  const n = parseInt(prompt("Introduce el número de filas para la pirámide:"));
  let resultado = "";
  for (let i = 1; i <= n; i++) {
    let espacios = ' '.repeat(n - i);
    let asteriscos = '*'.repeat(2 * i - 1);
    resultado += espacios + asteriscos + espacios + "\n";
  }
  alert(resultado);
}
piramideAsteriscos();

  
