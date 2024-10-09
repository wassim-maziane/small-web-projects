let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

function resetGame() {
  const paras = document.querySelectorAll(".resultParas p");
  for (const para of paras) {
    para.textContent = "";
  }
  lastResult.style.backgroundColor = "";
  guessCount = 1;
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessField.focus();
  guessField.value = "";
}

function setGameOver() {
  guessSubmit.disabled = true;
  guessField.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Reset Game";
  resetButton.addEventListener("click", resetGame);
  document.body.appendChild(resetButton);
}
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!Game Over!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong Guess!";
    lastResult.style.backgroundColor = "red";
    if (userGuess > randomNumber) {
      lowOrHi.textContent = "Your guess is too high!";
    } else if (userGuess < randomNumber) {
      lowOrHi.textContent = "Your guess is too low!";
    }
  }
  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);
