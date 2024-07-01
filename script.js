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
 make a counter for both the user and the computer that increments by 1 every time 
 the game will play 5 times - make a function that loops a round 5 times
*/

// Declare global variables
let computerChoice = "";
let userChoice = "";
let userScore = 0;
let computerScore = 0;

// Give the computer a random value
function getComputerChoice(computerChoice) {
 // Use random function to get a number between 0, 1, and 2
  let randomNumber = Math.floor(Math.random() * 3);

 // Based on random number set the value of computerChoice to rps
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

// Get the choice of the user using a prompt
function getUserChoice(userChoice) {
  userChoice = prompt("Rock, Paper or Scissors? ");
 // Make the input case-insensitive
  let lowerUserChoice = userChoice.toLowerCase();

 // Validate that the user inputs a proper value using user &&
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

//Play a round of the game - compare user and computer choice, based on answers determine who won round by game logic, increment their score variable by 1
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


// loop that runs 5 times based on counter
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
