const list = ["rock", "paper", "scissors"];

function randomNum() {
    const rand = Math.floor(Math.random() * 3);
    return list[rand];
}

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

let wantToPlay = prompt("Press (1) to play: ");

if (wantToPlay == 1) {
    let scoreBoard = {
        'computer': 0,
        'player': 0,
        'tie': 0 
    };
    for (let i = 1; i <= 5; i++) {
        let computerChosen = randomNum();
        let playerChosen = prompt("Choose 'rock, paper, or scissors': ");
        try {
            playerChosen = cleanPrompt(playerChosen);
        } catch (error) {
            console.error(error);
            continue;
        }
        let winner = evalWinner(playerChosen, computerChosen);
        scoreBoard[winner]++;
        if (winner != 'tie') {
            console.log(
                `You chose ${playerChosen} \nComputer chose ${computerChosen} \nThe winner is ${winner}`
            );    
        } else {
            console.log('The result is tie');
        }
    }
    if (scoreBoard['computer'] > scoreBoard['player']) {
        console.log(
            `The final result is ${scoreBoard['computer']} - ${scoreBoard['player']} \nYou Lost!`
        );
    } else if (scoreBoard['computer'] < scoreBoard['player']) {
        console.log(
            `The final result is ${scoreBoard['computer']} - ${scoreBoard['player']} \nYou Won!`
        );
    } else {
        console.log(
            `The final result is ${scoreBoard['computer']} - ${scoreBoard['player']} \nIt is a tie!`
        );
    }
}

