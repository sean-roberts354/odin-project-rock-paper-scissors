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
      messageOutput.innerText = message;
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
            default:
                  break;
      }
}

function handleClick(buttonID) {
      let results = getResults(getMoveCode(getPlayerMove(buttonID), getComputerMove()));
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