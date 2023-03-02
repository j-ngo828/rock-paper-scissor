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

function playRound(playerSelection, computerSelection, state) {
  const playerChoice = playerSelection.toLowerCase();
  if (playerChoice === computerSelection) {
    return "TIE!";
  }

  if (playerChoice === ROCK) {
    if (computerSelection === PAPER) {
      state.computerWon += 1;
      return "You Lose! Paper beats Rock";
    } else {
      state.playerWon += 1;
      return "You Win! Rock beats Scissor";
    }
  } else if (playerChoice === PAPER) {
    if (computerSelection === ROCK) {
      state.playerWon += 1;
      return "You Win! Paper beats Rock";
    } else {
      state.computerWon += 1;
      return "You Lose! Scissor beats Paper";
    }
  } else {
    if (computerSelection === ROCK) {
      state.computerWon += 1;
      return "You Lose! Rock beats Scissor";
    } else {
      state.playerWon += 1;
      return "You Win! Scissor beats Paper";
    }
  }
}

function main() {
  const choiceButtons = document.querySelectorAll(".choice");
  const roundResult = document.querySelector(".round-result");
  const playerChoiceElem = document.querySelector(".my-choice");
  const computerChoiceElem = document.querySelector(".computer-choice");
  const roundElem = document.querySelector(".round-counter");
  const container = document.querySelector(".container");
  const finalResult = document.createElement("div");
  const playerWonElem = document.querySelector(".player-won");
  const computerWonElem = document.querySelector(".computer-won");
  finalResult.classList.add("final-result");
  let round = 1;
  const state = {
    playerWon: 0,
    computerWon: 0,
  };
  // let computerWon = 0;
  roundElem.textContent = `Round: ${round}`;
  playerWonElem.textContent = `You won: ${state.playerWon} round`;
  computerWonElem.textContent = `Computer won: ${state.computerWon} round`;
  const formatChoice = (choice) =>
    `${choice[0].toUpperCase()}${choice.slice(1)}`;
  const handleClick = (event) => {
    const playerChoice = event.target.dataset.choice;
    const computerChoice = getComputerChoice();
    round++;
    roundElem.textContent = `Round: ${round}`;
    playerChoiceElem.textContent = `You chose ${formatChoice(playerChoice)}`;
    computerChoiceElem;
    computerChoiceElem.textContent = `Computer chose ${formatChoice(
      computerChoice
    )}`;
    const roundOutcome = playRound(playerChoice, computerChoice, state);
    roundResult.textContent = roundOutcome;
    playerWonElem.textContent = `You won: ${state.playerWon} round`;
    computerWonElem.textContent = `Computer won ${state.computerWon} round`;
    if (state.playerWon === 5 || state.computerWon === 5) {
      finalResult.textContent = `Winner is: ${
        state.playerWon === 5 ? "you!!" : "the computer!!"
      }`;
      container.appendChild(finalResult);
      // round = 1;
      // roundElem.textContent = `Round: ${round}`;
      state.playerWon = 0;
      state.computerWon = 0;
    }
  };
  choiceButtons.forEach((button) =>
    button.addEventListener("click", handleClick)
  );
}

main();
