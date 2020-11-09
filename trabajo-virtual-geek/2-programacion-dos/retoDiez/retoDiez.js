'use strict';
//console.log(`Te quedan ${yearsToRetirement} años para jubilarte`);
const userAge = document.querySelector('input');

userAge.addEventListener('input', (event) => {
    const log = document.getElementById('valores');
    const yearsToRetirement = 67 - parseInt(userAge.value);
    log.textContent = `Te quedan ${yearsToRetirement} años para jubilarte`;
})
