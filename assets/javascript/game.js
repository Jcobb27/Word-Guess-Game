
//Make a word bank
var wordBank = ["chihuahua", "beagle", "dalmation", "dachshund", "bulldog", "bloodhound", "greyhound", "havanese", "maltese", "mastiff", "newfoundland", "otterhound", "papillon", "pekingese", "pointer", "pomeranian", "poodle", "rottweiler", "samoyed", "weimaraner", "whippet"];

//create wins variable, set to 0
var wins = 0;
//create tries variable, set to 12
var tries = 12;
//create string variable
var s;

//Make empty array to store user guesses
var userGuessArr = [];

//new game function
function newGame() {
    //Choose a random word
    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //Log random word as test
    console.log(randomWord);
    //reset
    document.getElementById("currentWord").innerHTML = "";
    //filling in dashes for length of random word
    for (var i = 0; i <= randomWord.length; i++) {
        userGuessArr[i] = "_";
    }
    s = userGuessArr.join(" ");
    //writing dashes to html
    document.getElementById("currentWord").innerHTML = s;
}






// // This function is run whenever the user presses a key.
// document.onkeyup = function (letter) {

//     //determines which key was pressed
//     var userGuess = event.key;

//     //store user guess in array
//     userGuessArr.push(userGuess);

//     //show userGuessArr in id="letters"
//     var letters = document.getElementById("letters");
//     document.querySelector("#letters").innerHTML = userGuessArr;



//     //Subtract from remainingTries and show in HTML
//     var remainingTries = (tries - 1);
//     var remT = document.getElementById("remainingTries");
//     document.querySelector("#remainingTries").innerHTML = remainingTries;
// }

