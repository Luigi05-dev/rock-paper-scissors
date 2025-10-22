function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return "rock";
  else if (randomNumber < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  const input = prompt("Enter rock, paper, or scissors:");
  return input.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const comp = computerChoice;

    if (human === comp) {
      console.log("It's a tie!");
    } else if (
      (human === "rock" && comp === "scissors") ||
      (human === "paper" && comp === "rock") ||
      (human === "scissors" && comp === "paper")
    ) {
      console.log(`You win! ${human} beats ${comp}`);
      humanScore++;
    } else {
      console.log(`You lose! ${comp} beats ${human}`);
      computerScore++;
    }

    console.log(`Scores => You: ${humanScore}, Computer: ${computerScore}`);
  }

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("-----------------------------------");
  }

  console.log("Final Results:");
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 It's an overall tie!");
  }
}

playGame();