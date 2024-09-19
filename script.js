
function trocar(){

const body = document.body

body.classList.toggle('dark-mode')

} 



const filtro_input = document.getElementById('filtro');

const lista = document.getElementById('lista');

const items = lista.getElementsByTagName('li');

filtro_input.addEventListener('input', ()=>{

const buscar = filtro_input.value.toLowerCase();


for(let x = 0; x < items.length; x++){

const item = items[x].textContent.toLowerCase();


if(buscar === '' || item.includes(buscar)){

items[x].style.display = 'list-item';


}else{

items[x].style.display = 'none';

}


}
console.log(filtro_input.value);
})



