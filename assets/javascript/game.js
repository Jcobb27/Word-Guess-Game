
//Make a word bank
var wordBank = ["chihuahua", "beagle", "dalmation", "dachshund", "bulldog", "bloodhound", "greyhound", "havanese", "maltese", "mastiff", "newfoundland", "otterhound", "papillon", "pekingese", "pointer", "pomeranian", "poodle", "rottweiler", "samoyed", "weimaraner", "whippet"];

//create wins variable, set to 0
var wins = 0;
//create tries variable, set to 12
var tries = 12;
//create global variables
var s;
var randomWord;
var count = 0;
var lettersGuessed = "";

//Make empty array to store user guesses
var userGuessArr = [];

//new game function
function newGame() {
    //Choose a random word
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //reset variables
    userGuessArr = [];
    count = 0;
    lettersGuessed = "";
    document.getElementById("letters").innerHTML = lettersGuessed;
    tries = 12;
    document.getElementById("remainingTries").innerHTML = tries;
    //Log random word as test
    console.log(randomWord);
    //reset
    document.getElementById("currentWord").innerHTML = "";
    //filling in dashes for length of random word
    for (var i = 0; i < randomWord.length; i++) {
        userGuessArr[i] = "_";
    }
    s = userGuessArr.join(" ");
    //writing dashes to html
    document.getElementById("currentWord").innerHTML = s;
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    //determines which key was pressed
    var userGuess = event.key;
    //Concats letters guessed and writes them in html
    lettersGuessed = lettersGuessed.concat(" " + userGuess);
    document.getElementById("letters").innerHTML = lettersGuessed;

    //for loop checks if user guess = a letter in the word
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === userGuess) {
            userGuessArr[i] = userGuess;
            //increase count for win determination
            count++;
            document.getElementById("currentWord").innerHTML = userGuessArr.join(" ");
        }
    }

    //decrease count for number of tries remaining
    tries--;
    document.getElementById("remainingTries").innerHTML = tries;

    //check for win
    if (count == randomWord.length) {
        wins++;
        document.getElementById("showWins").innerHTML = wins;
        newGame();
    }
    //reset game if remainining tries = 0
    if (tries == 0) {
        newGame();
    }
}



