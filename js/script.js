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
      /* 
      1 = Rock
      2 = Paper
      3 = Scissors
      4 = Test button
      */

      let computerMove = getRandomNumberInRange(1, 3);

      return computerMove.toString();
}

function getMoveCode(playerMove, computerMove) {
      return playerMove + computerMove;
}

function getResults(moveCode) {
      let results = new Object();
      switch (moveCode) {
            case "11":
                  results = {
                        moveCode: "11",
                        message: "You both picked rock. Tie match."
                  };
                  break;
            case "12":
                  results = {
                        moveCode: "12",
                        message: "Paper beats rock. Computer wins."
                  };
                  break;
            case "13":
                  results = {
                        moveCode: "13",
                        message: "Rock beats scissors! You win!"
                  };
                  break;
            case "21":
                  results = {
                        moveCode: "21",
                        message: "Paper beats rock! You win!"
                  };
                  break;
            case "22":
                  results = {
                        moveCode: "22",
                        message: "You both picked paper. Tie match."
                  };
                  break;
            case "23":
                  results = {
                        moveCode: "23",
                        message: "Scissors beats paper. Computer wins."
                  };
                  break;
            case "31":
                  results = {
                        moveCode: "31",
                        message: "Rock beats scissors. Computer wins."
                  };
                  break;
            case "32":
                  results = {
                        moveCode: "32",
                        message: "Scissors beat paper! You win!"
                  };
                  break;
            case "33":
                  results = {
                        moveCode: "33",
                        message: "You both pick scissors. Tie match."
                  };
                  break;
            case "41":
            case "42":
            case "43":
                  results = {
                        moveCode: "404",
                        message: "Uh? How did you click that button? Try clicking one of the buttons above."
                  };
                  break;
            default:
                  results = {
                        moveCode: "404",
                        message: "Switch statement error"
                  }
                  break;
      }

      return results;
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
*/


/* 
let randomNumber = Math.floor((Math.random() * rangeEnd) + rangeStart);
      randomNumber = randomNumber.toString();
      return randomNumber;
 */


function handleClick(buttonID) {
      
}







function test(buttonID) {
      console.log('Works');

      let playerMove = getPlayerMove(buttonID);
      let computerMove = getComputerMove();
      let moveCode = getMoveCode(playerMove, computerMove);
      let results = getResults(moveCode);


      console.log(playerMove);
      console.log(typeof playerMove);
      
      console.log(computerMove);
      console.log(typeof computerMove);

      console.log(moveCode);
      console.log(typeof moveCode);

      console.log(results);
      console.log(typeof results);


}


