class Hangman {
  constructor(words) {
    this.words = [...words];
    this.secretWord = `${this.words[Math.floor(Math.random()* this.words.length)]}`
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
   return this.words[Math.floor(Math.random()* this.words.length)];
  }

  checkIfLetter(keyCode) {
    let range = [];
    for (let i = 65 ; i <= 90 ; i ++) {
      range.push(i);
    }
     if (range.includes(keyCode)) {
        return true;
      }
      else {
        return false;
      }
  }

  checkClickedLetters(letter) {
    if (!this.letters.includes(letter)) {
      return true;;
    }
    else {
      return false;
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    }
    else {
     return true;
    }
  }

  checkWinner() {
    return (this.secretWord.trim().split('').sort().join('') === this.guessedLetters.trim().split('').sort().join(''));
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    console.log("buttonClicked");
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
