'use strict';

const formAllInput = document.querySelector('.js-form');
const namesCard = document.querySelector('.js_namesCard');
const professionCard = document.querySelector('.js_professionCard');
const iconMobile = document.querySelector('.js_iconMobile');
const iconMail = document.querySelector('.js_iconMail');
const iconLinkedIn = document.querySelector('.js_iconLinkedIn');
const iconGit = document.querySelector('.js_iconGit');
const buttonShare = document.querySelector('.js-buttonShare');
const shareLink = document.querySelector('.js-shareLink');
const shareLinkWrapper = document.querySelector('.js-shareLinkWrapper');
const shareTwitter = document.querySelector('.js-shareTwitter');
let inputName = document.querySelector('.js-inputName');

let data = {
  palette: 1,
  name: '',
  job: '',
  email: '',

  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

function getDataInput(event) {
  const elementWhereUserIsTyping = event.target;
  if (elementWhereUserIsTyping.id === 'name') {
    data.name = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === 'job') {
    data.job = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === 'email') {
    data.email = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === 'phone') {
    data.phone = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === 'linkedin') {
    data.linkedin = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === 'github') {
    data.github = elementWhereUserIsTyping.value;
  }
  renderPreview();
}

function renderPreview() {
  if (data.name === '') {
    namesCard.innerHTML = 'nombre apellido';
  } else {
    namesCard.innerHTML = data.name;
  }

  if (data.job === '') {
    professionCard.innerHTML = 'profesión';
  } else {
    professionCard.innerHTML = data.job;
  }

  if (data.email === '') {
    iconMail.href = 'mailto:hola@adalab.es';
  } else {
    iconMail.href = `mailto: ${data.email}`;
  }

  if (data.github === '') {
    iconGit.href = 'https://github.com/Adalab/';
  } else {
    iconGit.href = `https://github.com/${data.github}/ `;
  }

  if (data.linkedin === '') {
    iconLinkedIn.href =
      'https://www.linkedin.com/school/adalab/?originalSubdomain=es';
  } else {
    iconLinkedIn.href = `https://es.linkedin.com/in/${data.linkedin} `;
  }
  if (data.phone === '') {
    iconMobile.href = 'tel:666666666';
  } else {
    iconMobile.href = `tel: ${data.phone}`;
  }
}

function handleButtonShare(event) {
  event.preventDefault();
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        shareLink.href = result.cardURL;
        shareLinkWrapper.classList.remove('disapear');
        shareTwitter.innerHTML += `<a class="twitter" href="https://twitter.com/intent/tweet?text=Tarjeta%20de%20contacto%20equipo%206%20&url=${result.cardURL}&hashtags=equipo6" target="_blank"> <i class="fa-brands fa-twitter done__button-twitter__icon"></i>
          Compartir en twitter
        </a>`;
      }
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
  copyInLocalStorage();
}

//Guardo en Local Storage el array de data convertido a string
function copyInLocalStorage() {
  const stringData = JSON.stringify(data);
  localStorage.setItem('data', stringData);
}

//saco de Local Storage el string de data y lo convierto a array
/*function getLocalStorage() {
  const localStorageForm = localStorage.getItem('data');

  //Si está guardado en LS llamo a la funcion
  if (localStorageForm !== null) {
    console.log('uno');
    data = JSON.parse(localStorageForm);
    if (data.name !== null) {
      data.name = inputName.value;
      console.log('dos');
      console.log(data);
      console.log(inputName.value);
    }
  }
}

//Llamo a la info guardada en LS y que la pinte, cuando cargue la página

getLocalStorage();*/

buttonShare.addEventListener('click', handleButtonShare);
formAllInput.addEventListener('keyup', getDataInput);
