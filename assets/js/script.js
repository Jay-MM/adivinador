// selects elements from dom
  // starts button
const startButton = document.querySelector('.start-button');
  // word blanks div
const wordBlanks = document.querySelector('.word-blanks');	

const validChars = "abcdefghijklmnopqrstuvwxyz"

// defines an array of words
const words = [ "modulus", "boolean", "object", "variable","array", "python", "string", "interval", "localstorage", "function" ];
// word var
let word;
  // assigns an array to the variable guessedchars
let guessedChars = [];

// score var
// timer var


function handleKeyDown(e) {
  // validate key
  if (validChars.includes(e.key)) {
    // keep track of character pressed
      //whichever character is pressed, it is pushed into the guessedchars array 
    guessedChars.push(e.key)
    // rerender wordblanks text content
    renderChars();
  }
}

// resets word blanks, an "_" for each letter of the new word
  // takes random word and splits it into letters
function renderChars(){
  // var to hold new string
  let str = ""
  for (let i = 0; i < word.length; i++){
    // assigns the current index in the word to the var letter
    let letter = word[i]
    // if we guessed a character from the array
    if(guessedChars.includes(letter)) {
      // add character into our str
      str += letter ;
    } else {
      // take the current value of str and add "_"
      str += '_ '
    }
  }
  // set textContent of wordBLanks to be str and trim all extra whitespace
  wordBlanks.textContent = str.trim()
}

function startRound(){
// gets random word from words array 
  // uses the length of the words array and randomizes it,   stores in randomIndex variable
const randomIndex = Math.floor(Math.random() * words.length)
  // uses the random index in the words array to access a random item in array and assigns it to the global word variable
  word = (words[randomIndex])
// sets off timer 
  renderChars()
 }

// adds event listener for clicks to start button
startButton.addEventListener('click', startRound)
// adds event listener  for key presses 
document.addEventListener('keydown', handleKeyDown)

  