

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
  },
  getGuess: function() {
    userGuess = prompt(`Enter a guess between ${smallestNum} and ${biggestNum}.}`)
    if (this.userGuess > this.secretNum) {

    }
  }
  
  
}



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



console.log(game)