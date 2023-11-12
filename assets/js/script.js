// selects elements from dom
  // starts button
const startButton = document.querySelector('.start-button');
  // word blanks div
const wordBlanks = document.querySelector('.word-blanks');	

// defines an array of words
const words = [ "modulus", "boolean", "object", "variable","array", "python", "string", "interval", "localstorage", "function" ];

let word;

// score variable
// timer variable

// takes random word and splits it into letters
function renderChars(){
  console.log(word)
}

function startRound(){
// gets random word from words array 
  // uses the length of the words array and randomizes it,   stores in randomIndex variable
const randomIndex = Math.floor(Math.random() * words.length)
  // uses the random index in the words array to access a random item in array and assigns it to the global word variable
  word = (words[randomIndex])
// resets word blanks, an "_" for each letter of the new word
// sets off timer 
  renderChars()
 }
  // adds event listener for clicks to start button
  startButton.addEventListener('click', startRound)

  