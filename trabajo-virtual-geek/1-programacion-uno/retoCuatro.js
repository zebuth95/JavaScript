const select = document.getElementById('integrante')

select.addEventListener('change', (event) => {
  // alert(select.value)
  document.querySelector('.selected').innerHTML = "Has seleccionado a : "+select.value
})
