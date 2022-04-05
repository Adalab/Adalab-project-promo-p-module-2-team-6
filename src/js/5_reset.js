'use strict';

const radio1 = document.querySelector('.js_radio1');
//const fileField = document.querySelector('.js__profile-upload-btn');
//const profileImage = document.querySelector('.js__profile-image');
//const profilePreview = document.querySelector('.js__profile-preview');
const preview = document.querySelector('.js_cardContainer');

//botón reset

const resetButton = document.querySelector('.js-resetButton');

// variables reset form

const resetName= document.querySelector('.js_resetName');
const resetJob= document.querySelector('.js_resetJob');
const resetMail= document.querySelector('.js_resetEmail');
const resetPhone= document.querySelector('.js_resetPhone');
const resetLinkedin= document.querySelector('.js_resetLinkedin');
const resetGit= document.querySelector('.js_resetGithub');

//variables reset preview
const resetTitle = document.querySelector('.js_resetNamesCard');
const resetProfession = document.querySelector('.js_resetJobCard');
const resetTelf = document.querySelector('.js_resetPhone');
const resetEmail = document.querySelector('.js_resetMail');
const resetLikendin = document.querySelector('.js_resetLinkedin');
const resetGitHub = document.querySelector('.js_resetGithub');

//resetear card preview


function resetCard() {
  preview.classList.remove('paletteBlue');
  preview.classList.remove('paletteRed');
  preview.classList.remove('paletteMix');
  resetTitle.textContent = 'Nombre Apellido';
  resetProfession.textContent = 'Front-end developer';
  profilePreview.style.backgroundImage='';
  profileImage.style.backgroundImage='';
  resetTelf.href = '';
  resetEmail.href = '';
  resetLikendin.href = '';
  resetGitHub.href = '';
}

//resetear form
function resetForm (){
  radio1.checked = 'selected';
  resetName.value='';
  resetJob.value='';
  fileField.value= '';
  resetMail.value='';
  resetPhone.value='';
  resetLinkedin.value='';
  resetGit.value='';
}

//función manejadora

function handleResetCreate (event){
  event.preventDefault();
  resetForm ();
  resetCard ();
  console.log('hola');
}

//evento
resetButton.addEventListener('click', handleResetCreate);
