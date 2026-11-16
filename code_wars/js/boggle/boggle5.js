function checkWord(board, word) {
  if(!word) return false
  let wordArr = word.split('')
  const pathStack = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // check for first letter match
      if(wordArr[0] === board[i][j]){
        pathStack.unshift(new BoggleNode([i,j], matchCellsToLetter({ i, j, letterToMatch: wordArr[1], board })))
        wordArr.shift()
        // find paths for all other nodes
        while(!!(wordArr.length && pathStack.length) ){
          const [x,y] = pathStack[0]?.neighbours?.[0] ?? []
          const currentLetter = board[pathStack[0].coords[0]]?.[pathStack[0].coords[1]]
          if(board[x]?.[y] === wordArr[0]){
            pathStack[0]?.neighbours?.shift()
            pathStack.unshift(
              new BoggleNode([x,y], 
              excludePrevCellMatches({ 
                cellsToExclude: pathStack.map(node => node.coords),
                matchedCellsToLetter: matchCellsToLetter({ i: x, j: y, letterToMatch: wordArr[1], board })
              }))
            )
            wordArr.shift()
          } else {
            wordArr.unshift(currentLetter)
            pathStack.shift()
          }
        }
      }
      
    }
  }
  return !wordArr?.length ? true: false  
}
class BoggleNode {
  coords
  neighbours
  constructor(coords, neighbours){
    this.coords = coords
    this.neighbours = neighbours
  }
}
// exclude cells - ones already in stack
function excludePrevCellMatches({ cellsToExclude, matchedCellsToLetter }) { 
  const matches = matchedCellsToLetter.filter(([x, y]) => {
    return !cellsToExclude.some(cell => `${cell}` === `${[x, y]}`)
  })
  return matches
}
// match any cell w letter - clockwise from bottom right
function matchCellsToLetter({i, j, letterToMatch, board}) {
  const clockwiseCells = getClockwiseCellCoords(i,j)
  const matches2DArr = clockwiseCells.filter(([x, y]) => {
    return board[x]?.[y] === letterToMatch
  })
  return matches2DArr
}
// clockwise from bottom right
function getClockwiseCellCoords(i, j) {
  return [
    [i + 1, j + 1], //bottom right
    [i + 1, j],
    [i + 1, j - 1],
    [i, j - 1],
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j + 1],
  ]
}

var tammy = [
  ['T', 'A', 'M', 'D', 'A'],
  ['A', 'A', 'I', 'N', 'N'],
  ['M', 'M', 'L', 'C', 'E'],
  ['I', 'A', 'U', 'L', 'G'],
  ['A', 'M', 'I', 'N', 'A'],
]
var testBoard1 = [
  ['S', 'A', 'R', 'A'],
  ['A', 'A', 'E', 'C'],
  ['R', 'A', 'R', 'S'],
  ['B', 'Y', 'O', 'S'],
]

const testBoard2 = [
  ['T', 'T', 'M', 'D', 'A'],
  ['G', 'Y', 'I', 'N', 'N'],
  ['P', 'A', 'L', 'C', 'E'],
  ['I', 'A', 'U', 'L', 'G'],
  ['A', 'M', 'I', 'N', 'A'],
]
var testBoard3 = [
  ['E', 'A', 'R', 'A'],
  ['N', 'L', 'E', 'C'],
  ['I', 'A', 'I', 'S'],
  ['B', 'Y', 'O', 'R'],
]
var testBoard4 = [
  ['N', 'B', 'R', 'A'],
  ['C', 'R', 'P', 'A'],
  ['L', 'A', 'A', 'P'],
  ['S', 'O', 'A', 'A'],
]
var testBoard5 = [
  ['B', 'T', 'T', 'T'],
  ['L', 'M', 'N', 'X'],
  ['Y', 'T', 'T', 'V'],
]

// console.log(checkWord(testBoard2, 'ECLINCL'))
// console.log(checkWord(testBoard3, 'BAILER') === true)
console.log(checkWord(testBoard3, 'EAR') === false);
// console.log(checkWord(testBoard3, 'RSCAREIOYBAILNEA') === true);
// console.log(checkWord(testBoard3, 'BAILER'));
// console.log(checkWord(testBoard3, 'CEREAL'));
// console.log(checkWord(testBoard4, 'PARAPARAS'))
// console.log(checkWord(testBoard5, 'VNTTB'))
// console.log(checkWord(testBoard3, 'CARS'))
