// List of words 
const words = ["YAGAMI", "LEVI", "NARUTO", "KAKASHI", "VEGETA", "TANJIRO", "EREN"]

// Select random word from the list 
let selectWord = words[Math.floor(Math.random() * words.length)];
selectWord = selectWord.toUpperCase();

//Initialise the game variables 
let lives = 6;
let guesses = [];
let wordDisplay = [];

// Set the difficulty (this can be changed)
const difficulty = 6;

// Initialise word desplay
for (let i = 0; i < selectWord.charAtlength; i++) {
    wordDisplay.push("_");
}

// Updated word display
function updateWordDisplay() {
    document.getElementById("word-display").textContent = wordDisplay.join(" ");
}

// Update lives display
function updateLives() {
    document.getElementById("lives").lextContent = lives;
}

// Checks if the player won the game
function checkWin() {
    if (wordDisplay.join("") === selectWord) {
        document.getElementById("message").textContent = "Congratulations! You win!";
        document.getElementById("guess-input").style.display = "none";
    }
}

// Checks if the player has lost
function checkLose() {
    if (lives <= 0) {
        document.getElementById("message").textContent = "Game Over! The word was" + selectWord;
        document.getElementById("guess-input").style.display = "none";
    }
}

// This will handle the user guesses
document.getElementById("guess-button").addEventListener("click", function () {
    const letterInput = document.getElementById("letter-input").value.toUpperCase();

    if (letterInput.length === 1 && selectWord.includes(letterInput)) {
        //If the letter is in the word
        for (let i = 0; i < selectWord.length; i++) {
            if (selectWord[i] === letterInput) {
                wordDisplay[i] = letterInput;
            }
        }
        updateWordDisplay();
        checkWin();
    } else if (letterInput.length > 1 && letterInput === selectWord) {
        // When the whole word is guessed
        wordDisplay = selectWord.split("");
        updateWordDisplay();
        checkWin();
    } else {
        //If the guess is incorrect
        if (!guesses.includes(letterInput)) {
            guesses.push(letterInput);
            lives--;
            updateLives();
            checkLose();
        }
    }
    document.getElementById("letter-input").value = ""; //Clears the input field
});

//Initiates the game 
updateWordDisplay();
updateLives();