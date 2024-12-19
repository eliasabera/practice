const qouets = [
  {
    qoute: "“You must be the change you wish to see in the world.”",
    author: "– Mahatma Gandhi",
  },
  {
    qoute:
      "“Spread love everywhere you go. Let no one ever come to you without leaving happier.”",
    author: " – Mother Teresa",
  },
  {
    qoute: "“The only thing we have to fear is fear itself.”",
    author: " – Franklin D. Roosevelt",
  },
  {
    qoute:
      " “Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that.”",
    author: "-Martin Luther King Jr.",
  },
];
const btn = document.querySelector(".btn");
const qouteItem = document.querySelector(".qoute-item");
const author = document.querySelector(".qoute-author");
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  const first = qouets[currentItem];
  qouteItem.textContent = first.qoute;
  author.textContent = first.author;
});

function display(qoute) {
  const item = qouets[currentItem];
  qouteItem.textContent = item.qoute;
  author.textContent = item.author;
}
btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * qouets.length);
  currentItem = random;
  display(qouets);
});
