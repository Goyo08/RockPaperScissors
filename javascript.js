const options = ["rock", "paper", "scissors"];

function computerPlay() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
};

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection) {
        return "Its a tie! Play Again";
    } else if (playerSelection !== "rock" || "paper" || "scissors") {
        return "Please select Rock, Paper or Scissors."
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    };
  }

const playerInput = prompt('Coloca tu juguda aca');
const playerSelection = playerInput.toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));