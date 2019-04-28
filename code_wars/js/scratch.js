function chunkCombinations(str) {
	// console.log('str', str)
	// outer loop is constant
	let arr = []
	// if(str.length === 1 || str.length === 2 || str.length === 3) {
	// 	return str
	// }

	for(var i = 0; i < str.length; i++) {
        // console.log('OUTER', str[i])
		for(var j = i + 1; j < str.length; j++) {
			 // console.log('inner', str[j])
			let tempArr = []
			// // console.log('j', j)
			// // console.log('len', str.length)
			// console.log('i', i)
			// console.log('j', j)
			// // subract j each time to lessen innner loop repetitions
			for(var k = 1; k < str.length-j; k++) {
			// 	console.log('str', str.length)
            //
			// 	console.log('k loop', k)
			// 	// console.log('make', makeChunk(str, i, j, k).halfChunksArr)
			let { fullChunks, halfChunks, startChunk } = makeChunk(str, i, j, k)
            //
			// 	// let halfChunks = chunkSlicer(makeChunk(str, i, j, k).halfChunksArr, makeChunk(str, i, j, k).startChunk)
				console.log('fullChunks', fullChunks)
				// console.log('halfChunks', halfChunks)
			// let chunkSliced = chunkSlicer(fullChunks, startChunk)
			// 	console.log('chunksliced', chunkSliced)
			// let halfChunksSliced = chunkSlicer(halfChunks, startChunk)
			// 	// console.log('halfChunksSliced', halfChunksSliced)
			// 	// console.log(chunkChun
			// tempArr.push(halfChunksSliced)
			// 	tempArr.push(chunkSliced)
			// 	// return
			}
			// console.log('HERE', tempArr)
			if(tempArr.length) arr.push(tempArr)

		}
	}
	console.log('arr end', arr)
	return arr
}

chunkCombinations("2534")

function chunkSlicer(arr, chunkStart) {
	console.log('ARR start', arr)
	// get all chunks of the smaller chunk
	let chunks = arr.map(item => {
		return chunkCombinations(item)
		// return chunkCombinations(item)
	})
	console.log('CC', chunks)

	// let recombined = recombineHalfChunks(chunks, chunkStart)
	// console.log('recombined', recombined)
	// reattach front of string - TODO
	// console.log('FLT', flatten(chunks))
	// chunks = flattenAll(chunks).map(chunk => {
	// 	return `${chunkStart}${chunk}`
	// })
	return chunks
}
// console.log(chunkSlicer(['253'], '25'))

// make the chunks of multiple numbser that then get sliced up
function makeChunk(str, constant, secondConstant, chunkSize) {
	var arr = []
	var halfChunksArr = []
    // console.log('chunkSize', chunkSize)
    // first part of chunk
	var chunk = `${str[constant]}${str[secondConstant]}`
	// 	console.log('startChunk', chunk)
	// 	console.log(secondConstant+(chunkSize-1))
    // get chunk without first part

    // console.log('chunk', chunk)
	// console.log('str', str)
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
	// console.log('full', arr)
	// console.log('half', halfChunksArr)
	// console.log('full', fullChunks)
	// 13 2 53 5365
	return { fullChunks: arr, halfChunks: halfChunksArr, startChunk: chunk }
}
