let computerChoice = "";
let userChoice = "";
let userScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");

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
  if (computerChoice == "paper" && userChoice == "rock") {
    const stateOne = document.createElement("p");
    stateOne.textContent = "Paper beats rock. You lose!";
    results.appendChild(stateOne);
    computerScore++;
  } else if (computerChoice == "rock" && userChoice == "scissors") {
    const stateTwo = document.createElement("p");
    stateTwo.textContent = "Rock beats scissors. You lose!";
    results.appendChild(stateTwo);
    computerScore++;
  } else if (computerChoice == "scissors" && userChoice == "paper") {
    const stateThree = document.createElement("p");
    stateThree.textContent = "Scissors beats paper. You lose!";
    results.appendChild(stateThree);
    computerScore++;
  } else if (computerChoice == "rock" && userChoice == "paper") {
    const stateFour = document.createElement("p");
    stateFour.textContent = "Paper beats rock. You win!";
    results.appendChild(stateFour);
    userScore++;
  } else if (computerChoice == "paper" && userChoice == "scissors") {
    const stateFive = document.createElement("p");
    stateFive.textContent = "Scissors beats paper. You win!";
    results.appendChild(stateFive);
    userScore++;
  } else if (computerChoice == "scissors" && userChoice == "rock") {
    const stateSix = document.createElement("p");
    stateSix.textContent = "Rock beats scissors. You win!";
    results.appendChild(stateSix);
    userScore++;
  } else if (computerChoice == userChoice) {
    const stateSeven = document.createElement("p");
    // Display value of user or computer choice with first letter capitalized
    stateSeven.textContent =
      computerChoice[0].toUpperCase() +
      computerChoice.slice(1) +
      " = " +
      (userChoice[0].toUpperCase() + userChoice.slice(1)) +
      ". It's a tie!";
    results.appendChild(stateSeven);
  }

  updateScore();
}

function updateScore() {
  const scoreElement = document.querySelector("#score");
  scoreElement.textContent =
    "You: " + userScore + " Computer: " + computerScore;

  if (userScore === 5 || computerScore === 5) {
    const endMessage = document.querySelector("h1")
    if (userScore === 5) {
      endMessage.textContent = "Congratulations! You win the game!";
    } else {
      endMessage.textContent = "Sorry! The computer wins the game!";
    }

    button.removeEventListener("click", handleButtonClick);
  }
}

function handleButtonClick(e) {
  const target = e.target;
  computerChoice = getComputerChoice();
  switch (target.id) {
    case "rock":
      playRound(rockButton.textContent.toLowerCase(), computerChoice);
      break;
    case "paper":
      playRound(paperButton.textContent.toLowerCase(), computerChoice);
      break;
    case "scissors":
      playRound(scissorsButton.textContent.toLowerCase(), computerChoice);
      break;
  }
}

const button = document.querySelector("#options");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

button.addEventListener("click", handleButtonClick)


