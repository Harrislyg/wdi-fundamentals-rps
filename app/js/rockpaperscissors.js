////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove === computerMove) {
        winner = 'tie';
    }
    else if(playerMove == "rock") {
        if(computerMove == "paper") {
            winner = 'computer';
        }
        else {
            winner = 'player';
        }
    }
    else if(playerMove == "paper") {
        if(computerMove == "scissors") {
            winner = 'computer';
        }
        else {
            winner = 'player';
        }
    }
    else {
        if(computerMove == "rock") {
            winner = 'computer';
        }
        else {
            winner = 'player';
        };
    };


    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins <= 4 && computerWins <= 4) {
        getPlayerMove();
        getComputerMove();
        if (getWinner == 'player') {
            playerWins += 1;
        }
        else if(getWinner == 'computer') {
            computerWins += 1;
        }
        else if(getWinner == 'tie') {
            console.log("It is a draw");
        };

        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }

    if (playerWins == 5) {
        console.log("Player Wins!");
    }
    else if (computerWins == 5) {
        console.log("Computer Wins!");
    };

    return [playerWins, computerWins];
}

playToFive();

