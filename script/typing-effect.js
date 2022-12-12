const typingContainer = document.querySelector("#typingContainer");
const typingContainer2 = document.querySelector("#idd");

const phrases = ["JavaScript", "Angular", "Node.JS", "Python", "Bootstrap", "SASS"];

var x = 0;
var txt = "Te doy la bienvenida a mi sitio web, soy desarrollador con tecnologías como";
var ee = 50;

function typeWriter() {
  if (x < txt.length) {
    typingContainer2.innerHTML += txt.charAt(x);
    x++;
    setTimeout(typeWriter, ee);
  } else {
    typing();
  }
}

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function typing() {
  typingContainer.classList.add("parpadeo");

  isEnd = false;
  typingContainer.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      setTimeout(() => {
        currentPhrase.pop(phrases[i][j]);
        j--;
        
      }, 100);
    }

    if (j == phrases[i].length) {

      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  let clear = isDeleting ? 50 : 200

  setTimeout(typing, clear);
}

typeWriter();
