'use strict';
const shareBtn = document.querySelector('.js-shareBtn');
const responseURL = document.querySelector('.js_responseURL');

function sendRequest(){
fetch('//awesome-profile-cards.herokuapp.com/card', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          urlCard.innerHTML = result.cardURL;
          urlCard.href = result.cardURL;
          createCard.classList.remove('collapsed');
          cardMessage.innerHTML = 'La tarjeta ha sido creada:';
        }
    }

shareBtn.addEventListener('click', sendRequest);
