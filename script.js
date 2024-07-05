let computerChoice = "";
let userChoice = "";
let userScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice) {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getUserChoice(userChoice) {
  const button = document.querySelector(button);

  // userChoice = prompt("Rock, Paper or Scissors? ");

  let lowerCaseUserChoice = userChoice.toLowerCase();

  if (
    lowerCaseUserChoice != "rock" &&
    lowerCaseUserChoice != "paper" &&
    lowerCaseUserChoice != "scissors"
  ) {
    alert("Not a valid choice!");
  } else {
    userChoice = lowerCaseUserChoice;
  }

  return userChoice;
}

function playRound(userChoice, computerChoice) {
const results = document.querySelector("#results")


  if (computerChoice == "paper" && userChoice == "rock") {
    const paperWins = document.createElement("p")
    paperWins.textContent = "Paper beats rock. You lose!"
    results.appendChild(paperWins)
    console.log("Paper beats rock. You lose!");
    computerScore++;
  } else if (computerChoice == "rock" && userChoice == "scissors") {
    console.log("Rock beats scissors. You lose!");
    computerScore++;
  } else if (computerChoice == "scissors" && userChoice == "paper") {
    console.log("Scissors beats paper. You lose!");
    computerScore++;
  } else if (userChoice == "rock" && userChoice == "paper") {
    console.log("Paper beats rock. You win!");
    userScore++;
  } else if (computerChoice == "paper" && userChoice == "scissors") {
    console.log("Scissors beats paper. You win!");
    userScore++;
  } else if (computerChoice == "scissors" && userChoice == "rock") {
    console.log("Rock beats scissors. You win!");
    userScore++;
  } else if (computerChoice == userChoice) {
    console.log("It's a tie!");
  }
}

const button = document.querySelector("#options");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

computerChoice = getComputerChoice();

button.addEventListener("click", (e) => {
  const target = e.target;

  switch (target.id) {
    case "rock":
      playRound(rockButton.textContent.toLowerCase(), computerChoice);;
      break;
    case "paper":
      playRound(paperButton.textContent.toLowerCase(), computerChoice);
      break;
    case "scissors":
      playRound(scissorsButton.textContent.toLowerCase(), computerChoice);
      break;
  }
});
