'use strict';



const inputName = document.querySelector('.js-inputName');
const nameCard = document.querySelector ('.js-nameCard');

inputName.addEventListener ('keyup', () =>{
const name = inputName.value;
nameCard.innerHTML = name;
});