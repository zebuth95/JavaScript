let date = document.querySelector('input');

date.addEventListener('input', (event) => {
    year = parseInt(date.value)
    const log = document.getElementById('valores');
    if(year%4 === 0){
        log.textContent = `${year} es un año bisiesto`
    }else if(year%4 !== 0){
        let bisiesto = 4 * Math.round((year/4)+0.25);
        log.textContent = `año bisiesto más proximo es ${bisiesto}`
    }
})