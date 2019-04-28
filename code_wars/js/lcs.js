function lcs(str1, str2) {
	let highestLen = 0
	let highestCombo = ""
	// let highestLen2 = 0
	// let highestCombo2 = ""
	let list1 = makeList(str1)
	let list2 = makeList(str2)
	let { shortest, longest } = lengths(list1, list2)
	// console.log(shortest)
	// console.log(chunkCombos.slice(0, 20))
	// console.log(letterCombos.slice(0, 20))
	// get the longest that matches
	// console.log(list1 === list2)
	// console.log(list2)
	// console.log(list1.includes("12356"))
	// console.log(list2.includes("12356"))
	for(var i = 0; i < longest.length; i++) {
		// if(shortest.includes(longest[i])) {
		// 	if(longest[i].length > highestLen) {
		// 		highestLen = longest[i].length
		// 		highestCombo = longest[i]
		// 	}
		// }
	}
	// for(var i = 0; i < chunkCombos.length; i++) {
	// 	if(str2.includes(chunkCombos[i])) {
	// 		if(chunkCombos[i].length > highestLen2) {
	// 			highestLen2 = chunkCombos[i].length
	// 			highestCombo2 = chunkCombos[i]
	// 		}
	// 	}
	// }
	// console.log('hh', highestCombo)
	// console.log('hh', highestCombo2)
}
lcs("2537683", "0")

function lengths(str1, str2) {
	return str1.length >= str2.length ? { shortest: str2, longest: str1 } : { shortest: str1, longest: str2 }
}
// make a list for each input string
function makeList(str) {
	// get all combos
	let letterCombos = sliceCombinations(str)
	// console.log(letterCombos)
	// let chunkCombos = chunkCombinations(str)
	// flatten arr
	letterCombos = flatten(letterCombos)
	// chunkCombos = flatten(flatten(chunkCombos))
	// let all = letterCombos.concat(chunkCombos)
    // console.log(letterCombos)
	return letterCombos
}

function flatten(arr) {
	var tempArr = []
	let anyArrays = false
	arr.forEach(item => {
		if(Array.isArray(item)) {
			anyArrays = true
			tempArr.push(...item)
		} else {
			tempArr.push(item)
		}
	})
	if(!anyArrays) {
		return tempArr
	}
	return flatten(tempArr)
}
// function flatten(arrs) {
// 	console.log('Arrs', arrs)
// 	arrs = arrs.reduce(
// 		(accumulator, currentValue) => {
// 			return accumulator.concat(currentValue)
// 		}
// 	)
// 	return arrs
// }
// make all combos of letter slices
function sliceCombinations(str) {
	let arr = []
	for(var i = 0; i < str.length; i++) {
		for(var j = 0; j < str.length; j++) {
			let slice = slicer(str, i, j)
			arr.push(slice)
		}
	}
	console.log(arr)

	return arr
}

function slicer(str, constant, digits) {
	var start = constant + 1
	var shift = digits + start
	var k = 0
	var arr = []
	while(k < 4) {
		var slice = str.slice(start, shift)
		// console.log('start', start, 'shift', shift)
		arr.push(`${str[constant]}${slice}`)
		start++
		shift++
		k++
	}
	// console.log(arr)
	return arr
}

// slicer("132535365", 0, 2, 3)
// makeChunk("abcdef", 0, 1, 2)
// makeChunk("abcdef", 0, 1, 3)
// makeChunk("abcdef", 0, 1, 4)
// make all combinatation of letter chunks


// not handling smaller than 4 - need to rewrite
function chunkCombinations(str) {
	console.log('str', str)
	// outer loop is constant
	let arr = []
	// if(str.length === 1 || str.length === 2 || str.length === 3) {
	// 	return str
	// }

	for(var i = 0; i < str.length; i++) {
		for(var j = i + 1; j < str.length; j++) {
			// console.log('start')
			let tempArr = []
			// console.log('j', j)
			// console.log('len', str.length)
			console.log('i', i)
			console.log('j', j)
			// subract j each time to lessen innner loop repetitions
			for(var k = 1; k < str.length - j; k++) {
				console.log('str', str.length)

				console.log('k loop', k)
				// console.log('make', makeChunk(str, i, j, k).halfChunksArr)
				let { fullChunks, halfChunks, startChunk } = makeChunk(str, i, j, k)

				// let halfChunks = chunkSlicer(makeChunk(str, i, j, k).halfChunksArr, makeChunk(str, i, j, k).startChunk)
				console.log('fullChunks', fullChunks)
				// console.log('halfChunks', halfChunks)
				let chunkSliced = chunkSlicer(fullChunks, startChunk)
				console.log('chunksliced', chunkSliced)
				// let halfChunksSliced = chunkSlicer(halfChunks, startChunk)
				// console.log('halfChunksSliced', halfChunksSliced)
				// console.log(chunkChun
				// tempArr.push(halfChunksSliced)
				tempArr.push(chunkSliced)
				// return
			}
			console.log('HERE', tempArr)
			if(tempArr.length) arr.push(tempArr)

		}
	}
	console.log('arr end', arr)
	return arr
}
// chunkCombinations("253")

// chunkCombinations("253544")
// chunkCombinations("132535365")
function recombineHalfChunks(arr, startChunk) {
	return arr.map(chunk => {
		console.log('FULL', `${startChunk}${chunk}`)
		return `${startChunk}${chunk}`
	})
}
// returns sliced up arrs from the start and half-chunks from the middle
function makeChunk(str, constant, secondConstant, chunkSize) {
	var arr = []
	var halfChunksArr = []
	var chunk = `${str[constant]}${str[secondConstant]}`
	// 	console.log('startChunk', chunk)
	// 	console.log(secondConstant+(chunkSize-1))
	for(var i = secondConstant + 1; i < secondConstant + 1; i++) {
		chunk += str[i]
	}
	// console.log('chunk', chunk)
	// console.log('len', str.length)

	for(var i = secondConstant + 1; i < str.length; i++) {
		var tempChunk = ""
		for(var j = i; j < i + chunkSize; j++) {
			// console.log('j', j)
			// console.log('ic', i + chunkSize)
			if(str[j]) {
				tempChunk += str[j]
			}
		}
		// console.log('temp', tempChunk)
		halfChunksArr.push(tempChunk)
		tempChunk = chunk + tempChunk
		arr.push(tempChunk)
	}
	// 13 25 3 53 6 5
	// console.log('arr', arr)
	// console.log('half', halfChunksArr)
	// 13 2 53 5365
	return { fullChunks: arr, halfChunks: halfChunksArr, startChunk: chunk }
}

function chunkSlicer(arr, chunkStart) {
	console.log('arr start', arr)
	// get all chunks of the smaller chunk
	let chunks = arr.map(item => {
		console.log('item', item)
		return chunkCombinations(item)
	})
	// console.log('CC', chunks)

	// let recombined = recombineHalfChunks(chunks, chunkStart)
	// console.log('recombined', recombined)
	// reattach front of string - TODO
	// console.log('FLT', flatten(chunks))
	chunks = flatten(chunks).map(chunk => {
		return `${chunkStart}${chunk}`
	})
	return chunks
}

// chunksize- from 1 to len of smaller string
// makeChunk("132535365", 0, 2, 6)
// makeChunk("abcdef", 0, 1, 2)
// makeChunk("abcdef", 0, 1, 3)
// makeChunk("abcdef", 0, 1, 4)
// makeChunk("abcdef", 0, 2, 1)
// makeChunk("abcdef", 0, 2, 2)
// makeChunk("abcdef", 0, 2, 3)
// makeChunk("abcdef", 0, 2, 4)
// makeChunk("abcdef", 0, 4, 1)
