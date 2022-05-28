

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
      getGuess()
      this.prevGuesses.push(this.userGuess)
      render()
    } while (this.userGuess !== this.secretNum) 
  },
  
  
  
  
  
  getGuess: function() {
    parseInt(userGuess) = prompt(`Enter a guess between ${smallestNum} and ${biggestNum}. (Previous guesses are ${this.prevGuesses}`)
    while (this.userGuess !== this.secretNum) {
    if (this.userGuess > this.biggestNum) {
      prompt('Number too big!')
    } else if (this.userGuess < this.smallestNum) {
      prompt('Number too small!')
    } else if (this.userGuess > this.secretNum) {
      this.biggestNum = userGuess
    } else if (this.userGuess < this.secretNum) {
      this.smallestNum = userGuess
    } else {
      prompt(`Congrats! You guessed the number in [number of prevGuesses]!`)
    }
  }
},


  render: function() {
    if (this.userGuess > this.secretNum) {
        alert(`Your guess is too high, previous guesses ${this.prevGuesses}`)
      } else if (this.userGuess < this.secretNum) {
        alert(`Your guess is too low, previous guesses: ${this.prevGuesses}`)
      } else if (this.userGuess === this.secretNum) {
        alert(`Your guess is too low, previous guesses ${join(this.prevGuesses)}`)
      } else {
        alert(`Congrats!You guessed the number in [number of prevGuesses]!`)
  }
}
}



// if (this.userGuess > this.secretNum) {
//   alert(`Your guess is too high, previous guesses ${this.prevGuesses}`)
// } else if (this.userGuess < this.secretNum) {
//   alert(`Your guess is too low, previous guesses ${this.prevGuesses}`)
// } else if (this.userGuess === this.secretNum) {
//   alert(`Your guess is too low, previous guesses ${this.prevGuesses}`)
// } else {
//   alert('Congrats!')
// }


// game.prevGuesses = []


// pla: function() {

// }

// let guess
// guess = prompt(`hey ${numer}`)


// let guess = ''
// while (guess !== 'quit') {
//   guess = prompt(`Enter a guess between ${smallestNum} and ${biggestNum}.`)
//   if (guess < secretNum) {
//     let price = catalog[sku]
//     alert(`Your guess is too low, previous guesses ${prevGuesses}`)
//   } else if (guess > secretNum) {
//     alert(`Your guess is too high, previous guesses ${prevGuesses}`)
//   }
// }



// function getGuess() {
//   let guess = prompt(`Enter a guess between ${smallestNum} and ${biggestNum}.`)
// }

// let guess = ''
// while (guess !== )



// console.log(game)