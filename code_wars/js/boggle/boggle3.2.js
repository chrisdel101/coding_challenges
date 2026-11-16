function checkWord(board, word) {
  console.log('W', word);
  console.log('B', board);
  let boardCopy = JSON.parse(JSON.stringify(board));
  let i = 0;
  let currentSearchRow = 0; // row of starting letter
  let rowSearchPoint = 0; // place in current search row
  let found = false
  
  // letter index
  let k = 0;
  // loop board rows
  for (let i = 0; i < board.length; i++) {
    // loop board cols
    for (let j = 0; j <= board[i].length; j++) {
      let firstLetter = word[k]
      // find first letter
      if(firstLetter === board[i][j]){
        // incerment to next letter
        k++
        clockWiseSearch(i, j, k, word, boardCopy, [])
      }
      if(found){
        return true
      }
    }
  }
  // TAMMY
  // ['T', 'A', 'M', 'D', 'A'],
  // ['A', 'A', 'I', 'N', 'N'],
  // ['M', 'M', 'L', 'C', 'E'],
  // ['I', 'A', 'U', 'L', 'G'],
  // ['A', 'M', 'I', 'N', 'A'],
  function clockWiseSearch(i, j, k, word, boardCopy, coords){
    if(k === word.length){
      found = true
      return
    }
    let current = word[k]
    console.log('word',word, k)
    // right 
    if(boardCopy[i] && boardCopy[i][j+1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(new Coord(i, j, word[k]))
      clockWiseSearch(i, j+1, k+1, word, boardCopy, coords)
    }// right top diagonal
    else if(boardCopy[i-1] && boardCopy[i-1][j+1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(Coord(i, j, word[k]))
      clockWiseSearch(i-1, j+1, k+1, word, boardCopy, coords)
    }
    // top
    else if(boardCopy[i-1] && boardCopy[i-1][j] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(newCoord(i, j, word[k]))
      clockWiseSearch(i-1, j, k+1, word, boardCopy, coords)
    }
    // left top diagonal
    else if(boardCopy[i-1] && boardCopy[i-1][j-1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(newCoord(i, j, word[k]))
      clockWiseSearch(i-1, j-1, k+1, word, boardCopy, coords)
    }
      // behind
    else if(boardCopy[i] && boardCopy[i][j-1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(new Coord(i, j, word[k]))
      clockWiseSearch(i, j-1, k+1, word, boardCopy, coords)
    }
    // left bottom diagonal
    else if(boardCopy[i+1] && boardCopy[i+1][j-1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(new Coord(i, j, word[k]))
      clockWiseSearch(i+1, j, k+1, word, boardCopy, coords)
    }
    // below
    else if(boardCopy[i+1] && boardCopy[i+1][j] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(new Coord(i, j, word[k]))
      clockWiseSearch(i+1, j, k+1, word, boardCopy, coords)
    }
    // right bottom diagonal
    else if(boardCopy[i+1] && boardCopy[i+1][j+1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(new Coord(i, j, word[k]))
      clockWiseSearch(i+1, j+1, k+1, word, boardCopy, coords)
    } else {
      let prevCoord = coords.slice(-1)
      if(prevCoord){
        // means at least one dir didn't work - set it to undefined
        boardCopy[i][j] = undefined
        //  unwind last coords
        for (let m = coords.length-1; m > 0; m++) {
          let {i, j , value} = coords[m]
          boardCopy[i][j] = value
          clockWiseSearch(i, j, k-1, word, boardCopy, coords)
          
        }
      } else {
        console.log('not found')
      }
    }
  }
}
function Coord(i, j, value){
  this.i  = i
  this.j = j
  this.value = value
  return this
}
var testBoard1 = [
  ['S', 'A', 'R', 'A'],
  ['A', 'A', 'E', 'C'],
  ['R', 'A', 'R', 'S'],
  ['B', 'Y', 'O', 'S'],
];

const testBoard2 = [
  ['T', 'T', 'M', 'D', 'A'],
  ['G', 'Y', 'I', 'N', 'N'],
  ['P', 'A', 'L', 'C', 'E'],
  ['I', 'A', 'U', 'L', 'G'],
  ['A', 'M', 'I', 'N', 'A'],
];

console.log(checkWord(testBoard1, 'SARS'));
// console.log(checkWord(testBoard1, 'EARS'));
// console.log(checkWord(testBoard1, 'RSCAREIOYBAILNEA'));
// console.log(checkWord(testBoard1, 'BAILER'));
// // console.log(checkWord(testBoard1, 'CEREAL'));
// console.log(checkWord(testBoard2, 'ANIMA'));
