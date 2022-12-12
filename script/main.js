// Scroll Button
const buttonGoTopPage = document.querySelector("#button-top-page");

// SideNav
const sidenav = document.querySelector(".sidenav");
const toggle = document.querySelector(".toggle");
const hamburguerButton = document.querySelector("#checkbox");
const menuButton = document.querySelectorAll(".menu-list-item");

// Cards
const cardImage = document.querySelectorAll(".card-img");
const contentBlock = document.querySelectorAll(".content-block");

// Night / Day Mode
const night = document.querySelector(".night-mode");
const body = document.querySelector("body");

// Scroll Button
function scrollTopButton() {
  window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
      let windowBottom = window.scrollY;
      if (windowBottom <= 100) {
        buttonGoTopPage.style.opacity = 0;
      } else {
        buttonGoTopPage.style.opacity = 1;
      }
    });
  });

  buttonGoTopPage.onclick = () => window.scrollTo({ top: 0 });
}

// SideNav
hamburguerButton.addEventListener("click", () => {
  sidenav.classList.toggle("close");
});

// Night / Day Mode
night.addEventListener("click", () => {
  if (night.classList.contains("fa-moon")) {
    night.classList.replace("fa-moon", "fa-lightbulb");
    night.style.color = "#f7f4f4"
  } else {
    night.classList.replace("fa-lightbulb", "fa-moon");
    night.style.color = "#6246ea"
  }
  body.classList.toggle("dark");
});


menuButton.forEach((button) => {
  button.addEventListener("click", () => {
    sidenav.classList.add("close");

    hamburguerButton.checked === true
      ? (hamburguerButton.checked = false)
      : hamburguerButton.checked;
    console.log("dasdasda", hamburguerButton.checked);
  });
});

// Cards
cardImage.forEach((_, i) => {
  cardImage[i].addEventListener("click", () => {
    contentBlock.forEach((_, i) => {
      contentBlock[i].classList.remove("active");
    });

    contentBlock[i].classList.add("active");
  });
});

const gifts = ['cat', 'game', 'socks']
const myArr = []
function wrapping(gifts) {
  return gifts.map( element => {
    const string = "*".repeat(element.length + 2);
    return `${string}\n*${element}*\n${string}`
  })
}

// Execution
scrollTopButton();
