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
