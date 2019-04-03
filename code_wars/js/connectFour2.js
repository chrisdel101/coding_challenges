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
