# The Odin Project Foundations Course: Rock Paper Scissors
A small game of rock paper scissors which can be played in the browser and is implemented using JavaScript.

## How it works
First things first, each move has a number value assigned to it which will be used later.  
1 = Rock  
2 = Paper  
3 = Scissors

1. When the user clicks one of the options it passes the button's #id to getPlayerMove() which converts it to it's move number. (Note: I'm writing all this after and I now realize I could have just assigned the button #ids as their move number to skip this step)  

2. A function generates a random number between 1-3 which determines the computer's move.  

3. Each move number get's converted to a string and is then concatenated to generate a moveCode that is later used to determine the winner.  
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.g. Player move 	(1 	|| 2 || 3) + Computer move (2 || 3 || 1) = 12 || 23 || 31  

4. The moveCode is passed to getResults() and is checked in a switch statement which returns a results object with the match winner (results.winner) and message (results.message) to be displayed.

5. The message (results.message) is passed to updateMessage() which updates the HTML on the page.

6. The winner (results.winner) is passed to updateScore() which gets the current score on the page, adds 1 to the winner, and updates the score on the page.