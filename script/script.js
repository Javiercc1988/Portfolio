const projectImage = document.querySelectorAll(".project-img");
const contentBlock = document.querySelectorAll(".content-block");

projectImage.forEach(( _, i) => {
  projectImage[i].addEventListener("click", () => {
    contentBlock.forEach(( _, i) => {
      contentBlock[i].classList.remove("active");
    });

    contentBlock[i].classList.add("active");
  });
});
