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