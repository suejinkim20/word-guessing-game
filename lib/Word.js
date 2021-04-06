const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = word.split("").map(char => new Letter(char))
    console.log(this.letters)
  }

  guessLetter(){

  }

  guessedCorrectly(){

  }

  
}

module.exports = Word;
