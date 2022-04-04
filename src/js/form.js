'use strict';

// 1. Constantes globales

const formInputs = document.querySelector('.js-inputs');


const previewName = document.querySelector('.js_preview_name');
const previewJob = document.querySelector('.js_preview_job');
const previewPhone = document.querySelector('.js_preview_mobile');
const previewMail = document.querySelector('.js_preview_mail'); 
const previewLinkedin = document.querySelector('.js_preview_linkedin');
const previewGit = document.querySelector('.js_preview_git');

const data = {
  palette: 1,
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

// 2. Eventos y funciones

// function paintReview() {
//   if (data.name === '') {
//     previewName.textContent = 'Nombre Apellido';
//   } else {
//     previewName.innerHTML = data.name;
//   }
//   if (data.job === ''){
//     previewJob.textContent = 'Front-end developer';
//   } else{
//     previewJob.innerHTML = data.job;
//   }
//   previewMail.href = `mailto:${data.email}`;
//   previewLinkedin.href = data.linkedin;
//   previewGit.href = data.github;
  
// }

function handleKey(event) {
  const typedUserElement = event.target;
  if(typedUserElement.name === 'name') {
    data.name = typedUserElement.value;
  }
  else if(typedUserElement.name === 'job'){
    data.job = typedUserElement.value;
  }
  else if(typedUserElement.name === 'email'){
    data.email = typedUserElement.value;
  }
  else if(typedUserElement.name === 'phone'){
    data.phone = typedUserElement.value;
  }
  else if(typedUserElement.name === 'linkedin'){
    data.linkedin = typedUserElement.value;
  }
  else if(typedUserElement.name === 'github'){
    data.github = typedUserElement.value;
  }
  paintReview();
}

function paintReview(){
  previewName.innerHTML = data.name;
  previewJob.innerHTML = data.job;
  previewPhone.href = data.phone;
  previewMail.href = `mailto:${data.email}`;
  previewLinkedin.href = data.linkedin;
  previewGit.href = data.github;
}
formInputs.addEventListener('keyup', handleKey);


// rellenar con texto inicial

 