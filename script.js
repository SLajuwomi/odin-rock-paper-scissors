/* Rock Paper Scissors
 this is a computer vs. user game
 the computer will need a randomly selected rps (rock/paper/scissors)
 use Math.random - Math.random returns 0, assign computer variable to rock. returns 1 - assign paper. - returns 2 assign scissors
 create variables to store rock, paper, and scissors ( for both user and computer)
 ask user to input their choice of rock/paper/scissors
 if rock is put against paper, the user who has paper wins! display win/loss message to user
 if rock is put against scissors, the user who has rock wins. display win/loss message to user
 if paper is put against scissors, the user who has scissors wins
 the game will keep track of score
 make a counter for both the user and the computer that increments by 1 every time console.log("Hello World");

*/

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
  userChoice = prompt("Rock, Paper or Scissors? ");
  let lowerUserChoice = userChoice.toLowerCase();
  //   console.log(typeof lowerUserChoice);
  // console.log(lowerUserChoice);

  if (
    lowerUserChoice != "rock" &&
    lowerUserChoice != "paper" &&
    lowerUserChoice != "scissors"
  ) {
    alert("Not a valid choice!");
  } else {
    userChoice = lowerUserChoice;
  }

  return userChoice;
}

function playRound(userChoice, computerChoice) {
  if (computerChoice == "paper" && userChoice == "rock") {
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

function playGame() {
  let counter = 0;
  while (counter < 5) {
    let computerSelection = getComputerChoice();
    let userSelection = getUserChoice();
    playRound(userSelection, computerSelection);
    console.log("User score: " + userScore);
    console.log("Computer score: " + computerScore);
    counter++;
  }
}

// console.log("User selection: " + userSelection);
// console.log("Computer selection: " + computerSelection);
// playRound(userSelection, computerSelection);
// console.log("User score: " + userScore);
// console.log("Computer score: " + computerScore);
playGame();
