"use strict";

const formAllInput = document.querySelector(".js-form");
const namesCard = document.querySelector(".js_namesCard");
const professionCard = document.querySelector(".js_professionCard");
const iconMobile = document.querySelector(".js_iconMobile");
const iconMail = document.querySelector(".js_iconMail");
const iconLinkedIn = document.querySelector(".js_iconLinkedIn");
const iconGit = document.querySelector(".js_iconGit");
const buttonShare = document.querySelector(".js-buttonShare");

const data = {
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
  renderPreview();
}

function renderPreview() {
  if (data.name === "") {
    namesCard.innerHTML = "nombre y apellido";
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
}

function handleButtonShare(event) {
  event.preventDefault();
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {})
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
}

buttonShare.addEventListener("click", handleButtonShare);
formAllInput.addEventListener("keyup", getDataInput);
