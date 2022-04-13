"use strict";

const formAllInput = document.querySelector(".js-form");
const namesCard = document.querySelector(".js_namesCard");
const professionCard = document.querySelector(".js_professionCard");
const iconMobile = document.querySelector(".js_iconMobile");
const iconMail = document.querySelector(".js_iconMail");
const iconLinkedIn = document.querySelector(".js_iconLinkedIn");
const iconGit = document.querySelector(".js_iconGit");
const buttonShare = document.querySelector(".js-buttonShare");
const shareLink = document.querySelector(".js-shareLink");
const shareLinkWrapper = document.querySelector(".js-shareLinkWrapper");
const shareTwitter = document.querySelector(".js-shareTwitter");
const inputNames = document.querySelector(".js-inputNames");
const inputProfession = document.querySelector(".js-inputProfession");
const inputemail = document.querySelector(".js-inputemail");
const inputphone = document.querySelector(".js-inputphone");
const inputlinkedin = document.querySelector(".js-inputlinkedin");
const inputgit = document.querySelector(".js-inputgit");

let data = {
  palette: 1,
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  photo: "",
};

function getDataInput(event) {
  const elementWhereUserIsTyping = event.target;
  if (elementWhereUserIsTyping.id === "name") {
    data.name = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === "job") {
    data.job = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === "email") {
    data.email = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === "phone") {
    data.phone = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === "linkedin") {
    data.linkedin = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === "github") {
    data.github = elementWhereUserIsTyping.value;
  }

  console.log(data);
  renderPreview();
}

function renderPreview() {
  if (data.name === "") {
    namesCard.innerHTML = "nombre apellido";
  } else {
    namesCard.innerHTML = data.name;
  }

  if (data.job === "") {
    professionCard.innerHTML = "profesión";
  } else {
    professionCard.innerHTML = data.job;
  }

  if (data.email === "") {
    iconMail.href = "mailto:hola@adalab.es";
  } else {
    iconMail.href = `mailto: ${data.email}`;
  }

  if (data.github === "") {
    iconGit.href = "https://github.com/Adalab/";
  } else {
    iconGit.href = `https://github.com/${data.github}/ `;
  }

  if (data.linkedin === "") {
    iconLinkedIn.href =
      "https://www.linkedin.com/school/adalab/?originalSubdomain=es";
  } else {
    iconLinkedIn.href = `https://es.linkedin.com/in/${data.linkedin} `;
  }
  if (data.phone === "") {
    iconMobile.href = "tel:666666666";
  } else {
    iconMobile.href = `tel: ${data.phone}`;
  }
  copyInLocalStorage();
}

function handleButtonShare(event) {
  event.preventDefault();
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        shareLink.href = result.cardURL;
        shareLinkWrapper.classList.remove("disapear");
        shareTwitter.innerHTML += `<a class="done__button-twitter__content" title="compartir en twitter" href="https://twitter.com/intent/tweet?text=Tarjeta%20de%20contacto%20equipo%206%20&url=${result.cardURL}&hashtags=equipo6" target="_blank"> <i class="fa-brands fa-twitter done__button-twitter__icon"></i>
          Compartir en twitter
        </a>`;
      }
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
}

//Guardo en Local Storage el array de data convertido a string
function copyInLocalStorage() {
  const stringData = JSON.stringify(data);
  localStorage.setItem("data", stringData);
  getDataInput();
}

//saco de Local Storage el string de data y lo convierto a array
function getLocalStorage() {
  const localStorageForm = localStorage.getItem("data");

  //Si está guardado en LS llamo a la funcion
  if (localStorageForm !== null) {
    const userDataLocal = JSON.parse(localStorageForm);
    data = userDataLocal;
    if (data.name !== "") {
      inputNames.value = data.name;
      renderPreview(data);
    }
    if (data.job !== "") {
      inputProfession.value = data.job;
    }
    if (data.email !== "") {
      inputemail.value = data.email;
    }
    if (data.phone !== "") {
      inputphone.value = data.phone;
    }
    if (data.linkedin !== "") {
      inputlinkedin.value = data.linkedin;
    }
    if (data.github !== "") {
      inputgit.value = data.github;
    }
    console.log("voy a mostrar data");
    console.log(data);
  }
}

//Llamo a la info guardada en LS y que la pinte, cuando cargue la página

getLocalStorage();
buttonShare.addEventListener("click", handleButtonShare);
formAllInput.addEventListener("keyup", getDataInput);
