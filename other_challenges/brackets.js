// function solution(S) {
// 	let check = {}
// 	let obj = {}
// 	let counter = 0
// 	for (var i = 0; i < S.length; i++) {
//
// 		let unMatched = 0
// 		let current = S[i]
// 		// add to obj
// 		// console.log(current)
// 		// if (current === "(" || current === "[" || current === "{") {
// 		obj[`${current}${i}`] = current
// 		// console.log('obj inside', obj)
// 		// 	counter++
// 		// }
//
// 		// get opposite
// 		let opposite = checker(current)
// 		// console.log('opposite', opposite)
// 		// console.log('i', i)
// 		if (current === ")" || current === "]" || current === "}") {
// 			if (!obj[`${current}${i}`]) {
// 				console.log('not there')
// 			} else {
// 				console.log('all good')
// 				delete obj[opposite]
// 			}
// 		}
// 	}
// 	console.log('obj', obj)
// 	return counter
// }
function solution(S) {
	let bracketNums = []
	for (var i = 0; i < S.length; i++) {
		let current = S[i]

		switch (current) {
			case "(":
				bracketNums.push(1)
				break
			case ")":
				bracketNums.push(2)
				break
			case "[":
				bracketNums.push(3)
				break
			case "]":
				bracketNums.push(4)
				break
			case "{":
				bracketNums.push(5)
				break
			case "}":
				bracketNums.push(6)
				break
			default:
				console.log('no switch data')
		}

	}
	// for (var i = 0; i < bracketNums.length; i++) {
	// 	if (bracketNums[i] === 2 || bracketNums[i] === 4 || bracketNums[i] === 6) {
	// 		// let previous = previousNum(bracketNums[i])
	// 		if (bracketNums.includes(previous)) {
	// 		// 	let currentIndex = bracketNums.indexOf(bracketNums[i])
	// 		// 	let previousIndex = bracketNums.indexOf(previous)
	// 		// 	console.log('CI', currentIndex)
	// 		// 	console.log('PI', previousIndex)
	// 		}
	//
	// 	}
	// }
	var countedNums = bracketNums.reduce(function(allNums, num) {
		if (num in allNums) {
			allNums[num]++;
		} else {
			allNums[num] = 1;
		}

		return allNums;
	}, {});
	console.log(countedNums)
	for (var num in countedNums) {

		if (num === '2' || num === '4' || num === '6') {
			let previous = previousNum(num)
			console.log('key', previous)
			console.log('val', countedNums[previous])
			// count of 1, 3 and 5
			let previousAmount = countedNums[previous]
			let currentAmount = countedNums[num]
			// console.log('CA', currentAmount)
			console.log('key', num)
			console.log('val', currentAmount)
			// console.log(previousAmount)
			// if previous undefined
			if (!previousAmount) {
				console.log('UNDEFINED')
				return 0
				// } //else if (previousAmount < ){

				// }

			}
		}
		// console.log(countedNums)

	}
}

function previousNum(num) {
	return num - 1

}
// function oppositeBracket(bracket) {
// 	let opposite
// 	if (bracket === ")") {
// 		opposite = "("
// 	} else if (bracket === "(") {
// 		opposite = ")"
// 	} else if (bracket === "[") {
// 		opposite = "]"
// 	} else if (bracket === "]") {
// 		opposite = "["
// 	} else if (bracket === "}") {
// 		opposite = "{"
// 	} else if (bracket === "{") {
// 		opposite = "}"
// 	} else {
// 		console.log('no bracket value')
// 	}
// 	return opposite
// }
// [()()
// solution("{[()()]}")
console.log(solution("()){}]](())"))

// "(".charCodeAt()
// 40
// ")".charCodeAt()
// 41
// "}".charCodeAt()
// 125
// "{".charCodeAt()
// 123
// "[".charCodeAt()
// 91
// "]".charCodeAt()
// 93

// TEST1
//())
//( //push to arr
// increment++
//) //check if opposite exists >= amount of this (so num of 1s more than 2s) otherwise exit 1 since bracket missing
//) // check if opposite >= amount of this (!== more 2s than ones so missing bracket)
// TEST2
// {
// 	{
// 		([])]
// }
// } { // push to arr
// {
// (
// [
// ]
// )
// }
// }