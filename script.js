let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const r = Math.random();
    if (r < 1/3) return "rock";
    if (r < 2/3) return "paper";
    return "scissors";
}

console.log(getComputerChoice());

function getHumanChoice() {
    const input = prompt("Enter rock, paper, or scissors:");
    return input.toLowerCase();
}

console.log(getHumanChoice());