let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userscore");
const compScore_span = document.getElementById("compscore");
const scoreboard_div = document.getElementsByClassName("scoreboard");
const result = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

///Create function to conver user input into readable text
function Convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "s") return "Scissor";
  else return "Paper";
}

function win(u, c) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore = compScore;
  result.innerHTML = Convert(u) + " beats " + Convert(c) + ". You win ";
  var i = Math.floor(Math.random() * 3 + 1);
  document.getElementById("showMeme").src = "images/win" + i + ".jpg";
  document.getElementById("showMeme").style.visibility = "visible";
}
function lose(u, c) {
  compScore++;
  compScore_span.innerHTML = compScore;
  userScore = userScore;
  result.innerHTML = Convert(c) + " beats " + Convert(u) + ". You lose ";
  var i = Math.floor(Math.random() * 3 + 1);
  document.getElementById("showMeme").src = "images/lose" + i + ".jpg";

  document.getElementById("showMeme").style.visibility = "visible";
}
function draw(u, c) {
  userScore = userScore;
  compScore = compScore;
  result.innerHTML =
    Convert(u) + " is equal to " + Convert(c) + ". Nothing changed";
  document.getElementById("showMeme").src = "images/draw.jpg";
  document.getElementById("showMeme").style.visibility = "visible";
}

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const value = Math.floor(Math.random() * 3);
  ///value is the index of choices array, runs from 0->2 because Math.floor formular
  return choices[value];
}

///Benchoice is parameter that we put inside, we call function play("r"), play("p") later
function play(Benchoice) {
  const computerchoice = getComputerChoice();
  switch (Benchoice + computerchoice) {
    case "rs":
    case "sp":
    case "pr":
      win(Benchoice, computerchoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(Benchoice, computerchoice);
      break;
    default:
      draw(Benchoice, computerchoice);
      break;
  }
}

///why function has no parameter, we need to create anomynous function to put our function inside in addEventListener
function main() {
  rock_div.addEventListener("click", function() {
    play("r");
  });
  paper_div.addEventListener("click", function() {
    play("p");
  });
  scissor_div.addEventListener("click", function() {
    play("s");
  });
}
main();
