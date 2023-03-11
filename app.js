function getCompsChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  const compsChoice = choices[randomIndex];

  return compsChoice;
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");
const allBtns = document.querySelectorAll("button");
const scoreboard = document.querySelector("#scoreboard");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

playerScore.innerHTML = 0;
computerScore.innerHTML = 0;

allBtns.forEach((item) => {
  item.addEventListener("click", (event) => {
    let playerSelection = "";
    let computerSelection = getCompsChoice();
    playerSelection += item.textContent;
    if (playerSelection === computerSelection) {
      const message = document.createElement("p");
      scoreboard.append(message);
      message.textContent = "Tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
      const message = document.createElement("p");
      scoreboard.append(message);
      message.textContent = "You loose! Paper beats Rock!";
      computerScore.innerHTML ++;
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
      const message = document.createElement("p");
      scoreboard.append(message);
      message.textContent = "You win! Rock beats Scissor!";
      playerScore.innerHTML ++;
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
      const message = document.createElement("p");
      scoreboard.append(message);
      message.textContent = "You loose! Scissor beats Paper!";
      computerScore.innerHTML ++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      const message = document.createElement("p");
      scoreboard.append(message);
      message.textContent = "You win! Paper beats Rock!";
      playerScore.innerHTML ++;
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
      const message = document.createElement("p");
      scoreboard.append(message);
      message.textContent = "You loose! Rock beats Scissor!";
      computerScore.innerHTML ++;
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
      const message = document.createElement("p");
      scoreboard.append(message);
      message.textContent = "You win! Scissor beats Paper!";
      computerScore.innerHTML ++;
    } 

    checkScore();
  });

});

function checkScore() { 
  if (playerScore.innerHTML == 5) {
    alert("YOU WON! YOU ARE AWESOME!");
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    scoreboard.innerHTML = "";

  } else if (computerScore.innerHTML == 5) {
    alert("YOU LOST! YOU ARE STILL AWESOME!");
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    scoreboard.innerHTML = "";
  } 
  
}


