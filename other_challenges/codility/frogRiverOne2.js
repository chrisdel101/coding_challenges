function solution(X, A) {
	// solution(8, [1, 2, 3, 4])
	if (A.length < X) {
		return -1
	}
	// console.log(solution(2, [1, 1, 1, 1]))
	// error two
	if (!A.includes(X)) {
		return -1
	}
	// error two
	// console.log(solution(2, [2, 2, 2, 2, 2]))
	// not solution(1, [1])
	if (A.every(i => i === X) && A.length > 1) {
		return -1
	}
	// if interval greater than one
	if (!interval(A)) {
		return -1
	}

	function interval(arr) {
		// make arr unique before interval test
		let uniqueArray = arr.filter(function(item, pos) {
			return arr.indexOf(item) == pos;
		})
		var sort = uniqueArray.sort((a, b) => {
			return a - b
		})
		for (var i = sort.length - 1; i >= 0; i--) {
			if (sort[i - 1]) {
				// 			console.log('sort[i]', sort[i])
				// 			console.log('sort[i-1]', sort[i - 1])
				// 			console.log(sort[i] - sort[i - 1])
				let interval = sort[i] - sort[i - 1]
				if (interval !== 1) {
					return false
				}
			}
		}
		return true

	}
	// (5, [1, 2, 3, 5, 3, 1])
	let store = []
	A.forEach(i => {
		if (!store.includes(i)) {
			store.push(i)
		}
	})
	let last = store.pop()
	let index = A.indexOf(last)
	return index

}
var arr = [1, 3, 1, 4, 2, 3, 5, 4]

// console.log(solution(1, [1, 2, 3, 2, 1]))
// error one
// console.log(solution(2, [1, 1, 1, 1]))
// error two
// console.log(solution(2, [2, 2, 2, 2, 2]))
console.log(solution(1, [1]))