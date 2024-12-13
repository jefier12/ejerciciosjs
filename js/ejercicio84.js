// Genera un patrón de asteriscos en forma de pirámide.

function piramideAsteriscos(n) {
    for (let i = 1; i <= n; i++) {
      let espacios = ' '.repeat(n - i);
      let asteriscos = '*'.repeat(2 * i - 1);
      console.log(espacios + asteriscos + espacios);
    }
  }
  piramideAsteriscos(5);
  
