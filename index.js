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
        keepCount();
        console.log(roundResult);
    }
    else if(/rock/i .test(playerSelection) && computerSelection == "paper")
    {
        roundResult = "You Lose! Paper beats Rock!";
        keepCount();
        console.log(roundResult);
    }
    else if(/rock/i .test(playerSelection) && computerSelection == "scissor")
    {
        roundResult = "You Win! Rock beats Scissor!";
        keepCount();
        console.log(roundResult);
    }
    else if(/paper/i.test(playerSelection) && computerSelection == "rock")
    {
        roundResult = "You Win! Paper beats Rock!";
        keepCount();
        console.log(roundResult);
    }
    else if(/paper/i.test(playerSelection) && computerSelection == "paper")
    {
        roundResult = "Draw!";
        keepCount();
        console.log(roundResult);
    }
    else if(/paper/i.test(playerSelection) && computerSelection == "scissor")
    {
        roundResult = "You Lose! Scissor beats Paper!";
        keepCount();
        console.log(roundResult);
    }
    else if(/scissor/i.test(playerSelection) && computerSelection == "rock")
    {
        roundResult = "You Lose! Rock beats Scissor!";
        keepCount();
        console.log(roundResult);
    }
    else if(/scissor/i.test(playerSelection) && computerSelection == "paper")
    {
        roundResult = "You Win! Scissor beats Paper!";
        keepCount();
        console.log(roundResult);
    }
    else if(/scissor/i.test(playerSelection) && computerSelection == "scissor")
    {
        roundResult = "Draw!";
        keepCount();
        console.log(roundResult);
    }
    const resultText = document.createElement("p");
    resultText.textContent = roundResult;
    const resultContainer = document.querySelector(".result");
    resultContainer.appendChild(resultText);

    updateScore();

    if(gameOver()) {
        const finalDisplayText = document.createElement("p");
        finalDisplayText.textContent = decideWinner();
        resultContainer.appendChild(finalDisplayText);

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
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
function updateScore() {
    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("compScore");
    const drawScoreDisplay = document.getElementById("drawScore");
    playerScoreDisplay.textContent = `Player score is: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score is: ${computerScore}`;
    drawScoreDisplay.textContent = `Draw score is: ${drawScore}`;

}
console.log("===============");
console.log("===============");

//UI
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
function gameOver() {
    return playerScore === 5 || computerScore === 5;
}

rockBtn.addEventListener('click', () => playRound('ROCK', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('PAPER', getComputerChoice()));
scissorBtn.addEventListener('click', () => playRound('SCISSOR', getComputerChoice()));

