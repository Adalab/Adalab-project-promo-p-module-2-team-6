'use strict';

const inputName = document.querySelector('.js-inputNames');
const nameCard = document.querySelector ('.js-namesCard');
const inputProfession = document.querySelector ('.js-inputProfession');
const professionCard = document.querySelector ('.js-cardProfession');

inputName.addEventListener ('keyup', () =>{
const name = inputName.value;
nameCard.innerHTML = name;


});

inputProfession.addEventListener ('keyup', () =>{
 
    const profession = inputProfession.value;
    professionCard.innerHtml = profession;
    
    });