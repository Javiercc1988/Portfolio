const cardImage = document.querySelectorAll(".card-img");
const contentBlock = document.querySelectorAll(".content-block");
const input = document.querySelectorAll(".form-input");
const label = document.querySelectorAll(".form-label");
const textarea = document.querySelectorAll(".form-textarea");

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
