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

function getResults(playerMove, computerMove) {

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


      let result = getPlayerMove(buttonID);
      console.log(playerMove);
      console.log(typeof playerMove);
      
      console.log(computerMove);
      console.log(typeof computerMove);

      console.log(moveCode);
      console.log(typeof moveCode);
}


