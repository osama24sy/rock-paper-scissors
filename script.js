const list = ["rock", "paper", "scissors"];

function randomNum() {
    const rand = Math.floor(Math.random() * 3);
    return list[rand];
}

// Unused function from the console version of the game
function cleanPrompt(playerChosen) {
    if (!(typeof playerChosen === 'string' | playerChosen instanceof String)) {
        throw `Invalid Type: prompted input type is ${typeof playerChosen} expected String.`;
    }
    playerChosen = playerChosen.toLowerCase();
    let great = false;
    for (let i = 0; i < 3; i++) {
        if (playerChosen === list[i]) {
            great = true;
        }
    }
    if (great) {
        return playerChosen;
    } else {
        throw `Invalid input: prompted ${playerChosen} expected one of the valid inputs (rock, paper, scissors)`;
    }
}

function evalWinner(playerChosen, computerChosen) {
    if (playerChosen === computerChosen) {
        return 'tie';
    } else if (playerChosen === 'rock') {
        if (computerChosen === 'paper') {
            return 'computer';
        }
    } else if (playerChosen === 'paper') {
        if (computerChosen === 'scissors') {
            return 'computer';
        }
    } else if (playerChosen === 'scissors') {
        if (computerChosen === 'rock') {
            return 'computer';
        }
    }
    return 'player';
}

// let wantToPlay = prompt("Press (1) to play: ");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const result = document.querySelector("#result");
const roundNum = document.querySelector("#roundNum");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
let computerChosen = "";

function increment(score, incrementValue = 1, reset = false) {
    let scoreInt = parseInt(score.textContent);
    if (reset) {
        score.textContent = 0;
    } else {
        score.textContent = scoreInt + incrementValue;
    }
}

function evalResult() {
    const playerScoreText = playerScore.textContent;
    const computerScoreText = computerScore.textContent;
    if (playerScoreText == 5 && computerScoreText == 5) {
        result.textContent = "The result is  a tie";
    } else if (playerScoreText == 5) {
        result.textContent = "You Won, Congrats!";
    } else if (computerScoreText == 5) {
        result.textContent = "Oops, You Lost";
    }
    if (playerScoreText == 5 | computerScoreText == 5) {
        increment(computerScore, 0, true);
        increment(playerScore, 0, true);
        increment(roundNum, 0, true);
    }
}

function evalRound(playerChosen) {
    computerChosen = randomNum();
    const winner = evalWinner(playerChosen, computerChosen);
    result.textContent = `You chose ${playerChosen} and the computer chose ${computerChosen}, and the winner is ${winner}`;
    increment(roundNum);
    if (winner == "computer") {
        increment(computerScore);
    } else if (winner == "player") {
        increment(playerScore);
    } else {
        increment(computerScore);
        increment(playerScore);
    }
    evalResult();
}

rockBtn.addEventListener('click', () => {
    evalRound("rock");
});

paperBtn.addEventListener('click', () => {
    evalRound("paper");
})

scissorsBtn.addEventListener('click', () => {
    evalRound("scissors");
});
