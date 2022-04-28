function getRandomNumberInRange(rangeStart, rangeEnd) {
      return Math.floor((Math.random() * rangeEnd) + rangeStart);
}

function getPlayerMove(buttonID) {
      switch (buttonID) {
            case "rock":
                  return "1";
            case "paper":
                  return "2";
            case "scissors":
                  return "3";
            case "test":
                  return "4"
      }
}

function getComputerMove() {
      let computerMove = getRandomNumberInRange(1, 3);

      return computerMove.toString();
}

function getMoveCode(playerMove, computerMove) {
      return playerMove + computerMove;
}

/* 
Move permutations

Player : Computer = Outcome Code = Outcome
1 : 1 = 11 = Tie
1 : 2 = 12 = Computer Wins
1 : 3 = 13 = Player Wins
2 : 1 = 21 = Player Wins
2 : 2 = 22 = Tie
2 : 3 = 23 = Computer Wins
3 : 1 = 31 = Computer Wins
3 : 2 = 32 = Player Wins
3 : 3 = 33 = Tie


1 = Rock
2 = Paper
3 = Scissors
4 = Test button
      
*/

function getResults(moveCode) {
      let results = new Object();
      switch (moveCode) {
            case "11":
                  results = {
                        winner: "tie",
                        message: "You both picked rock. Tie match."
                  };
                  break;
            case "12":
                  results = {
                        winner: "computer",
                        message: "Paper beats rock. Computer wins."
                  };
                  break;
            case "13":
                  results = {
                        winner: "player",
                        message: "Rock beats scissors! You win!"
                  };
                  break;
            case "21":
                  results = {
                        winner: "player",
                        message: "Paper beats rock! You win!"
                  };
                  break;
            case "22":
                  results = {
                        winner: "tie",
                        message: "You both picked paper. Tie match."
                  };
                  break;
            case "23":
                  results = {
                        winner: "computer",
                        message: "Scissors beats paper. Computer wins."
                  };
                  break;
            case "31":
                  results = {
                        winner: "computer",
                        message: "Rock beats scissors. Computer wins."
                  };
                  break;
            case "32":
                  results = {
                        winner: "player",
                        message: "Scissors beat paper! You win!"
                  };
                  break;
            case "33":
                  results = {
                        winner: "tie",
                        message: "You both pick scissors. Tie match."
                  };
                  break;
            case "41":
            case "42":
            case "43":
                  results = {
                        winner: "tie",
                        message: "Uh? How did you click that button? Try clicking one of the buttons above."
                  };
                  break;
            default:
                  results = {
                        winner: "tie",
                        message: "Switch statement error"
                  }
                  break;
      }

      return results;
}


function updateMessage(message) {
      let messageOutput = document.getElementById("results-output");

      if (message === "reset") {
            messageOutput.innerText = "What will you choose? Rock, Paper, Scissors?"
      } else {
            messageOutput.innerText = `Round ${gameRound}: ${message}`;
      }
}

function updateScore(winner) {
      let computerScoreOutput = document.getElementById("computer-score-output");
      let finalComputerScoreOutput = document.querySelector(".computer-final-score-output");
      let playerScoreOutput = document.getElementById("player-score-output");
      let finalPlayerScoreOutput = document.querySelector(".player-final-score-output");

      let computerScore = computerScoreOutput.innerText;
      let playerScore = playerScoreOutput.innerText;

      switch (winner) {
            case "tie":
                  break;
            case "computer":
                  computerScore++;
                  computerScoreOutput.innerText = computerScore;
                  finalComputerScoreOutput.innerText = computerScore;
                  break;
            case "player":
                  playerScore++;
                  playerScoreOutput.innerText = playerScore;
                  finalPlayerScoreOutput.innerText = playerScore;
                  break;
            case "reset":
                  computerScore = 0;
                  computerScoreOutput.innerText = computerScore;
                  finalComputerScoreOutput.innerText = computerScore;
                  playerScore = 0
                  playerScoreOutput.innerText = playerScore;
                  finalPlayerScoreOutput.innerText = playerScore;
            default:
                  break;
      }
      isGameFinished(playerScore, computerScore);
}

function isGameFinished(playerScore, computerScore) {
      let winnerMessage = document.querySelector(".game-message");
      let winner = document.querySelector(".game-winner");
      let modal = document.querySelector(".modal");



      if (playerScore > computerScore && playerScore == 5) {
            // Player Wins
            winnerMessage.innerText = "Congratulations!"
            winner.innerText = "You Win!"
            modal.style.visibility="visible";
            document.querySelector(".modal-content").style.backgroundColor="hsl(144 90% 33%)";
      } else if (playerScore < computerScore && computerScore == 5) {
            // Computer Wins
            winnerMessage.innerText = "So ein pech!"
            winner.innerText = "Computer Wins ☹️";
            modal.style.visibility="visible";
            document.querySelector(".modal-content").style.backgroundColor="hsl(0 64% 43%)";
      }
}


// Keeps track of which round the game is on. Declared at global scope because it's used by in handleClick() and startGame()
let gameRound = 0

function startGame() {
      updateMessage("reset");
      updateScore("reset");
      gameRound = 0;

      let modal = document.querySelector(".modal");
      modal.style.visibility="hidden";
}


function handleClick(buttonID) {
      let results = getResults(getMoveCode(getPlayerMove(buttonID), getComputerMove()));
      gameRound++;
      updateMessage(results.message);
      updateScore(results.winner);
}






/* 

To-do
- Create startGame which resets game and runs on page load or when restart game button is pushed
- Modify existing functions to also keep track of which round it is
- When updating message, display round number
- Keep track of score, if one player reaches 5 end round and display modal showing round winner and option to restart game

*/