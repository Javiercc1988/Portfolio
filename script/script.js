const cardImage = document.querySelectorAll(".card-img");
const contentBlock = document.querySelectorAll(".content-block");
const input = document.querySelectorAll(".form-input");
const label = document.querySelectorAll(".form-label");
const textarea = document.querySelectorAll(".form-textarea");
const button = document.querySelector("#send-button");
const buttonText = document.querySelector("#button-text");
const buttonIconSend = document.querySelector("#button-icon-send");
const buttonIconCheck = document.querySelector("#button-icon-check");

function sendButonStyles() {
  button.addEventListener("click", () => {
    console.log(button);
    buttonIconSend.classList.toggle("clicked");

    setTimeout(() => {
      console.log("Entro en el 1");
      buttonText.classList.add("text-disabled");
      button.classList.add("sended");
      buttonIconCheck.classList.add("sended");
    }, 1000);

    setTimeout(() => {
      console.log("Entro en el 2");
      buttonIconSend.classList.remove("clicked");
      buttonIconCheck.classList.remove("sended");
    }, 3000);

    setTimeout(() => {
      console.log("Entro en el 3");
      buttonText.classList.remove("text-disabled");
      button.classList.remove("sended");
    }, 4000);
  });
}

input.forEach((element, i) => {
  element.addEventListener("input", (event) => {
    element.value
      ? label[i].classList.add("label-fixed")
      : label[i].classList.remove("label-fixed");
  });
});

textarea.forEach((element, i) => {
  element.addEventListener("input", (event) => {
    console.log(element.value);
    element.value
      ? label[2].classList.add("label-fixed")
      : label[2].classList.remove("label-fixed");
  });
});

cardImage.forEach((_, i) => {
  cardImage[i].addEventListener("click", () => {
    contentBlock.forEach((_, i) => {
      contentBlock[i].classList.remove("active");
    });

    contentBlock[i].classList.add("active");
  });
});

sendButonStyles();
