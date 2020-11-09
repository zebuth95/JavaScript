let num = document.querySelector('input');

num.addEventListener('input', (event) => {
    const log = document.getElementById('valores');
    numero = parseInt(num.value)

    if (numero === 0) {
      log.textContent = 'El numero es igual a cero'
    } else if ( numero < 0) {
      log.textContent = 'El numero es negativo'
    } else if ( (numero + 2) > 13 && numero <= 20) {
      var sum = numero + 2;
      log.textContent = `${numero} + 2 es igual a ${sum} y es mayor a 13`
    } else if (numero > 20 && numero < 50) {
      log.textContent = `${numero} es mayor que 20 pero menor que 50`
    } else {
      log.textContent = `${numero} no es igual a 123123125`
    }
})