class Letter {
  constructor(letter){
    this.letter = letter;
    this.visible = !/[a-z1-9]/i.test(letter);

  }

  toString(){
    if (this.visible) {
        return this.letter
    } else {
        return "_"
    }
  }

  guess(guessLetter) {
    if (guessLetter.toLowerCase() === this.letter.toLowerCase()) {
        this.visible = true
        return true
    } else {
        return false
    }
  }

  getSolution(guessLetter){
    return this.letter
  }
}

module.exports = Letter;
