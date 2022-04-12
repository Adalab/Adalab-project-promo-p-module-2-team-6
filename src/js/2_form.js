'use strict';

const formAllInput = document.querySelector('.js-form');
const namesCard = document.querySelector('.js_namesCard');
const professionCard = document.querySelector('.js_professionCard');
const iconMobile = document.querySelector('.js_iconMobile');
const iconMail = document.querySelector('.js_iconMail');
const iconLinkedIn = document.querySelector('.js_iconLinkedIn');
const iconGit = document.querySelector('.js_iconGit');

const data = {
  palette: 1,
  name: '',
  position: '',
  email: '',
  phonenumber: '',
  link: '',
  git: '',
  photo: '',
};

function getDataInput(event) {
  console.log('typing');
  const elementWhereUserIsTyping = event.target;
  if (elementWhereUserIsTyping.id === 'name') {
    data.name = elementWhereUserIsTyping.value;
    console.log(data.name);
  } else if (elementWhereUserIsTyping.id === 'position') {
    data.position = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === 'email') {
    data.email = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === 'phonenumber') {
    data.phonenumber = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === 'link') {
    data.link = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === 'git') {
    data.git = elementWhereUserIsTyping.value;
  }
  renderPreview();
}

function renderPreview() {
  console.log('voy a renderizar');
  console.log(data.email);
  if (data.name === '') {
    namesCard.innerHTML = 'nombre y apellido';
  } else {
    namesCard.innerHTML = data.name;
  }

  if (data.position === '') {
    professionCard.innerHTML = 'profesión';
  } else {
    professionCard.innerHTML = data.position;
  }

  if (data.email === '') {
    console.log('POR AQUÍ NO PASO');
    iconMail.href = 'mailto:hola@adalab.es';
  } else {
    iconMail.href = `mailto: ${data.email}`;
  }

  if (data.git === '') {
    iconGit.href = 'https://github.com/Adalab/';
  } else {
    iconGit.href = `https://github.com/${data.git}/ `;
  }

  if (data.link === '') {
    iconLinkedIn.href =
      'https://www.linkedin.com/school/adalab/?originalSubdomain=es';
  } else {
    iconLinkedIn.href = `https://es.linkedin.com/in/${data.link} `;
  }
  if (data.phonenumber === '') {
    iconMobile.href = 'tel:666666666';
  } else {
    iconMobile.href = `tel: ${data.phonenumber}`;
  }
}

formAllInput.addEventListener('keyup', getDataInput);
