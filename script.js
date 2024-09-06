//Descrição: Crie uma página com uma lista de nomes e um campo de pesquisa. 
//Conforme o usuário digita no campo de pesquisa, a lista deve ser filtrada para mostrar apenas 
//os nomes que correspondem ao texto digitado.
//
//Instruções:
//
//Crie um arquivo HTML com uma lista de nomes e um campo de input para a pesquisa.
//Use o método filter para filtrar a lista de nomes conforme o usuário digita.
//Atualize a lista exibida com os resultados filtrados em tempo real.
//Extra: Diferencie as letras que correspondem ao filtro (por exemplo, destacando-as em negrito).




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



