
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  userGuess: null,
  prevGuesses: [],
  
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      game.getGuess()
      this.prevGuesses.push(this.userGuess)
      game.render()
    } while (this.userGuess !== this.secretNum)
    return this.secretNum
  },
  
  getGuess: function() {
    (this.userGuess) = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}. (Previous guesses are ${this.prevGuesses})`)
    // while (this.userGuess !== this.secretNum) {
    if (this.userGuess > this.biggestNum) {
      prompt('Number too big!')
    } else if (this.userGuess < this.smallestNum) {
      prompt('Number too small!')
    } else if (this.userGuess > this.secretNum) {
      this.biggestNum = this.userGuess
    } else if (this.userGuess < this.secretNum) {
      this.smallestNum = this.userGuess
    } else {
      prompt(`Congrats! You guessed the number in ${this.prevGuesses.length}!`)
    // }
  }
},

  render: function() {
    if (this.userGuess > this.secretNum) {
        alert(`Your guess is too high, previous guesses ${this.prevGuesses}`)
      } else if (this.userGuess < this.secretNum) {
        alert(`Your guess is too low, previous guesses: ${this.prevGuesses}`)
      } else if (this.userGuess === this.secretNum) {
        alert(`Your guess is too low, previous guesses ${(this.prevGuesses)}`)
      } else {
        alert(`Congrats! You guessed the number in ${array.length.prevGuesses}!`)
  }
}
}