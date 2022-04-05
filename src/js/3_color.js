'use strict';

/*const cardContainer = document.querySelector('.js_cardContainer');
const radioButtonBlue = document.querySelector ('.js_button_paletteBlue');
const radioButtonRed =document.querySelector ('.js_button_paletteRed');
const radioButtonMix = document.querySelector ('.js_button_paletteMix');*/

function elementsHtml ( classes){
const element = document.querySelector (classes);
return element;
}
const cardContainer = elementsHtml ('.js_cardContainer');
const radioButtonRed = elementsHtml  ('.js_button_paletteRed');
const radioButtonMix = elementsHtml  ('.js_button_paletteMix');
const radioButtonBlue = elementsHtml  ('.js_button_paletteBlue');



function changeColorRed (event){
    cardContainer.classList.remove ('paletteBlue');
    cardContainer.classList.remove ('paletteMix');
    cardContainer.classList.remove ('paletteRed');
    cardContainer.classList.add ('paletteRed');
}
function changeColorMix (event){
    cardContainer.classList.remove ('paletteBlue');
    cardContainer.classList.remove ('paletteRed');
    cardContainer.classList.remove ('paletteMix');
    cardContainer.classList.add ('paletteMix');
}
function changeColorBlue (event){
    cardContainer.classList.remove ('paletteRed');
    cardContainer.classList.remove ('paletteMix');
    cardContainer.classList.remove ('paletteBlue');
    cardContainer.classList.add ('paletteBlue');
}


radioButtonBlue.addEventListener ('click' , changeColorBlue );
radioButtonRed.addEventListener ('click' , changeColorRed );
radioButtonMix.addEventListener ('click' , changeColorMix );