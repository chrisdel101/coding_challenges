// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q]
//
// p= 10
// q= 5
// r= 8
// 10 + 5 > 8
// 5 + 8 > 10
// 8 + 10 > 5
//
// p= 5
// q= 10
// r= 8
// 5 + 10 > 8
// 10 + 8 > 5
// 8+ 5 > 10
//
//

10, 2, 5
10, 2, 1
10, 2, 8,
10, 2, 20
//
// 10, 5, 1
// 10, 5, 8
// 10, 5, 20
//
// 10, 1, 8
// 10, 1, 20
//
// 10, 8,`` 20
let tuples = []
// for (var i = 0; i < ; i++) {
// 	let arrCopy = arr.slice()
// 	arr.
// }
let arr = [10, 2, 5, 1, 8, 20]

function solution(arr) {
	const originalArrLen = arr.length
	let i = 0
	let j = 0
	let k = 0
	// let start = arr[0]
	// make arrCopy
	let counter = 0
	while (counter !== originalArrLen) {
		console.log('oringal len', originalArrLen)
		let arrOuterCopy = arr.slice()
		console.log('outer', arrOuterCopy)
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
			console.log('outer arr len', arrOuterCopy.length)
			// console.log(tuples)
		}
		counter++
		arr.splice(0, 1)
		console.log('arr', originalArrLen)
		console.log('counter', counter)

	}
	return tuples
}
// solution(arr)
// console.log(tuples)
// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q]
function checker(tuples) {
	for (var k = 0; k < tuples.length; k++) {
		if ((tuples[k][0] + tuples[k][1] > tuples[k][2]) && (tuples[k][1] + tuples[k][2] > tuples[k][0]) && (tuples[k][2] + tuples[k][0] > tuples[k][1])) {
			console.log('hello')
		}
	}
}
checker(solution(arr))
// var start = arr[0]
// while(arr.length){
// 	for(var i=0;i<3;i++){

// 	console.log(arr[i])
// }
// 	arr.splice(1,1)


// }
//
// - set const to furthest left num
// - while const, keep outer look going
// - loop three times then cut the num next to const
// - when at end quit