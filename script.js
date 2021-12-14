"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, score);
  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    // When player wins
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".banner").style.backgroundImage = "none";
    document.querySelector(".banner").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.border = "5px solid white";
    document.querySelector(".number").style.paddingLeft = "20px";
    document.querySelector(".number").style.paddingRight = "20px";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess i wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Number too high!" : "Number too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🧨You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".banner").style.backgroundImage =
    "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(https://source.unsplash.com/iar-afB0QQw/1600x900)";
  document.querySelector(".banner").style.backgroundColor = "none";
  document.querySelector(".number").style.border = "none";
  document.querySelector(".number").style.padding = "0px";
});
