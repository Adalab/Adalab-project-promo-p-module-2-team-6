'use strict';
//constantes de los elementos html
const paletteBlue = document.querySelector ('.js_button_paletteBlue');
const paletteRed = document.querySelector ('.js_button_paletteRed');
const paletteMix = document.querySelector ('.js_button_paletteMix');
const nameAndLastname = document.querySelector('.js_names-container');
const profession =document.querySelector ('.js_card__profession');
const elementRectangle = document.querySelector ('.js_card__rectangle');
const iconMobile = document.querySelector ('.js_iconMobile');
const iconMail =document.querySelector('.js_iconMail');
const iconLinkedIn = document.querySelector ('.js_iconLinkedIn');
const iconGit = document.querySelector ('.js_iconGit')
const containerMobile = document.querySelector ('.js_containerMobile');
const containerMail = document.querySelector ('.js_containerMail');
const containerLinkedIn = document.querySelector ('.js_containerLinkedIn');
const containerGit = document.querySelector ('.js_containerGit');



function colorChange () {
nameAndLastname.classList.add ('newColor');
}

paletteRed.addEventListener ('click' , colorChange);
