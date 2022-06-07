class Game {

    list = ["rock", "paper", "scissors"];

    randomNum() {
        const rand = Math.floor(Math.random() * 3);
        return this.list[rand];
    }

    evalWinner(playerChosen, computerChosen) {
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

    increment(score, incrementValue = 1, reset = false) {
        let scoreInt = parseInt(score.textContent);
        if (reset) {
            score.textContent = 0;
        } else {
            score.textContent = scoreInt + incrementValue;
        }
    }

    evalResult() {
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
            this.increment(computerScore, 0, true);
            this.increment(playerScore, 0, true);
            this.increment(roundNum, 0, true);
        }
    }

    evalRound(playerChosen) {
        computerChosen = this.randomNum();
        const winner = this.evalWinner(playerChosen, computerChosen);
        result.textContent = `You chose ${playerChosen} and the computer chose ${computerChosen}, and the winner is ${winner}`;
        this.increment(roundNum);
        if (winner == "computer") {
            this.increment(computerScore);
        } else if (winner == "player") {
            this.increment(playerScore);
        } else {
            this.increment(computerScore);
            this.increment(playerScore);
        }
        this.evalResult();
    }
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

 
const newGame = new Game();

rockBtn.addEventListener('click', () => {
    newGame.evalRound("rock");
});

paperBtn.addEventListener('click', () => {
    newGame.evalRound("paper");
})

scissorsBtn.addEventListener('click', () => {
    newGame.evalRound("scissors");
});
