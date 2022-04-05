'use strict';


//--------CONST GENERAL-----------
/* const legend */
const fillLegend = document.querySelector('.js-fill_legend');
const designLegend = document.querySelector('.js-design_legend');
const shareLegend = document.querySelector('.js-share_legend');
/* const wrapper */
const designWrapper = document.querySelector('.js-design__wrapper');
const fillWrapper = document.querySelector('.js-fill__wrapper');
const shareWrapper = document.querySelector('.js-share__wrapper');
/* const triangle */
const fillTriangle = document.querySelector('.js-fill__triangle');
const designTriangle = document.querySelector('.js-design__triangle');
const shareTriangle = document.querySelector('.js-share__triangle');
 
 
//-------- share-----------            
function handleArrowS(){
    shareWrapper.classList.toggle('hidden');
    shareTriangle.classList.toggle('turn');
    if (designWrapper.classList.contains('hidden')){
        designTriangle.classList.remove('turn');
    }
    else {
        designWrapper.classList.add('hidden');
        designTriangle.classList.remove('turn');
    }
    if (fillWrapper.classList.contains('hidden')){
        fillTriangle.classList.remove('turn');
    }
    else {
        fillWrapper.classList.add('hidden');
        fillTriangle.classList.remove('turn');
    }
    }

//-------- fill-----------
function handleArrowF(){
    fillWrapper.classList.toggle('hidden');
    fillTriangle.classList.toggle('turn');
    if (designWrapper.classList.contains('hidden')){
        designTriangle.classList.remove('turn');
    }
    else {
        designWrapper.classList.add('hidden');
        designTriangle.classList.remove('turn');
    }
    if (shareWrapper.classList.contains('hidden')){
        shareTriangle.classList.remove('turn');
    }
    else {
        shareWrapper.classList.add('hidden');
        shareTriangle.classList.remove('turn');
    }
    }
 
//-------- design-----------
function handleArrowD(){
    designWrapper.classList.toggle('hidden');
    designTriangle.classList.toggle('turn');
    if (shareWrapper.classList.contains('hidden')){
        shareTriangle.classList.remove('turn');
    }
    else {
        shareWrapper.classList.add('hidden');
        shareTriangle.classList.remove('turn');
    }
    if (fillWrapper.classList.contains('hidden')){
        fillTriangle.classList.remove('turn');
    }
    else {
        fillWrapper.classList.add('hidden');
        fillTriangle.classList.remove('turn');
    }
    }
    designLegend.addEventListener('click', handleArrowD);
    fillLegend.addEventListener('click', handleArrowF);
    shareLegend.addEventListener('click', handleArrowS);
    