function checkWord(board, word) {
  console.log('W', word);
  console.log('B', board);
  let boardCopy = JSON.parse(JSON.stringify(board));
  let i = 0;
  let rowIndexPoint = 0; // search current row forward this
  let currentSearchRow = 0; // row of starting letter
  let coords = {
    row: 0,
    col: 0,
  };
  while (i < word.length) {
    // find an of first letter
    if (i === 0) {
      //loop over row - checking for first letter
      for (let j = currentSearchRow; j <= boardCopy.length; j++) {
        if (j === boardCopy.length) {
          console.log('first letter not found');
          return false;
        }
        let find = word[i];
        let found = boardCopy[j].indexOf(word[i], rowIndexPoint);
        // check if letter is in row
        if (found !== -1) {
          console.log('set first', find);
          coords.row = j;
          coords.col = found;
          boardCopy[j][found] = undefined;
          rowIndexPoint = found
          break;
        } else {
          // increment row
          currentSearchRow++;
        }
      }
      // check directions
    } else {
      let current = word[i];
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
        //behind
      } else if (
        boardCopy[coords.row] &&
        boardCopy[coords.row][coords.col - 1] === current
      ) {
        boardCopy[coords.row][coords.col - 1] = undefined;
        coords.col = coords.col - 1;
        console.log('behind', current);
        //row below
      } else if (
        boardCopy[coords.row + 1] &&
        boardCopy[coords.row + 1][coords.col] === current
      ) {
        boardCopy[coords.row + 1][coords.col] = undefined;
        coords.row = coords.row + 1;
        console.log('above', current);
        //row above
      } else if (
        boardCopy[coords.row - 1] &&
        boardCopy[coords.row - 1][coords.col] === current
      ) {
        boardCopy[coords.row - 1][coords.col] = undefined;
        coords.row = coords.row - 1;
        console.log('below', current);
        // diagonal - above right
      } else if (
        boardCopy[coords.row - 1] &&
        boardCopy[coords.row - 1][coords.col + 1] === current
      ) {
        boardCopy[coords.row - 1][coords.col + 1] = undefined;
        coords.row = coords.row - 1;
        coords.col = coords.col + 1;
        console.log(' diagonal - above right', current);
      }
      // diagonal - above left
      else if (
        boardCopy[coords.row - 1] &&
        boardCopy[coords.row - 1][coords.col - 1] === current
      ) {
        boardCopy[coords.row - 1][coords.col - 1] = undefined;
        coords.row = coords.row - 1;
        coords.col = coords.col - 1;
        console.log('diagonal - above left', current);
      }
      // diagonal - below right
      else if (
        boardCopy[coords.row + 1] &&
        boardCopy[coords.row + 1][coords.col + 1] === current
      ) {
        boardCopy[coords.row + 1][coords.col + 1] = undefined;
        coords.row = coords.row + 1;
        coords.col = coords.col + 1;
        console.log('diagonal - below right', current);
      }
      // diagonal - below left
      else if (
        boardCopy[coords.row + 1] &&
        boardCopy[coords.row + 1][coords.col - 1] === current
      ) {
        boardCopy[coords.row + 1][coords.col - 1] = undefined;
        coords.row = coords.row + 1;
        coords.col = coords.col - 1;
        console.log('diagonal - below left', current);
        // first instance of letter failed
      } else {
        // search first letter again in same row
        if (rowIndexPoint < board[0].length - 1) {
          rowIndexPoint = (rowIndexPoint + 1) % board[0].length;
          // reset word loop
          i = 0;
          // reinstate original board
          boardCopy = JSON.parse(JSON.stringify(board));
          continue;
          // move to next row
        } else if (currentSearchRow < boardCopy.length - 1) {
          // search first letter - move to start of next row
          coords.col = 0;
          coords.row = currentSearchRow+ 1;
          currentSearchRow = coords.row;
          // coords.row + 1
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

console.log(checkWord(testBoard1, 'EAR'));
console.log(checkWord(testBoard1, 'EARS'));
console.log(checkWord(testBoard1, 'RSCAREIOYBAILNEA'));
console.log(checkWord(testBoard1, 'BAILER'));
console.log(checkWord(testBoard1, 'CEREAL'));
