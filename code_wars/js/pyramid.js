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

// console.log(longestSlideDown([
// 	[3],
// 	[7, 4],
// 	[2, 4, 6],
// 	[8, 5, 9, 3]
// ]))
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

let counter = 0

function arrIndex(arrs) {

	// count down index from end of longest row
	let indexOfLongest = arrs[arrs.length - 1].length - 1 - counter
	// reverse arrs
	arrs.every(arr => arr.reverse())
	let k = 0
	let store = []
	while(k < 1) {
		console.log('IND', indexOfLongest)
		// console.log(arrs)
		// console.log('RUN')
		// loop over every row
		let tempArr = []
		for(var i = arrs.length - 1; i >= 0; i--) {
			// console.log('i loop', i)
			// console.log('i',i)
			let row = arrs[i]
			// loop get the last index of each row
			for(var j = row.length - 1; j >= row.length - 1; j--) {
				// console.log('AAA',
				// row[j])
				// console.log('j', j)
				// if row has the index this hish, slice it off
				// if(row[indexOfLongest]) {
				// 	let sliced = row.splice(arrs[j].length - 1, 1)
				// 	// console.log('sliced', sliced[0])
				// 	tempArr.push(sliced[0])
				// 	break
				// } else {
				// 	// else
				// 	console.log(tempArr)
				console.log(row[j])
				tempArr.push(row[j])
				// }
				// push()
				// console.log('store', store)
			}
			counter++
			console.log('TA', tempArr)
			// store.push(tcoempArr)conso
			// console.log('store', store)

		}
		indexOfLongest--
		k++
		// let flatten = store.reduce(
		// 	function(accumulator, currentValue) {
		// 		return accumulator.concat(currentValue);
		// 	},
		// 	[]
		// );
		store.push(tempArr)
		console.log('store', store)
	}
	// return store
}

console.log(arrIndex([
	[3],
	[7, 4],
	[2, 4, 6],
	[8, 5, 9, 3]
]))