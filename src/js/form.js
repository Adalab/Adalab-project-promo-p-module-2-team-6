"use strict";

const formAllInput = document.querySelector(".js-form");
const namesCard = document.querySelector(".js_namesCard");
const professionCard = document.querySelector(".js_professionCard");
const iconMobile = document.querySelector(".js_iconMobile");
const iconMail = document.querySelector(".js_iconMail");
const iconLinkedIn = document.querySelector(".js_iconLinkedIn");
const iconGit = document.querySelector("js_iconGit");

const data = {
  palette: 1,
  name: "",
  position: "",
  email: "",
  phonenumber: "",
  link: "",
  git: "",
  photo: "",
};

function getDataInput(event) {
  const elementWhereUserIsTyping = event.target;
  console.log("GETDATAINPUT");
  console.log(namesCard.innerHTML);
  if (elementWhereUserIsTyping.id === "name") {
    const dataname = elementWhereUserIsTyping.value;
    data.name = dataname;

    if (dataname === "") {
      console.log("BEFORE REFILL");
      console.log(namesCard.innerHTML);
      namesCard.innerHTML = "nombre y apellido";
    } else {
      renderName();
    }
  } else if (elementWhereUserIsTyping.id === "position") {
    data.position = elementWhereUserIsTyping.value;

    if (data.position === "") {
      professionCard.innerHTML = "profesión";
    } else {
      renderpoisition();
    }
  } else if (elementWhereUserIsTyping.id === "email") {
    data.email = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === "phonenumber") {
    data.phonenumber = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === "link") {
    data.link = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.id === "git") {
    data.git = elementWhereUserIsTyping.value;
  }
}

function renderName() {
  console.log("BEFORE RENDER");
  console.log(namesCard.innerHTML);
  namesCard.innerHTML = data.name;
}

function renderpoisition() {
  professionCard.innerHTML = data.position;
}

function renderPreview() {
  iconMobile.tel = data.phonenumber;
  iconMail.href = `mailto: ${data.email}`;
  iconLinkedIn.href = data.link;
  iconGit.href = data.git;
}

function handleKeyupInputs(event) {
  getDataInput(event);
  renderPreview();
}

formAllInput.addEventListener("keyup", handleKeyupInputs);
