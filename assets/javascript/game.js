
// initialize variables
var wins = 0;
var losses = 0;

var letters = ["a", "b", "c", "d", "e", "f", "g",
"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];

var guessed =[];
var numGuesses = 10;
var stat = "";

// choose a random letter for the computer
var computerLetter = letters[Math.floor(Math.random() * letters.length)];

// When a key is pressed
document.onkeyup = function(event){

	// Only register if the key pressed is a letter 
	//(and not a number or any other key)
	if ((letters.indexOf(event.key)) != -1){
		
		// store the pressed key in the variable input
		var input = event.key;

		numGuesses--;

		// after the first guess in a new game, 
		// remove the win/loss message from the previous game
		if (numGuesses==9){
			updateStat("");
		}
		

		// append the pressed key to the guessed array and display
		guessed.push(input);
		updateGuesses();

		// if player guessed correctly
		if (input == computerLetter){
			wins++;
			updateWins();
			stat = "won";
			//reset
			resetGame();
		}

		else{
			updateGuessesLeft();

			// if they run out of guesses, they lose
			if (numGuesses == 0){
				//output you lose
				losses++;
				updateLosses();
				resetGame();
			}
		}

} // close if ((letters.indexOf(event.key) != -1)

} //close onkeyup


// functions
function updateWins(){
	var winHeader = document.getElementById("numWins");
	winHeader.textContent = wins;
	updateStat("won");
}

function updateLosses(){
	var lossHeader = document.getElementById("numLosses");
	lossHeader.textContent = losses;
	// console.log("Losses: " + losses);
	updateStat("lost");
}

function updateGuessesLeft(){
	var guessHeader = document.getElementById("guessesLeft");
	guessHeader.textContent = numGuesses;
}

function updateGuesses(){

	var lettersGuessedHeader = document.getElementById("guessedLetters");
	lettersGuessedHeader.textContent = guessed;
}

// message displaying if you won/lost and what the letter was
function updateStat(status){

	if (status == ""){
		var endMessageHeader = document.getElementById("gameEndMessage");
		endMessageHeader.textContent = ("");
	}
	else{
		var endMessageHeader = document.getElementById("gameEndMessage");
		endMessageHeader.textContent = ("You " + status + "! The letter was " +
			computerLetter + ". Guess what letter I am thinking of now...")
	}
}

function resetGame(){
	// reset the number of guesses left
	numGuesses = 10;

	//reset display of the letters guessed so far
	guessed = [];
	// randomly choose a new letter for the computer
	computerLetter = letters[Math.floor(Math.random() * letters.length)];
	console.log("Computer chose: " + computerLetter);

	// endMessageHeader.textContent = (""); 

}



