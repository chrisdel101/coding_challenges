function solution(arr) {
	let tuples = []
	const originalArrLen = arr.length
	let i = 0
	let j = 0
	// let start = arr[0]
	// make arrCopy
	let counter = 0
	while (counter !== originalArrLen) {
		// 		console.log('oringal len', originalArrLen)
		let arrOuterCopy = arr.slice()
		// 		console.log('outer', arrOuterCopy)
		while (arrOuterCopy.length > 1) {
			// make copy
			let arrCopy = arrOuterCopy.slice()
			// before all first nums are chopped off
			while (arrCopy.length > 2) {
				let tempArr = []
				// for no repettions of nums
				if (arrCopy.length >= 3) {
					while (i < 2) {
						``
						// push in first two
						tempArr[i] = arrCopy[i]
						i++
					}
					// push in last one
					tempArr[2] = arrCopy[arrCopy.length - 1];
					tuples.push(tempArr)
					j++
					// chop off last one
					arrCopy.splice(arrCopy.length - 1, 1)
					// reset i for above loop
					i = 0
					// console.log('arrCopy len', arrCopy.length)

				}
			}
			// console.log('out')
			// console.log('counter', counter)
			// after runing FIRST rip, splice of first num
			// arr.splice(0, 1)
			// after runing SECOND rip, splice of first num
			arrOuterCopy.splice(1, 1)
			// 			console.log('outer arr len', arrOuterCopy.length)
			// console.log(tuples)
		}
		counter++
		arr.splice(0, 1)
		// 		console.log('arr', originalArrLen)
		// 		console.log('counter', counter)

	}
	for (var k = 0; k < tuples.length; k++) {
		console.log(tuples[k])
		if ((tuples[k][0] + tuples[k][1] > tuples[k][2]) && (tuples[k][1] + tuples[k][2] > tuples[k][0]) && (tuples[k][2] + tuples[k][0] > tuples[k][1])) {
			return 1
		}
	}

	return 0
}
console.log(solution([10, 2, 5, 1, 8, 20]))