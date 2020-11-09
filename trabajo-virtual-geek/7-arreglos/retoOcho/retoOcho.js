const tasks = [
    {
        name: 'Recoger setas en el campo', 
        completed: true
    },
    {
        name: 'Comprar pilas', 
        completed: true
    },
    {
        name: 'Poner una lavadora de blancos', 
        completed: true
    },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', 
        completed: false
    }
];
document.querySelector('.div1').innerHTML = `En la lista hay ${tasks.length} tareas`;
const list = document.querySelector('.list');
list.innerHTML = `<li class="li">${tasks[0].name} <input class ="check" type ="checkbox" ></li>
                  <li class="li">${tasks[1].name} <input class ="check" type ="checkbox"></li>
                  <li class="li">${tasks[2].name} <input class ="check" type ="checkbox"></li>
                  <li class="li">${tasks[3].name} <input class ="check" type ="checkbox"></li>`;
const li = document.querySelectorAll('.li');
const buttonCheck = document.querySelectorAll('.check');
let contadorTrue = 0;
let contadorFalse = 4;
for(let i = 0; i<tasks.length; i++ ){
    buttonCheck[i].addEventListener('change', () =>{
        if (buttonCheck[i].checked === true){
            li[i].classList.add('completa');
            tasks[i].completed = true;
        }else{
            li[i].classList.remove('completa');
            tasks[i].completed = false;
        }
        if(tasks[i].completed === true){
            contadorTrue++;
            contadorFalse--;
        }
        if(tasks[i].completed === false){
            contadorFalse++;
            contadorTrue--;
        }
        document.querySelector('.div2').innerHTML = `Hay ${contadorTrue} tareas resueltas`;
        document.querySelector('.div3').innerHTML =`Hay ${contadorFalse} tareas sin resolver`;
    });
}
