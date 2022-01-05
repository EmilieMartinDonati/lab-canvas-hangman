class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    console.log(this.secretWord, typeof this.secretWord);
  }

  createBoard() {
    ctx.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // let array = this.secretWord.split('');
    // let n = array.length;
    // for (let i = 0 ; i < n ; i ++) {
      // ctx.beginPath();
      // ctx.moveTo(100, 100);
      // ctx.lineTo(300, 100);
      // ctx.stroke();
    // }
    // array.forEach(function(elem, index) {
    //   ctx.beginPath();
    //   ctx.moveTo((100 + Number(index)), 700);
    //   ctx.lineTo((300 + Number(index)), 700);
    //   ctx.stroke();
    // })
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }

  writeCorrectLetter(index) {
    let array = this.secretWord.split('');
    if (!checkClickedLetters(index)) {
      ctx.fillText(index, 100, 10);
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
