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
let i = 0
let j = 0
let k = 0
// let start = arr[0]
// make arrCopy
while (arr.length > 1) {
	// make copy
	let arrCopy = arr.slice()
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

			// start

		}
	}
	// console.log('out')
	console.log('k', k)
	// after runing FIRST rip, splice of first num
	// arr.splice(0, 1)
	// after runing SECOND rip, splice of first num
	arr.splice(1, 1)
	k++
	console.log('arr len', arr.length)
	console.log(tuples)
}

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