'use strict';
//constantes de los elementos html
//constantes paleta de colores
const paletteBlue = document.querySelector ('.js_button_paletteBlue');
const paletteRed = document.querySelector ('.js_button_paletteRed');
const paletteMix = document.querySelector ('.js_button_paletteMix');
//contantescampos a rellenar
const nameAndLastname = document.querySelector('.js_names-container');
const profession =document.querySelector ('.js_card__profession');
//constantes item rectangulo
const elementRectangle = document.querySelector ('.js_card__rectangle');
// constantes iconos
const iconMobile = document.querySelector ('.js_iconMobile');
const iconMail =document.querySelector('.js_iconMail');
const iconLinkedIn = document.querySelector ('.js_iconLinkedIn');
const iconGit = document.querySelector ('.js_iconGit')
//contantes container iconos
const containerMobile = document.querySelector ('.js_containerMobile');
const containerMail = document.querySelector ('.js_containerMail');
const containerLinkedIn = document.querySelector ('.js_containerLinkedIn');
const containerGit = document.querySelector ('.js_containerGit');


// function change color to palette red
function colorChangeRed () {
// change color name - lastname - profession
nameAndLastname.classList.toggle ('dried-blood');
elementRectangle.classList.toggle ('rusty-red-background');
profession.classList.toggle ('rusty-red');
//change color icons
iconMobile.classList.toggle ('dried-blood');
iconMail.classList.toggle ('dried-blood');
iconLinkedIn.classList.toggle ('dried-blood');
iconGit.classList.toggle ('dried-blood');
//change color container icons
containerMobile.classList.toggle ('tomato-border');
containerMail.classList.toggle ('tomato-border');
containerLinkedIn.classList.toggle ('tomato-border');
containerGit.classList.toggle ('tomato-border');

}
 //click palette Red
paletteRed.addEventListener ('click' , colorChangeRed);




// function change color to palette Blue
function colorChangeBlue() {
    // change color name - lastname - profession
    nameAndLastname.classList.toggle ('$branddark');
    elementRectangle.classList.toggle ('branddark-background');
    profession.classList.toggle ('$contentdark');
    //change color icons
    iconMobile.classList.toggle ('$branddark');
    iconMail.classList.toggle ('$branddark');
    iconLinkedIn.classList.toggle ('$branddark');
    iconGit.classList.toggle ('$branddark');
    //change color container icons
    containerMobile.classList.toggle ('brandmedium-border');
    containerMail.classList.toggle ('brandmedium-border');
    containerLinkedIn.classList.toggle ('brandmedium-border');
    containerGit.classList.toggle ('brandmedium-border');
    
    }
     //click palette blue
    paletteBlue.addEventListener ('click' , (event) =>{
        
        

    });
   


    // function change color to palette Blue
function colorChangeMix() {
    // change color name - lastname - profession
    nameAndLastname.classList.toggle ('$slate');
    elementRectangle.classList.toggle ('$faded-orange-background ');
    profession.classList.toggle ('$slate');
    //change color icons
    iconMobile.classList.toggle ('$slate');
    iconMail.classList.toggle ('$slate');
    iconLinkedIn.classList.toggle ('$slate');
    iconGit.classList.toggle ('$slate');
    //change color container icons
    containerMobile.classList.toggle ('light-grey-blue-border');
    containerMail.classList.toggle ('light-grey-blue-border');
    containerLinkedIn.classList.toggle ('light-grey-blue-border');
    containerGit.classList.toggle ('light-grey-blue-border');
    
    }
     //click palette Mix
    paletteMix.addEventListener ('click' , colorChangeMix);
    console.log('hola');