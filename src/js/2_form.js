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
  name: "PRado",
  position: "Care",
  email: "pradocarr@gmail.com",
  phonenumber: "6000",
  link: "li",
  git: "le",
  photo: "url",
};

function handleButtonShare(event) {
  event.preventDefault();
  console.log(data);
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("quiero enviar datos");
      console.log(data);
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
}

buttonShare.addEventListener("click", handleButtonShare);
