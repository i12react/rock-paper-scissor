let choices = ["rock", "paper", "scissor"];
function getComputerChoice() {
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}
let playerScore = 0;
let roundResult = "";
let computerScore = 0;
let drawScore = 0;

function playRound(playerSelection, computerSelection) {
    if(/rock/i .test(playerSelection) && computerSelection == "rock")
    {
        roundResult = "Draw!";
        return roundResult;
    }
    else if(/rock/i .test(playerSelection) && computerSelection == "paper")
    {
        roundResult = "You Lose! Paper beats Rock!";
        return roundResult;
    }
    else if(/rock/i .test(playerSelection) && computerSelection == "scissor")
    {
        roundResult = "You Win! Rock beats Scissor!";
        return roundResult;
    }
    else if(/paper/i.test(playerSelection) && computerSelection == "rock")
    {
        roundResult = "You Win! Paper beats Rock!";
        return roundResult;
    }
    else if(/paper/i.test(playerSelection) && computerSelection == "paper")
    {
        roundResult = "Draw!";
        return roundResult;
    }
    else if(/paper/i.test(playerSelection) && computerSelection == "scissor")
    {
        roundResult = "You Lose! Scissor beats Paper!";
        return roundResult;
    }
    else if(/scissor/i.test(playerSelection) && computerSelection == "rock")
    {
        roundResult = "You Lose! Rock beats Scissor!";
        return roundResult;
    }
    else if(/scissor/i.test(playerSelection) && computerSelection == "paper")
    {
        roundResult = "You Win! Scissor beats Paper!";
        return roundResult;
    }
    else if(/scissor/i.test(playerSelection) && computerSelection == "scissor")
    {
        roundResult = "Draw!";
        return roundResult;
    }
}
function game() {
    for(let i = 0; i < 5; i++) {
        let player = prompt("Input rock, paper or scissor!");
        console.log(playRound(player, getComputerChoice()));
        keepCount();
    }
    console.log(decideWinner());
}
function keepCount() {
    if(/You Win!/i.test(roundResult)) {
        playerScore++;
        return playerScore;
    }
    else if(/You Lose!/i.test(roundResult)) {
        computerScore++;
        return computerScore;
    }
    else {
        drawScore++;
        return drawScore
    }
}
function decideWinner() {
    if(playerScore > computerScore) {
        return `You Win! ${playerScore} to ${computerScore}`;
    }
    else if(playerScore < computerScore){
        return `You Lost! ${playerScore} to ${computerScore}`;
    }
    else {
        return `Draw! ${playerScore} to ${computerScore}`;
    }
}

console.log("===============");
// game();
console.log("===============");
