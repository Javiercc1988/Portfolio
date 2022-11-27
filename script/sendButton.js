//FORM
const input = document.querySelectorAll(".form-input");
const label = document.querySelectorAll(".form-label");
const textarea = document.querySelectorAll(".form-textarea");

//SEND BUTTON
const button = document.querySelector("#send-button");
const buttonText = document.querySelector("#button-text");
const buttonIconSend = document.querySelector("#button-icon-send");
const buttonIconCheck = document.querySelector("#button-icon-check");

function formStyles() {
  input.forEach((element, i) => {
    element.addEventListener("input", () => {
      element.value
        ? label[i].classList.add("label-fixed")
        : label[i].classList.remove("label-fixed");
    });
  });

  textarea.forEach((element) => {
    element.addEventListener("input", () => {
      element.value
        ? label[2].classList.add("label-fixed")
        : label[2].classList.remove("label-fixed");
    });
  });
}

function sendButtonStyles() {
  button.addEventListener("click", () => {
    buttonIconSend.classList.toggle("clicked");

    setTimeout(() => {
      buttonText.classList.add("text-disabled");
      button.classList.add("sended");
      buttonIconCheck.classList.add("sended");
    }, 1000);

    setTimeout(() => {
      buttonIconSend.classList.remove("clicked");
      buttonIconCheck.classList.remove("sended");
    }, 3000);

    setTimeout(() => {
      buttonText.classList.remove("text-disabled");
      button.classList.remove("sended");
    }, 4000);
  });
}

formStyles();
sendButtonStyles();
