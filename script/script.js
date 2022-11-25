const cardImage = document.querySelectorAll(".card-img");
const contentBlock = document.querySelectorAll(".content-block");

cardImage.forEach(( _, i) => {
  cardImage[i].addEventListener("click", () => {
    contentBlock.forEach(( _, i) => {
      contentBlock[i].classList.remove("active");
    });

    contentBlock[i].classList.add("active");
  });
});
