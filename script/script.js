const sidenav = document.querySelector(".sidenav");
const toggle = document.querySelector(".toggle");
const btn = document.querySelector("#checkbox");

function changeSize() {
    sidenav.classList.remove(".close");
}

btn.addEventListener("click", () => {
    console.log("click");
    sidenav.classList.toggle("close");
});
