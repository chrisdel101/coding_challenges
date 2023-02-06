function checkWord(board, word) {
  console.log('W', word);
  console.log('B', board);
  let boardCopy = JSON.parse(JSON.stringify(board));
  let i = 0;
  let currentSearchRow = 0; // row of starting letter
  let rowSearchPoint = 0; // place in current search row
  let pivot = 0
  
  // letter index
  let k = 0;
  // loop board rows
  for (let i = 0; i < board.length; i++) {
    // loop board cols
    for (let j = 0; j <= board[i].length; j++) {
      // find first letter
      if(word[k] === board[i][j]){
        // incerment to next letter
        k++
        clockWiseSearch(i, j, k, word, boardCopy, [])
      }
    }
  }
  TAMMY
  // ['T', 'A', 'M', 'D', 'A'],
  // ['A', 'A', 'I', 'N', 'N'],
  // ['M', 'M', 'L', 'C', 'E'],
  // ['I', 'A', 'U', 'L', 'G'],
  // ['A', 'M', 'I', 'N', 'A'],
  function Coord(i, j, value){
    this.i  = i
    this.j = j
    this.value = value
  }
  
  function clockWiseSearch(i, j, k, word, boardCopy, coords){
    console.log('word',word, k)
    // right 
    if(board[i] && board[i][j+1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(Coord(i, j, word[k]))
      clockWiseSearch(i, j+1, k+1, word, boardCopy, coords)
    }// right top diagonal
    else if(board[i-1] && board[i-1][j+1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(Coord(i, j, word[k]))
      clockWiseSearch(i-1, j+1, k+1, word, boardCopy, coords)
    }
    // top
    else if(board[i-1] && board[i-1][j] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(Coord(i, j, word[k]))
      clockWiseSearch(i-1, j, k+1, word, boardCopy, coords)
    }
    // left top diagonal
    else if(board[i-1] && board[i-1][j-1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(Coord(i, j, word[k]))
      clockWiseSearch(i-1, j-1, k+1, word, boardCopy, coords)
    }
      // behind
    else if(board[i] && board[i][j-1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(Coord(i, j, word[k]))
      clockWiseSearch(i, j-1, k+1, word, boardCopy, coords)
    }
    // left bottom diagonal
    else if(board[i+1] && board[i+1][j-1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(Coord(i, j, word[k]))
      clockWiseSearch(i+1, j, k+1, word, boardCopy, coords)
    }
    // below
    else if(board[i+1] && board[i+1][j] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(Coord(i, j, word[k]))
      clockWiseSearch(i+1, j, k+1, word, boardCopy, coords)
    }
    // right bottom diagonal
    else if(board[i+1] && board[i+1][j+1] === word[k]){
      boardCopy[i][j] = undefined
      coords.push(Coord(i, j, word[k]))
      clockWiseSearch(i+1, j+1, k+1, word, boardCopy, coords)
    } else {
      let prevCoord = coords.pop()
      // unwind coords
      if(prevCoord){
        // restore coord value
        boardCopy[prevCoord.i][prevCoord.j] = prevCoord.value
        clockWiseSearch(prevCoord.i, prevCoord.j, k-1, word, boardCopy, coords)

      }
      return
    }


  }
}
var testBoard1 = [
  ['E', 'A', 'R', 'A'],
  ['N', 'L', 'E', 'C'],
  ['I', 'A', 'I', 'S'],
  ['B', 'Y', 'O', 'R'],
];

const testBoard2 = [
  ['T', 'T', 'M', 'D', 'A'],
  ['G', 'Y', 'I', 'N', 'N'],
  ['P', 'A', 'L', 'C', 'E'],
  ['I', 'A', 'U', 'L', 'G'],
  ['A', 'M', 'I', 'N', 'A'],
];

console.log(checkWord(testBoard1, 'EAR'));
// console.log(checkWord(testBoard1, 'EARS'));
// console.log(checkWord(testBoard1, 'RSCAREIOYBAILNEA'));
// console.log(checkWord(testBoard1, 'BAILER'));
// // console.log(checkWord(testBoard1, 'CEREAL'));
// console.log(checkWord(testBoard2, 'ANIMA'));
