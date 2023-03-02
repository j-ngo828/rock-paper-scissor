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

function game() {
  const round = 0;
  for (let i = 1; i === 1; ++i) {
    const playerSelection = prompt("Enter your choice: ");
    const computerSelection = getComputerChoice();
    console.log(
      `Game ${i} result: ${playRound(playerSelection, computerSelection)}`
    );
  }
}

function main() {
  const choiceButtons = document.querySelectorAll(".choice");
  const result = document.querySelector(".result");
  const playerChoiceElem = document.querySelector(".my-choice");
  const computerChoiceElem = document.querySelector(".computer-choice");
  const roundElem = document.querySelector(".round-counter");
  let round = 1;
  roundElem.textContent = `Round: ${round}`;
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
    const roundResult = playRound(playerChoice, computerChoice);
    result.textContent = roundResult;
  };
  choiceButtons.forEach((button) =>
    button.addEventListener("click", handleClick)
  );
}

main();
