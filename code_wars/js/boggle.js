class Board {
  constructor(board, word) {
    this.board = board
    this.word = word
    this.tempIndex = {}
    this.currentIndexes = {}
    this.allIndexes = {}
    this.letters = {
      current: null,
      previous: null
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
  checkBoardForWord() {
    const firstLetterIndArr = this.findFirstLetters()
    // check for single char
    if (this.findFirstLetters().length && this.word.length === 1) return true

    console.log('first letter arr', firstLetterIndArr)
    // outer loop controls first letter
    for (let j = 0; j < firstLetterIndArr.length; j++) {
      // reset index cache on each run of first letter
      this.allIndexes = {}
      // set indexes to first letter
      this.indexesSetter(
        firstLetterIndArr[j]['rowIndex'],
        firstLetterIndArr[j]['colIndex']
      )
      this.tempIndexesSetter(
        firstLetterIndArr[j]['rowIndex'],
        firstLetterIndArr[j]['colIndex']
      )

      // track correct placements
      let numFound = 0
      const slicedWord = this.word.slice(1, this.word.length)
      // toggle to return true or false at loop end
      // loop over words and check them in order
      const letters = slicedWord.split('')
      // // loop over letter and check them in order
      for (let i = 0; i < letters.length; i++) {
        this.lettersSetter('', '', 'current', letters[i])
        console.log('Letter', letters[i])
        console.log('letters', this.letters)
        // console.log(this.tempIndex)
        let found = false

        for (let k = 0; k < this.directions.length; k++) {
          if (this.checkTempDirection(this.directions[k], letters[i])) {
            console.log('found')
            found = true
            // set perm indexes
            this.indexesSetter(this.tempIndex.rowIndex, this.tempIndex.colIndex)
            // break directons loop
            break
          }
        }
        if (!found) {
          console.log('not found')
          // - set temp index back to previous
          // - check from previous dir forward
          this.tempIndexesSetter(
            this.tempIndex.rowIndex,
            this.tempIndex.colIndex
          )
          this.lettersSetter(
            this.tempIndex.rowIndex,
            this.tempIndex.colIndex,
            'current',
            this.letters.previous.letter
          )
          i--
          console.log('here')
          continue
        }
      }
      return false
    }
  }
  // check for used indexes
    (rowIndex, colIndex) {
    const key = `${rowIndex}-${colIndex}`
    if (key in this.allIndexes) {
      console.log('KILL by indexes')
      return true
    }
    return false
  }
  // to index tracker
  addToAllIndexes(rowIndex, colIndex) {
    const key = `${rowIndex}-${colIndex}`
    this.allIndexes[key] = {
      rowIndex,
      colIndex
    }
    // console.log('all', this.allIndexes)
  }
  indexesSetter(rowIndex, colIndex) {
    this.addToAllIndexes(rowIndex, colIndex)
    this.currentIndexes = {
      rowIndex,
      colIndex
    }
  }
  tempIndexesSetter(rowIndex, colIndex) {
    this.tempIndex = {
      rowIndex,
      colIndex
    }
  }
  lettersSetter(rowIndex, colIndex, type, letter, direction) {
    this.letters[type] = {
      letter: letter,
      indexes: {
        rowIndex,
        colIndex
      },
      lastDir: direction
    }
  }
  // find all first letters - return arr of indexes
  findFirstLetters() {
    let firstLetterIndexes = []
    //   save first letter
    const firstLetter = this.word.slice(0, 1)
    //   shift first letter off
    //  this.word = this.word.slice(1, this.word.length)
    // push all instances first letter into arr
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i]
      // console.log('row', row)
      if (row.includes(firstLetter)) {
        const indexes = {
          rowIndex: i,
          colIndex: row.indexOf(firstLetter)
        }
        firstLetterIndexes.push(indexes)
      }
    }
    if (firstLetterIndexes.length) {
      return firstLetterIndexes
    } else {
      return false
    }
  }
  checkTempDirection(direction, letter) {
    let rowIndex = this.tempIndex.rowIndex
    let colIndex = this.tempIndex.colIndex
    switch (direction) {
      case 'checkBelow':
        rowIndex++
        break
      case 'checkBelowBackDiagnoal':
        rowIndex++
        colIndex--
        break
      case 'checkBack':
        colIndex--
        break
      case 'checkAboveBackDiagonal':
        rowIndex--
        colIndex--
        break
      case 'checkAbove':
        rowIndex--
        break
      case 'checkAboveFrontDiagonal':
        rowIndex--
        colIndex++
        break
      case 'checkFront':
        colIndex++
        break
      case 'checkBelowFrontDiagonal':
        rowIndex++
        colIndex++
        break
    }
    if (!this.board[rowIndex]) {
      return false
    } else if (
      this.board[rowIndex][colIndex] === letter &&
      !this.isKeyInAllIndexes(rowIndex, colIndex)
    ) {
      this.tempIndexesSetter(rowIndex, colIndex)
      this.lettersSetter(rowIndex, colIndex, 'previous', letter, direction)
      console.log(`${direction} shift temp to r ${rowIndex} and c ${colIndex}`)
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
  return b.checkBoardForWord()
}
console.log('return', checkWord(testBoard, 'BAILER'))

// - set a current letter state var with indexwa
// - check row for first letter
// - if there check all 8 directions for next letter
// - if found move state to next letter
