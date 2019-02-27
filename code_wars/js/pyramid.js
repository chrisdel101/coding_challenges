function longestSlideDown(pyramid) {
	let lastArrLen = pyramid.slice(pyramid.length - 1)
		.reduce(
			function(accumulator, currentValue) {
				return accumulator.concat(currentValue);
			}, []
		).length
	let counter = 0
	// console.log(lastArrLen)
	let storeArr = []
	let state = {

	}
	for(var i = lastArrLen - 1; i >= lastArrLen - 2; i--) {
		let indexes = makeRange(counter)
		console.log('ind', indexes)
		// for (var k = 0;k < lastArrLen;k++) {
		//     state[`row${k}`] = pyramid[k]
		//     for (var m = 0; m < state[`row${k}`].length; m++) {
		//         console.log(state[`row${k}`][m])
		//     }
		// }
		console.log('state', state)
		var temp = []
		// looping backwards

		for(var j = lastArrLen - 1, m = 0; j >= 0, m < 4; j--, m++) {
			let row = pyramid[j]

			console.log('row', row[m])

			// if(row.length % )

			// get last elem
			console.log('j', j)
			// console.log('i', i)
			console.log('counter', counter)
			// // if(counter >= 1){
			// on first run down
			// let firstRow = pyramid[j]
			// console.log('ROW', row[counter])
			// }
			// if(state[j].length){
			//     e
			// } else {
			//     state[j].length = row.length
			// }
			// if(j === (lastArrLen - 1)){
			//     console.log(pyramid[j][counter])
			//     temp.push(pyramid[j][counter])
			// } else {
			//     temp.push(pyramid[j][0])
			//
			// }

		}
		counter++
		// console.log(state)
		// if(temp.length){
		storeArr.push(temp)

		function makeRange(num) {
			let arr = []
			while(num) {
				arr.push(num)
				num--
			}
			return arr
		}
		// }
	}
	return storeArr
}

console.log(longestSlideDown([
	[3],
	[7, 4],
	[2, 4, 6],
	[8, 5, 9, 3]
]))
// console.log(longestSlideDown([
//     // [2, 4, 6], [8, 5, 9, 3]
// ]))
function arraySlice(arr, index) {

}

//     4
//    3 4
//   7 4 3
//  2 4 6 4
// 8 5 9 3 5



// row 1 i

0
	[][][][]
1
	[1][][][]
2
	[2][1][][]
3
	[3][2][1][]