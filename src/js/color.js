'use strict';
//constantes de los elementos html
//constantes paleta de colores
const paletteBlue = document.querySelector ('.js_button_paletteBlue');
const paletteRed = document.querySelector ('.js_button_paletteRed');
const paletteMix = document.querySelector ('.js_button_paletteMix');
//contantescampos a rellenar
const nameAndLastname = document.querySelector('.js_cardNames');
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
nameAndLastname.classList.add ('dried-blood');
elementRectangle.classList.add ('rusty-red-background');
profession.classList.add ('rusty-red');
//change color icons
iconMobile.classList.add ('dried-blood');
iconMail.classList.add ('dried-blood');
iconLinkedIn.classList.add ('dried-blood');
iconGit.classList.add ('dried-blood');
//change color container icons
containerMobile.classList.add ('tomato-border');
containerMail.classList.add ('tomato-border');
containerLinkedIn.classList.add ('tomato-border');
containerGit.classList.add ('tomato-border');

}





// function change color to palette Blue
function colorChangeBlue() {
    // change color name - lastname - profession
    nameAndLastname.classList.add ('branddark');
    elementRectangle.classList.add ('branddark-background');
    profession.classList.add ('contentdark');
    //change color icons
    iconMobile.classList.add ('branddark');
    iconMail.classList.add ('branddark');
    iconLinkedIn.classList.add ('branddark');
    iconGit.classList.add ('branddark');
    //change color container icons
    containerMobile.classList.add ('brandmedium-border');
    containerMail.classList.add ('brandmedium-border');
    containerLinkedIn.classList.add ('brandmedium-border');
    containerGit.classList.add ('brandmedium-border');
    
    }

        
        

   


    // function change color to palette Blue
function colorChangeMix() {
    // change color name - lastname - profession
    nameAndLastname.classList.add ('slate');
    elementRectangle.classList.add ('faded-orange-background');
    profession.classList.add ('slate');
    //change color icons
    iconMobile.classList.add ('slate');
    iconMail.classList.add ('slate');
    iconLinkedIn.classList.add ('slate');
    iconGit.classList.add ('slate');
    //change color container icons
    containerMobile.classList.add ('light-grey-blue-border');
    containerMail.classList.add ('light-grey-blue-border');
    containerLinkedIn.classList.add ('light-grey-blue-border');
    containerGit.classList.add ('light-grey-blue-border');
    
}


function handleClick (){
    

}

  


   
     paletteRed.addEventListener ('click' , colorChangeRed);
     //click palette blue
     paletteBlue.addEventListener ('click' , colorChangeBlue);
       //click palette Mix
    paletteMix.addEventListener ('click' , colorChangeMix);
    //click palette Red