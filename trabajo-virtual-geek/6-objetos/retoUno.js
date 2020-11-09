'use strict'

const geeker = {
    name: 'Pepe',
    age: 94,
    job : 'Bartender',
}
const geeker2 = {
    name: 'Rocío',
    age: 22,
    job : 'Docente',
}

document.querySelector('#text1').innerHTML = `Mi nombre es ${geeker.name}, tengo ${geeker.age} años y soy ${geeker.job}`;
document.querySelector('#text2').innerHTML = `Mi nombre es ${geeker2.name}, tengo ${geeker2.age} años y soy ${geeker2.job}`;