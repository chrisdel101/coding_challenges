function longestSlideDown(arrs) {

	// reverse arrs
	var clone1 = JSON.parse(JSON.stringify(arrs))
	var clone2 = JSON.parse(JSON.stringify(arrs))
		.map(arr => arr.reverse())

	// console.log(clone2)
	// console.log(arrs)
	// clone2 = arrs.map(arr => arr.reverse()).slice(0)

	let forward = getSlideRanges(clone1)
	let reverse = getSlideRanges(clone2)
	let combo = forward.concat(reverse)
	// console.log(combo)
	// / let flatten = store.reduce(
	// 	function(accumulator, currentValue) {
	// 		return accumulator.concat(currentValue);
	// 	},
	// 	[]
	// );
	// // console.log(forward) console.log(reverse)
	// // let reverse = getSlideRanges(reverseArrs)
	// // console.log(arrsRevCopy)
	// // console.log(reverseArrs)
	// // console.log(forward)
	// // console.log(reverse)
	//
	function returnHighest(arrs) {
		let highest = 0
		var initialValue = 0;
		var sums = arrs.map(arr => {
			var sum = arr.reduce((acc, current) => {
				return acc + current
			}, initialValue)
			if(sum > highest) {
				highest = sum
			}
			return sum
		})
		console.log('sums', sums)
		return highest
	}

	// console.log(sums)
	// return highest
	// // return store
	function getSlideRanges(arrs) {
		let counter = 0
		let indexOfLongest = arrs[arrs.length - 1].length - 1 - counter
		// count down index from end of longest row
		let k = 0
		let store = []
		while(k < arrs.length) {
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
					if(row[indexOfLongest]) {
						// console.log('IND this row', row[indexOfLongest])

						let sliced = row.splice(arrs[j].length - 1, 1)
						// console.log('sliced', sliced[0])
						tempArr.push(sliced[0])
						break
					} else {
						// else
						// console.log(tempArr)
						// console.log(row[j])
						tempArr.push(row[j])
					}
					// push()
					// console.log('store', store)
				}
				counter++
				// console.log('TA in creation', tempArr)
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
			console.log('TA', tempArr)
			store.push(tempArr)
		}
		// console.log('store', store)
		return store
	}
	return returnHighest(forward)
}

// console.log(longestSlideDown([
// 	[3],
// 	[7, 4],
// 	[2, 4, 6],
// 	[8, 5, 9, 3]
// ]))
console.log(longestSlideDown([
	//         	   [6],
	//           [7, 8],
	//         [1, 5,  16],
	//       [2, 4,  19, 21],
	//     [5, 13, 10, 6,  8],
	//   [7, 7,  5,  14, 20, 22],
	// [8, 8,  9,  3,  9,  10, 13]
]))
// 8, 9, 9, 10, 10
// console.log(longestSlideDown([
//                     	[75],
//                       [95, 64],
//                     [17, 47, 82],
//                   [18, 35, 87, 10],
//                 [20, 4, 82, 47, 65],
//                [19, 1, 23, 75, 3, 34],
//              [88, 2, 77, 73, 7, 63, 67],
//             [99, 65, 4, 28, 6, 16, 70, 92],
//           [41, 41, 26, 56, 83, 40, 80, 70, 33],
//         [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//        [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//     [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//   [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
// ]))
// [[75],
// 	[95, 64],
// 	[17, 47, 82],
// 	[18, 35, 87, 10],
// 	[20, 4, 82, 47, 65],
// 	[19, 1, 23, 75, 3, 34],
// 	[88, 2, 77, 73, 7, 63, 67],
// 	[99, 65, 4, 28, 6, 16, 70, 92],
// 	[41, 41, 26, 56, 83, 40, 80, 70, 33],
// 	[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
// 	[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
// 	[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
// 	[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
// 	[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
// 	[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]])

// 794, 852, 891, 738
console.log(longestSlideDown([
	[6],
	[7, 8],
	[1, 5, 16],
	[2, 4, 19, 21],
	[5, 13, 10, 6, 8],
	[7, 7, 5, 14, 20, 22],
	[8, 8, 9, 3, 9, 10, 13]
]))
//
[0][0][0]
[0][0][1]

[0][1][0]
[0][1][1]
[0][1][2]