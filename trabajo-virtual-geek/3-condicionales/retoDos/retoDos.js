const name = document.querySelector('input');

name.addEventListener('input', (event) => {
    const log = document.getElementById('valores');

    if (name.value === 'Pepe' || name.value === 'Ana'){
        log.textContent = `Welcome, ${name.value}`
    }else{
        log.textContent = 'The user is not register'
    }
})