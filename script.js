let humanScore = 0;
let computerScore = 0;

// Generate computer's choice
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return "rock";
  else if (randomNumber < 0.66) return "paper";
  else return "scissors";
}

// Play a single round
function playRound(humanChoice, computerChoice) {
  let result = "";

  if (humanChoice === computerChoice) {
    result = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  updateDisplay(result);
}

// Update the DOM
function updateDisplay(resultText) {
  const roundResult = document.getElementById("round-result");
  const score = document.getElementById("score");
  const winner = document.getElementById("winner");

  roundResult.textContent = resultText;
  score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    winner.textContent = humanScore === 5
      ? "🎉 You won the game!"
      : "💻 Computer won the game!";

    // Disable ONLY the game buttons
    document.querySelectorAll("#buttons button").forEach(btn => (btn.disabled = true));

    // Show + enable reset button
    const resetBtn = document.getElementById("reset");
    resetBtn.style.display = "inline";
    resetBtn.disabled = false;
  }
}

// Add event listeners for buttons
document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
document.getElementById("paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

// Reset button
document.getElementById("reset").addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;

  document.getElementById("round-result").textContent = "";
  document.getElementById("score").textContent = "Player: 0 | Computer: 0";
  document.getElementById("winner").textContent = "";

  // Re-enable only the game buttons
  document.querySelectorAll("#buttons button").forEach(btn => (btn.disabled = false));

  // Hide reset
  document.getElementById("reset").style.display = "none";
});