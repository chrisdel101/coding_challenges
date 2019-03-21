const assert = require('assert')
class ConnectFour {
	constructor(board) {
		this.board = board
		this.boardFull = true
	}
	// get the value of each square - return player value
	getPlayer(rowIndex, colIndex) {
		let player
		for(var i = 0; i <= rowIndex; i++) {
			for(var j = 0; j <= colIndex; j++) {
				if(!this.board[rowIndex]) {
					return
				}
				if(this.board[rowIndex][colIndex] === 'R') {
					player = {
						name: 'R',
						colIndex: colIndex,
						rowIndex: rowIndex,
						count: 1
					}
				} else if(this.board[rowIndex][colIndex] === 'Y') {
					player = {
						name: 'Y',
						colIndex: colIndex,
						rowIndex: rowIndex,
						count: 1
					}
				} else {
					if(this.board[rowIndex][colIndex] === "-") {
						this.boardFull = false
					}
					player = {
						name: undefined
					}
				}
			}
		}
		return player
	}
	// increment row/col depending on directons checking
	handleIncrements(directionName, rowIndex, colIndex) {
		switch (directionName) {
			case "checkNextSquare":
				return [rowIndex = rowIndex, colIndex += 1]
			case "checkBelowSquare":
				console.log('IN', directionName, rowIndex, colIndex)
				return [rowIndex += 1, colIndex = colIndex]
			case "checkDiagonalBackBelow":
				return [rowIndex += 1, colIndex -= 1]
			case "checkDiagonalForwardBelow":
				return [rowIndex += 1, colIndex += 1]
			case "checkAboveSquare":
				return [rowIndex -= 1, colIndex = colIndex]
			default:
				console.error("Error in func switch")
		}

	}
	// check whichever direction entered for a match
	checkDirection(directionName, row, col) {
		let player = this.getPlayer(row, col)
		let [rowIndex, colIndex] = this.handleIncrements(directionName, row, col)
		let nextPlayer =
			this.getPlayer(rowIndex, colIndex)
		return nextPlayer && nextPlayer.name && nextPlayer.name === player.name && player.name ? true : false
	}
	// check the board for winning patterns
	findWinner() {
		for(var i = 0; i < this.board.length; i++) {
			for(var j = 0; j < this.board[i].length; j++) {
				if(this.getPlayer(i, j).name) {
					let jCopy = j
					let iCopy = i
					let currentPlayer = this.getPlayer(i, j)
					if(this.callDirectionFunc(this.checkDirection.bind(this), i, jCopy, currentPlayer, 'col', 'checkNextSquare')) {
						return currentPlayer.name
					}
					if(this.callDirectionFunc(this.checkDirection.bind(this), iCopy, j, currentPlayer, 'row', 'checkBelowSquare')) {
						return currentPlayer.name
					}
					if(this.callDirectionFunc(this.checkDirection.bind(this), iCopy, jCopy, currentPlayer, 'belowBackDiagonal', 'checkDiagonalBackBelow')) {
						return currentPlayer.name
					}
					if(this.callDirectionFunc(this.checkDirection.bind(this), iCopy, jCopy, currentPlayer, 'belowFrontDiagonal', 'checkDiagonalForwardBelow')) {
						return currentPlayer.name
					}
				}
			}
		}
		// check if board is full
		if(this.boardFull) {
			return "draw"
		} else {
			return "in progress"
		}
	}
	// if direction checked matches, keep checking until you have 4
	callDirectionFunc(func, row, col, currentPlayer, shiftType, directionName) {
		// reset player count each time
		currentPlayer.count = 1
		if(func(directionName, row, col)) {
			let checking = true
			while(checking) {
				if(!func(directionName, row, col) || currentPlayer.count === 4) {
					if(currentPlayer.count === 4) {
						checking = false
						return currentPlayer.name
					}
					return false
				}
				row = this.handleShift(row, col, shiftType)[0]
				col = this.handleShift(row, col, shiftType)[1]
				// make sure incrementing - not repating same square
				if(row !== currentPlayer.rowIndex || col !== currentPlayer.colIndex) {
					currentPlayer.count += 1
				} else {
					console.error("Not incrmenting")
					return false
				}
			}
		} else {
			return false
		}
	}
	// increment row/col in the direction checking
	handleShift(row, col, shiftType) {
		switch (shiftType) {
			case "col":
				return [row, col += 1]
			case "row":
				return [row += 1, col]
			case "belowBackDiagonal":
				return [row += 1, col -= 1]
			case "belowFrontDiagonal":
				return [row += 1, col += 1]
			case "aboveBackDiagonal":
				return [row -= 1, col -= 1]
			case "aboveFrontDiagonal":
				return [row -= 1, col += 1]
			default:
				console.error("No switch")
		}
	}
}



describe('ConnectFour game', function() {
	it("returns correct for check direction checkDirection checkDiagonalForwardBelow", function() {
		var newBoard = new ConnectFour([
			['-', 'Y', '-', 'Y', 'R', 'R', 'R'],
			['-', '', 'Y', 'R', 'Y', 'R', 'Y'],
			['-', '-', 'R', 'Y', 'R', 'Y', 'Y'],
			['-', 'R', 'Y', 'Y', 'Y', 'R', 'R']
		])
		let res = newBoard.checkDirection("checkDiagonalForwardBelow", 1, 2)
		assert(res)

	})

	it("returns correct for check direction checkDirection checkDiagonalBackBelow", function() {
		var newBoard = new ConnectFour([
			['-', 'Y', '-', 'Y', 'R', 'R', 'R'],
			['-', '', 'Y', 'R', 'Y', 'R', 'Y'],
			['-', '-', 'R', 'Y', 'R', 'Y', 'Y'],
			['-', 'R', 'Y', 'Y', 'Y', 'R', 'R']
		])
		let res = newBoard.checkDirection("checkDiagonalBackBelow", 0, 6)
		console.log('res', res)
		assert(res)
	})
	it("returns correct for check direction checkDirection checkBelowSquare", function() {
		var newBoard = new ConnectFour([
			['-', 'Y', '-', 'Y', 'R', 'R', 'R'],
			['-', '', 'Y', 'R', 'Y', 'R', 'Y'],
			['-', '-', 'R', 'Y', 'R', 'Y', 'Y'],
			['-', 'R', 'Y', 'Y', 'Y', 'R', 'R']
		])
		let res = newBoard.checkDirection("checkBelowSquare", 1, 6)
		assert(res)
	})

	it("return correct for check direction checkDirection checkNextSquare", function() {
		var newBoard = new ConnectFour([
			["Y", "R", "Y", "R", "Y", "R", "Y"],
			["R", "R", "-", "R", "-", "R", "Y"],
			["Y", "Y", "R", "R", "R", "Y", "R"],
			["R", "R", "Y", "Y", "Y", "R", "Y"],
			["Y", "Y", "Y", "R", "Y", "R", "Y"],
			["R", "Y", "R", "R", "R", "Y", "R"]
		])
		let res = newBoard.checkDirection("checkNextSquare", 1, 0)
		assert(res)
	})
	it('returns T if board is full', function() {
		var newBoard = new ConnectFour([
			["Y", "R", "Y", "R", "Y", "R", "Y"],
			["R", "Y", "R", "R", "Y", "R", "Y"],
			["Y", "Y", "R", "R", "R", "Y", "R"],
			["R", "R", "Y", "Y", "Y", "R", "Y"],
			["Y", "Y", "Y", "R", "Y", "R", "Y"],
			["R", "Y", "R", "R", "R", "Y", "R"]
		])
		newBoard.findWinner()
		assert(newBoard.boardFull)
	})
	it('returns Y when 4 forward below diagonal', function() {
		var newBoard = new ConnectFour([
			['-', 'Y', '-', 'Y', 'R', 'R', 'R'],
			['-', '', 'Y', 'R', 'Y', 'R', 'Y'],
			['-', '-', 'R', 'Y', 'R', 'Y', 'Y'],
			['-', 'R', 'Y', 'Y', 'Y', 'R', 'R']
		])
		assert(newBoard.findWinner() === 'Y')
		assert(newBoard.findWinner() !== 'R')

	})
	it('returns R when 4 backwards below diagonal', function() {
		var newBoard = new ConnectFour([
			['-', '-', '-', 'Y', 'R', 'R', 'R'],
			['-', '-', '-', 'R', 'Y', 'R', 'Y'],
			['-', '-', 'R', 'Y', 'R', 'Y', 'Y'],
			['-', 'R', 'Y', 'Y', 'R', 'R', 'R']
		])
		assert(newBoard.findWinner() === 'R')
		assert(newBoard.findWinner() !== 'Y')

	})
	it('returns Y when 4 in a col', function() {
		var newBoard = new ConnectFour([
			['-', '-', '-', 'Y', 'R', 'R', 'R'],
			['-', '-', '-', 'Y', 'Y', 'R', 'Y'],
			['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
			['-', '-', 'Y', 'Y', 'R', 'R', 'R']
		])
		assert(newBoard.findWinner() === 'Y')
		assert(newBoard.findWinner() !== 'R')

	})
	it('returns R when 4 in a row', function() {
		var newBoard = new ConnectFour([
			['-', '-', '-', 'R', 'R', 'R', 'R'],
			['-', '-', '-', 'Y', 'Y', 'R', 'Y'],
			['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
			['-', '-', 'Y', 'Y', 'R', 'R', 'R']
		])

		assert(newBoard.findWinner() === 'R')
		assert(newBoard.findWinner() !== 'Y')

	})
	it('create an instance of a game', function() {
		const board = new ConnectFour([
			["-", "-", "R"],
			["Y", "R", "_"]
		])
		const newBoard = new ConnectFour(board)
		assert(newBoard instanceof ConnectFour)
	})
	it('returns player when found', function() {
		const newBoard = new ConnectFour([
			["-", "-", "R"],
			["Y", "R", "_"]
		])
		// console.log(player)
		let player = newBoard.getPlayer(0, 2)
		assert(player.name === 'R')
	})

})

var testB = new ConnectFour([
	["Y", "R", "Y", "R", "Y", "R", "Y"],
	["R", "Y", "R", "R", "Y", "R", "Y"],
	["Y", "Y", "R", "R", "R", "Y", "R"],
	["R", "R", "Y", "Y", "Y", "R", "Y"],
	["Y", "Y", "Y", "R", "Y", "R", "Y"],
	["R", "Y", "R", "R", "R", "Y", "R"]
])

const b = new ConnectFour(testB)
console.log(b.findWinner())

//
// class ConnectFour {
// 	constructor(board) {
// 		this.board = board
// 		this.boardFull = true
// 	}
// 	getPlayer(rowIndex, colIndex) {
// 		let player
// 		// console.log('R', rowIndex)
// 		// console.log('C', colIndex)
// 		for(var i = 0; i <= rowIndex; i++) {
// 			// console.log('i', i)
// 			for(var j = 0; j <= colIndex; j++) {
// 				// console.log('j', j)
// 				// console.log('B', this.board[rowIndex])
// 				if(!this.board[rowIndex]) {
// 					return
// 				}
// 				if(this.board[rowIndex][colIndex] === 'R') {
// 					// console.log('row', rowIndex)
// 					player = {
// 						name: 'R',
// 						colIndex: colIndex,
// 						rowIndex: rowIndex,
// 						count: 1
// 					}
// 				} else if(this.board[rowIndex][colIndex] === 'Y') {
// 					// console.log('row', rowIndex)
// 					player = {
// 						name: 'Y',
// 						colIndex: colIndex,
// 						rowIndex: rowIndex,
// 						count: 1
// 					}
// 				} else {
//         console.log('HERE', this.board[rowIndex][colIndex])
//         if(this.board[rowIndex][colIndex] === "-") {
// 						this.boardFull = false
// 					}
// 					player = {
// 						name: undefined
// 					}
//
// 				}
// 			}
// 		}
// 		// console.log(player)
// 		return player
// 	}
// 	checkNextSquare(rowIndex, colIndex) {
// 		let player = this.getPlayer(rowIndex, colIndex)
// 		let nextPlayer = this.getPlayer(rowIndex, colIndex + 1)
// 		// console.log('NP', nextPlayer)
// 		if(!nextPlayer) {
// 			return false
// 		}
// 		if(nextPlayer && nextPlayer.name === player.name && player.name) {
// 			return true
// 		}
// 		return false
// 	}
// 	checkBelowSquare(rowIndex, colIndex) {
// 		// console.log(rowIndex, colIndex)
// 		let player = this.getPlayer(rowIndex, colIndex)
// 		// console.log('p', player)
// 		// console.log('p', player.rowIndex)
// 		// console.log('p', this.board[4])
// 		let belowPlayer = this.getPlayer(rowIndex + 1, colIndex)
// 		// console.log('Below below', belowPlayer)
// 		return belowPlayer && belowPlayer.name === player.name && player.name && belowPlayer.name ? true : false
// 	}
// 	checkAboveSquare(rowIndex, colIndex) {
// 		// console.log(this.getPlayer(0, 0))
// 		let player = this.getPlayer(rowIndex, colIndex)
// 		// console.log('p', player)
// 		let abovePlayer = this.getPlayer(rowIndex - 1, colIndex)
// 		// console.log('Above Player', abovePlayer)
// 		return abovePlayer && player.name && abovePlayer.name === player.name ? true : false
//
// 	}
// 	checkDiagonalBackBelow(rowIndex, colIndex) {
//
// 		let player = this.getPlayer(rowIndex, colIndex)
// 		// console.log('p', player)
// 		let diagonalBelowBehind = this.getPlayer(rowIndex + 1, colIndex - 1)
// 		return diagonalBelowBehind && player.name && diagonalBelowBehind.name === player.name ? true : false
// 	}
// 	checkDiagonalForwardBelow(rowIndex, colIndex) {
// 		// console.log(rowIndex, colIndex)
// 		let player = this.getPlayer(rowIndex, colIndex)
// 		// console.log('p', player)
// 		let diagonalBelowForward = this.getPlayer(rowIndex + 1, colIndex + 1)
// 		// console.log('Diagonal behind Player', diagonalBelowForward)
// 		return diagonalBelowForward && player.name && diagonalBelowForward.name === player.name ? true : false
// 	}
// 	// checkDiagonalBackAbove(rowIndex, colIndex) {
// 	// 	console.log(rowIndex, colIndex)
// 	// 	let player = this.getPlayer(rowIndex, colIndex)
// 	// 	console.log('p', player)
// 	// 	let diagonalAboveBack = this.getPlayer(rowIndex - 1, colIndex - 1)
// 	// 	console.log(diagonalAboveBack && player.name && diagonalAboveBack.name === player.name ? true : false)
// 	// 	return diagonalAboveBack && player.name && diagonalAboveBack.name === player.name ? true : false
// 	// }
// 	// checkDiagonalForwardAbove(rowIndex, colIndex) {
// 	// 	// console.log(rowIndex, colIndex)
// 	// 	// console.log('this', this)
// 	// 	let player = this.getPlayer(rowIndex, colIndex)
// 	// 	// console.   log('p', player)
// 	// 	let diagonalAboveForward = this.getPlayer(rowIndex - 1, colIndex + 1)
// 	// 	return diagonalAboveForward && player.name && diagonalAboveForward.name === player.name ? true : false
// 	// }
// 	findWinner() {
// 		// this.board.length = 1
// 		// console.log(this.board)
// 		for(var i = 0; i < this.board.length; i++) {
// 			// console.log(this.board[i])
// 			for(var j = 0; j < this.board[i].length; j++) {
// 				// console.log(this.board[i][j])
// 				// console.log(this.getPlayer(i, j).name)
// 				if(this.getPlayer(i, j).name) {
// 					let jCopy = j
// 					let iCopy = i
// 					// console.log('iCopy', iCopy)
// 					// console.log('j', j)
// 					let currentPlayer = this.getPlayer(i, j)
// 					// currentPlayer.count = 1
// 					// console.log(this.checkBelowSquare(iCopy, j))
// 					// if(this.checkNextSquare(i, jCopy)) {
// 					// 	let checking = true
// 					// 	while(checking) {
// 					// 		if(!this.checkNextSquare(i, jCopy) || currentPlayer.count === 4) {
// 					// 			checking = false
// 					// 			console.log('Winner', currentPlayer.name)
// 					// 			return currentPlayer.name
// 					// 		}
// 					// 		console.log('name', this.getPlayer(i, jCopy + 1).name)
// 					// 		console.log('index', this.getPlayer(i, jCopy + 1).colIndex)
// 					// 		jCopy++
// 					// 		currentPlayer.count += 1
// 					// 		// console.log('count', currentPlayer)
// 					// 	}
// 					//
// 					// 	console.log('k', jCopy)
// 					// }
// 					if(this.checkDirection(this.checkNextSquare.bind(this), i, jCopy, currentPlayer, 'col')) {
// 						return currentPlayer.name
// 					}
// 					if(this.checkDirection(this.checkBelowSquare.bind(this), iCopy, j, currentPlayer, 'row')) {
// 						return currentPlayer.name
// 					}
// 					if(this.checkDirection(this.checkDiagonalBackBelow.bind(this), iCopy, jCopy, currentPlayer, 'belowBackDiagonal')) {
// 						// console.log(currentPlayer.name)
// 						return currentPlayer.name
// 					}
// 					if(this.checkDirection(this.checkDiagonalBackBelow.bind(this), iCopy, jCopy, currentPlayer, 'belowBackDiagonal')) {
// 						// console.log(currentPlayer.name)
// 						return currentPlayer.name
// 					}
// 					if(this.checkDirection(this.checkDiagonalForwardBelow.bind(this), iCopy, jCopy, currentPlayer, 'belowFrontDiagonal')) {
// 						// console.log(currentPlayer.name)
// 						return currentPlayer.name
// 					}
// 					// if(this.checkDirection(this.checkNextSquare.bind(this), iCopy, j, currentPlayer) !== false) {
// 					// 	let winner = this.checkDirection(this.checkNextSquare.bind(this), iCopy, j, currentPlayer)
// 					// 	console.log('WINNER', winner)
// 					// 	return winner
// 					// }
// 					// this.checkDirection(this.checkBelowSquare.bind(this), iCopy, j, currentPlayer)
// 					// if(this.checkBelowSquare(iCopy, j)) {
// 					// 	let checking = true
// 					// 	while(checking) {
// 					// 		// console.log('loop')
// 					// 		// console.log('i', iCopy)
// 					// 		// console.log('COUNT', currentPlayer.count === 4)
// 					// 		if(!this.checkBelowSquare(iCopy, j)) {
// 					// 			checking = false
// 					// 			console.log('Winner', currentPlayer)
// 					// 			return currentPlayer.name
// 					// 		}
// 					//
// 					// 		// console.log('name', this.getPlayer(iCopy, j).name)
// 					// 		// console.log('index', this.getPlayer(iCopy, j).rowIndex)
// 					// 		iCopy++
// 					// 		currentPlayer.count += 1
// 					// 		// console.log(this.checkBelowSquare(iCopy + 1, j))
// 					//
// 					// 	}
// 					//
// 					// 	console.log('k', iCopy)
// 					// }
// 				}
// 				console.log('J', j)
//
// 			}
// 		}
//     console.log('BF',this.boardFull)
// 		if(this.boardFull) {
//       console.log('DRAW')
// 			return "draw"
// 		} else {
// 			return "in progress"
// 		}
// 	}
// 	checkDirection(func, row, col, currentPlayer, shiftType) {
// 		currentPlayer.count = 1
// 		console.log()
// 		if(func(row, col)) {
// 			let checking = true
// 			while(checking) {
//
// 				if(!func(row, col) || currentPlayer.count === 4) {
// 					if(currentPlayer.count === 4) {
// 						checking = false
// 						console.log('WINNER', currentPlayer)
// 						return currentPlayer.name
// 					}
// 					return false
// 				}
// 				row = this.handleShift(row, col, shiftType)[0]
// 				col = this.handleShift(row, col, shiftType)[1]
// 				// make sure incrementing - not repating same square
// 				if(row !== currentPlayer.rowIndex || col !== currentPlayer.colIndex) {
// 					currentPlayer.count += 1
// 				} else {
// 					console.error("Not incrmenting")
// 					return false
// 				}
// 				// console.log('ROW', row, col)
// 			}
// 		} else {
// 			return false
// 		}
// 	}
// 	handleShift(row, col, shiftType) {
// 		switch (shiftType) {
// 			case "col":
// 				return [row, col += 1]
// 			case "row":
// 				return [row += 1, col]
// 			case "belowBackDiagonal":
// 				return [row += 1, col -= 1]
// 			case "belowFrontDiagonal":
// 				return [row += 1, col += 1]
// 			case "aboveBackDiagonal":
// 				return [row -= 1, col -= 1]
// 			case "aboveFrontDiagonal":
// 				return [row -= 1, col += 1]
// 			default:
// 				console.error("No switch")
// 		}
// 	}
//
//
// }
// function connectFour(board){
//     console.log(board)
//   const connectFour = new ConnectFour(board)
//   return connectFour.findWinner()
// }