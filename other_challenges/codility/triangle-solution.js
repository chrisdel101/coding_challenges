function solution(arr) {
	// run for every digit in array
	function makeTuples(arr) {
		const originalArrLen = arr.length
		let tuples = []
		let i = 0
		let j = 0
		// keep track of runs
		let counter = 0
		// stop when runs as many times as length
		while (counter !== originalArrLen) {
			// copy for each digits run
			let arrOuterCopy = arr.slice()
			// run through each copy until gone
			while (arrOuterCopy.length > 1) {
				// copy for each digit
				let arrCopy = arrOuterCopy.slice()
				// before all first nums are chopped off
				while (arrCopy.length > 2) {
					let tempArr = []
					// for no repettions of nums
					if (arrCopy.length >= 3) {
						while (i < 2) {
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
					}
				}
				// after runing SECOND rip, splice of first num
				arrOuterCopy.splice(1, 1)
			}
			counter++
			// splice off first digit
			arr.splice(0, 1)

		}
		return tuples
	}

	function isTriangle(arr) {
		for (var k = 0; k < arr.length; k++) {
			console.log(arr[k])
			if ((arr[k][0] + arr[k][1] > arr[k][2]) && (arr[k][1] + arr[k][2] > arr[k][0]) && (arr[k][2] + arr[k][0] > arr[k][1])) {
				return 1
			}
		}
		return 0
	}
	return isTriangle(makeTuples(arr))
}
console.log(solution([10, 2, 5, 1, 8, 20]))