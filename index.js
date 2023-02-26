const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

function getComputerChoice() {
  // returns random integer between 0 and 2
  const randomResult = Math.floor(Math.random() * 3);
  switch (randomResult) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    default:
      return SCISSOR;
  }
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  if (playerChoice === computerSelection) {
    return "TIE!";
  }

  if (playerChoice === ROCK) {
    if (computerSelection === PAPER) {
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Rock beats Scissor";
    }
  } else if (playerChoice === PAPER) {
    if (computerSelection === ROCK) {
      return "You Win! Paper beats Rock";
    } else {
      return "You Lose! Scissor beats Paper";
    }
  } else {
    if (computerSelection === ROCK) {
      return "You Lose! Rock beats Scissor";
    } else {
      return "You Win! Scissor beats Paper";
    }
  }
}
