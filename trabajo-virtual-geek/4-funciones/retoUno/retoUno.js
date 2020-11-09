function Suma (){
    var a = document.querySelector('#input_a');
    var b = document.querySelector('#input_b');
    var sum = Number(a.value) + Number(b.value);
    const log = document.getElementById('valores');
    log.textContent = `${sum}`
}