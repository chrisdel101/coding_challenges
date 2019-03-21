var assert = require('assert');


function connectFour(board) {
	let startRow = 0
	let startColumn = 0
	for(var i = 0; i < board.length; i++) {
		for(var j = 0; j < board[i].length; j++) {
			if(board[i][j] !== "-") {
				let color
				if(board[i][j] === 'R') {
					color = 'R'
				} else if(board[i][j] === 'L') {
					color = 'L'
				}

			}
			startColumn++
		}
		startRow++
	}


}
//
// describe('testing inputs and testing works', function() {
// 	it('takes an array as input', function() {
// 		var result = connectFour(board)
// 		assert(Array.isArray(board))
// 	})
// 	it('increments rows with each outer iteration', function() {
// 		let startRow = 0
// 		for(var i = 0; i < board.length; i++) {
// 			for(var j = 0; j < board[i].length; j++) {}
// 			startRow++
// 		}
// 		assert(startRow === board.length)
// 	})
// 	it('increments columns with each inner iteration', function() {
// 		let startColumn = 0
// 		for(var i = 0; i < board.length; i++) {
// 			for(var j = 0; j < board[i].length; j++) {
// 				startColumn++
// 			}
// 		}
// 		// add all row lens together
// 		let result = board.reduce((acc, cur) => {
// 			return acc += cur.length
// 		}, 0)
// 		assert(result === startColumn)
// 	})
//     it('sets color to R when found', function(){
//         let color
//         for(var i = 0; i < board.length; i++) {
//     		for(var j = 0; j < board[i].length; j++) {
//     			if(board[i][j] !== "-") {
//     				if(board[i][j] === 'R') {
//     					color = 'R'
//     				} else if(board[i][j] === 'L') {
//     					color = 'L'
//     				}
//     			}
//     		}
//     	}
//
//     })
//
// })


var board = [
	['-', '-', '-', '-', '-', '-', '-'],
	['-', '-', '-', '-', '-', '-', '-'],
	['-', '-', '-', 'R', 'R', 'R', 'R'],
	['-', '-', '-', 'Y', 'Y', 'R', 'Y'],
	['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
	['-', '-', 'Y', 'Y', 'R', 'R', 'R']
];
connectFour(board)