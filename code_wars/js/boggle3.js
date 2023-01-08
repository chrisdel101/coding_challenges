function checkWord(board, word) {
  console.log('W', word);
  console.log('B', board);
  let boardCopy = JSON.parse(JSON.stringify(board));
  let i = 0;
  let rowSearchPoint = 0; // search current row forward this
  let currentSearchRow = 0; // row of starting letter
  let pivot = 0
  let coords = {
    row: 0,
    col: 0,
  };
  const dirMap = {
    1: 'ahead',
    2: 'behind',
    3: 'below',
    4: 'above',
    5: 'diagonal-above-right'
    6: 'diagonal-above-left'
    7: 'diagonal-below-right'
    8: 'diagonal-below-left'
  }
  while (i < word.length) {
    // find first letter
    if (i === 0) {
      //loop over row - checking for first letter
      for (let j = currentSearchRow; j <= boardCopy.length; j++) {
        if (j === boardCopy.length) {
          console.log('first letter not found');
          return false;
        }
        let find = word[i];
        let found = boardCopy[j].indexOf(word[i], rowSearchPoint);
        // check if letter is in row
        if (found !== -1) {
          console.log('set first', find);
          coords.row = j;
          coords.col = found;
          boardCopy[j][found] = undefined;
          rowSearchPoint = found
          pivot++
          break;
        } else {
          // increment row
          currentSearchRow++;
        }
      }
      // find pivot point
    } else if(i === pivot){
      let current = word[i];
      let dirs = []
      // console.log('current', current);
      // console.log('coords', coords);
      // console.log('boardCopy', boardCopy);
      let x = boardCopy[coords.row][coords.col - 1];
      //ahead
      if (
        boardCopy[coords.row] &&
        boardCopy[coords.row][coords.col + 1] === current
      ) {
        boardCopy[coords.row][coords.col + 1] = undefined;
        coords.col = coords.col + 1;
        console.log('ahead', current);
        dirs.push(1)
        //behind
      }  if (
        boardCopy[coords.row] &&
        boardCopy[coords.row][coords.col - 1] === current
      ) {
        boardCopy[coords.row][coords.col - 1] = undefined;
        coords.col = coords.col - 1;
        console.log('behind', current);
        dirs.push(2)
        //row below
      }  if (
        boardCopy[coords.row + 1] &&
        boardCopy[coords.row + 1][coords.col] === current
      ) {
        boardCopy[coords.row + 1][coords.col] = undefined;
        coords.row = coords.row + 1;
        console.log('above', current);
        //row above
      }  if (
        boardCopy[coords.row - 1] &&
        boardCopy[coords.row - 1][coords.col] === current
        dirs.push(3)
      ) {
        boardCopy[coords.row - 1][coords.col] = undefined;
        coords.row = coords.row - 1;
        console.log('below', current);
        dirs.push(4)
        // diagonal - above right
      }  if (
        boardCopy[coords.row - 1] &&
        boardCopy[coords.row - 1][coords.col + 1] === current
      ) {
        boardCopy[coords.row - 1][coords.col + 1] = undefined;
        coords.row = coords.row - 1;
        coords.col = coords.col + 1;
        console.log(' diagonal - above right', current);
        dirs.push(5)
      }
      // diagonal - above left
       if (
        boardCopy[coords.row - 1] &&
        boardCopy[coords.row - 1][coords.col - 1] === current
      ) {
        boardCopy[coords.row - 1][coords.col - 1] = undefined;
        coords.row = coords.row - 1;
        coords.col = coords.col - 1;
        console.log('diagonal - above left', current);
        dirs.push(6)
      }
      // diagonal - below right
       if (
        boardCopy[coords.row + 1] &&
        boardCopy[coords.row + 1][coords.col + 1] === current
      ) {
        boardCopy[coords.row + 1][coords.col + 1] = undefined;
        coords.row = coords.row + 1;
        coords.col = coords.col + 1;
        console.log('diagonal - below right', current);
        dirs.push(7)
      }
      // diagonal - below left
       if (
        boardCopy[coords.row + 1] &&
        boardCopy[coords.row + 1][coords.col - 1] === current
      ) {
        boardCopy[coords.row + 1][coords.col - 1] = undefined;
        coords.row = coords.row + 1;
        coords.col = coords.col - 1;
        console.log('diagonal - below left', current);
        dirs.push(8)
      }
      if(dirs.length === 0){
        console.log('pivot not found')
        // go back to start letter here
      }
    }

        // first instance of letter failed
        // search first letter again in same row
        if (rowSearchPoint < board[0].length - 1) {
          rowSearchPoint = (rowSearchPoint + 1) % board[0].length;
          // reset word loop
          i = 0;
          // reinstate original board
          boardCopy = JSON.parse(JSON.stringify(board));
          continue;
          // move to next row
        } else if (currentSearchRow < boardCopy.length - 1) {
          // search first letter - move to start of next row
          coords.col = 0;
          // coords.row + 1
          coords.row = currentSearchRow+ 1;
          currentSearchRow = coords.row
          rowSearchPoint = 0
          // reinstate original board
          boardCopy = JSON.parse(JSON.stringify(board));
          // reset word loop
          i = 0;
          console.log('failed current: retry');
          continue;
        } else {
          console.log('Not found: false', current, coords);
          return false;
        }
      }
    }
    i++;
  }
  return true;
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

// console.log(checkWord(testBoard1, 'EAR'));
// console.log(checkWord(testBoard1, 'EARS'));
// console.log(checkWord(testBoard1, 'RSCAREIOYBAILNEA'));
// console.log(checkWord(testBoard1, 'BAILER'));
// // console.log(checkWord(testBoard1, 'CEREAL'));
console.log(checkWord(testBoard2, 'ANIMAL'));
