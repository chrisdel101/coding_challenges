function solution(A) {
	if(!A.length) return
	if(A.length === 1) return A[0]
	let removed = []
	let smallest = ""
	// let len = A.length
	while(A.length > 1) {
		let first = removed.push(A.shift())
		// console.log(removed, A)
		let left = sum(removed)
		let right = sum(A)
		let diff = Math.abs(left - right)
		if(typeof smallest !== "number") {
			smallest = diff
		} else {
			if(diff < smallest) {
				smallest = diff
			}
		}
		// console.log(diff)
	}
	// console.log('Smallest', smallest)
	return smallest
	// for (var i = 0; i < A.length; i++) {
	// }
	// console.log(sum(A))
}

function sum(arr) {
	let sum = 0
	for(var i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	// console.log('sum', sum)
	return sum
}
// function sum(arr){
//     if (!arr.length) return arr
//     if(arr.length === 1) return arr[0]
//     return arr.reduce((acc, cur) => acc + cur)
// }

// console.log(solution([3,2,3,4,1,10]))

\