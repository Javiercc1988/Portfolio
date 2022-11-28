//CARDS
const cardImage = document.querySelectorAll(".card-img");
const contentBlock = document.querySelectorAll(".content-block");

const sidenav = document.querySelector(".sidenav");
const toggle = document.querySelector(".toggle");
const btn = document.querySelector("#checkbox");

const buttonGoTopPage = document.querySelector("#button-top-page");
buttonGoTopPage.onclick = () => window.scrollTo({ top: 0 });

btn.addEventListener("click", () => {
  console.log("click");
  sidenav.classList.toggle("close");
});

cardImage.forEach((_, i) => {
  cardImage[i].addEventListener("click", () => {
    contentBlock.forEach((_, i) => {
      contentBlock[i].classList.remove("active");
    });

    contentBlock[i].classList.add("active");
  });
});
