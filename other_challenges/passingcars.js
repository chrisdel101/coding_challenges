function makeDuples(arr) {
	const originalArrLen = arr.length
	let duples = []
	let i = 0
	let j = 0
	// keep track of runs
	let counter = 0
	// stop when runs as many times as length
	while (counter !== 1) {
		// copy for each digits run
		let arrOuterCopy = arr.slice()
		// run through each copy until gone
		while (arrOuterCopy.length > 1) {
			console.log('run outer loop')
			console.log('OUTER ARR COPY', arrOuterCopy)
			// copy for each digit
			let arrCopy = arrOuterCopy.slice()
			// before all first nums are chopped off
			while (arrCopy.length > 1) {
				// console.log('innerCopy len',
				// arrCopy.length)
				let tempArr = []
				// for no repettions of nums
				// if (arrCopy.length >= 2) {
				// while (i < 1) {
				// 	console.log(arrCopy[i])
				// 	// push in first two
				// 	tempArr[i] = arrCopy[i]
				// 	i++
				// }
				tempArr[0] = arrCopy[0]
				// push in last one
				tempArr[1] = arrCopy[arrCopy.length - 1];

				duples.push(tempArr)
				j++
				// chop off last one
				// console.log('arr copy', arrCopy)
				arrCopy.splice(arrCopy.length - 1, 1)

				// console.log('arr copy slice len', arrCopy)
				// reset i for above loop
				i = 0
				// }
			}
			console.log('arr outer splice', arrOuterCopy)
			arrOuterCopy.splice(0, 1)
			console.log('arr outer splice', arrOuterCopy)
			// duples.push(['SPACE'])
			console.log('duples', duples)
		}
		counter++
		// console.log('counter up')
		// console.log('duples', duples)
		// splice off first digit
		console.log('ARR', arr)
		arr.splice(0, 1)
		console.log('ARR', arr)

	}

	function checker(arr) {
		let counter = 0
		for (var i = 0; i < arr.length; i++) {
			let P = arr[i][0]
			let Q = arr[i][1]
			if (P < Q) {
				counter++
			}
		}
		console.log("COUNTER", counter)
		return counter
	}
	return checker(duples)
}


console.log(makeDuples([0, 1, 0, 1, 1]))