let input_num = document.querySelector('input');

input_num.addEventListener('input', (event) => {
    const log = document.getElementById('valores');
    edad = parseInt(input_num.value)

    if(edad<=1 && edad>0){
      let edadHumana = edad * 15;
      log.textContent = `La edad del perro es ${edadHumana} años`;
    }else if(edad>1 && edad<=2){
      let edadHumana = 15 + ((edad-1) *9);
      log.textContent = `La edad del perro es ${edadHumana} años`;
    }else if(edad > 2){
      let edadHumana = 15 + 9 + ((edad-2)*5);
      log.textContent = `La edad del perro es ${edadHumana} años`;
    }
  })