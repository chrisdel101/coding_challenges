function checkWord( board, word ) {
  console.log('W', word)
  let boardCopy = JSON.parse(JSON.stringify(board))
  boardCopy[0][1] = undefined
  console.log('BB', boardCopy)
  
}
const testBoard = [
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

console.log(checkWord( testBoard, "RSCAREI" ))
console.log('b', testBoard)