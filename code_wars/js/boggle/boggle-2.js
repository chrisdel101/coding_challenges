class Board {
  constructor(board, word) {
    this.board = board
    this.word = word
    this.queue = []
    this.indexes = {
      rowIndex: 0,
      colIndex: 0
    }

    this.directions = [
      'checkBelow',
      'checkBelowBackDiagnoal',
      'checkBack',
      'checkAboveBackDiagonal',
      'checkAbove',
      'checkAboveFrontDiagonal',
      'checkFront',
      'checkBelowFrontDiagonal'
    ]
  }
  indexSetter(newIndexes) {
    this.indexes = newIndexes
  }
  loopLetters() {
    for (let i = 0; i < this.word.length; i++) {
      this.loopDirections(this.word[i])
    }
  }
  loopDirections(letter) {
    for (let i = 0; i < this.directions.length; i++) {
      this.checkDirection(this.directions[i], letter)
    }
  }
  checkDirection(direction, letter) {
    let tempIndexes = {}
    tempIndexes = { ...this.indexes }
    console.log(letter)
    switch (direction) {
      case 'checkBelow':
        tempIndexes.rowIndex++
        break
      case 'checkBelowBackDiagnoal':
        tempIndexes.rowIndex++
        tempIndexes.colIndex--
        break
      case 'checkBack':
        tempIndexes.colIndex--
        break
      case 'checkAboveBackDiagonal':
        tempIndexes.rowIndex--
        tempIndexes.colIndex--
        break
      case 'checkAbove':
        tempIndexes.rowIndex--
        break
      case 'checkAboveFrontDiagonal':
        tempIndexes.rowIndex--
        tempIndexes.colIndex++
        break
      case 'checkFront':
        tempIndexes.colIndex++
        break
      case 'checkBelowFrontDiagonal':
        tempIndexes.rowIndex++
        tempIndexes.colIndex++
        break
    }
    // if no row there break
    if (!this.board[tempIndexes.rowIndex]) {
      return false
      // if letter is there, move the real indexes
    } else if (
      this.board[tempIndexes.rowIndex][tempIndexes.colIndex] === letter
    ) {
      console.log('match', letter)
      //  - set real indexes
      this.indexSetter(tempIndexes)
      //  - push current letter and indexes into queue
      let tempObj = {
        letter: letter,
        indexes: tempIndexes
      }
      return true
    }
    return false
  }
}

// var testBoard = [
//   ['E', 'A', 'R', 'A'],
//   ['N', 'L', 'E', 'C'],
//   ['I', 'A', 'I', 'S'],
//   ['B', 'Y', 'O', 'R']
// ]
var testBoard = [
  ['E', 'A', 'R', 'A'],
  ['N', 'X', 'E', 'L'],
  ['I', 'A', 'I', 'S'],
  ['B', 'Y', 'O', 'R']
]
function checkWord(board, word) {
  const b = new Board(board, word)
  return b.loopLetters()
}
console.log('return', checkWord(testBoard, 'BAILER'))

// - find first letter
