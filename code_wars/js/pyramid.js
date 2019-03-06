function getAllIndexes(arrs) {
	let negativeDiff
	let postiveDiff
	let state = {
		activeRow: 0,
		resetWhileLoop: false
	}
	let k = 0
	let store = []
	while(k < 10) {
		console.log('K', k)


		let tempArr = []
		for(var i = arrs.length - 1; i >= 0; i--) {
			if(Object.entries(state).length === 2) {
				for(var l = arrs.length - 1; l >= 0; l--) {
					state[`row${l}`] = {
						length: arrs[l].length,
						index: 0,
						name: `row${l}`,
						backOneIndexes: []
					}
				}
			}
			if(i !== state.activeRow) {
				clearIndexes(i)
			}
			// clearIndexes()
			// console.log('next', state[`row${i+1}`])
			// console.log('ROW', state[`row${i}`])
			// console.log('loop i', i)
			if(i === state.activeRow) {
				console.log('Active', state[`row${i}`])

				// if(state[`row${i+1}`] && i !== 0 && i !== arrs.length - 1) {
				if(state[`row${i+1}`]) {
					// if more than two ahead or below of next row - needs to be first
					if(((state[`row${i}`].index) - (state[`row${i+1}`].index)) < -1 || ((state[`row${i}`].index) + (state[`row${i+1}`].index)) > 1) {
						console.log('NO PUSH. Just shift active to ' + state[`row${i+1}`].name)
						// shirt row down
						state.activeRow++
						// if not last i, remove this entire array
						if(i !== arrs.length - 1) {
							tempArr.splice(tempArr.length - 1, 1)
						}

						// console.log('more than two. Shift row to ' + state[`row${i+1}`].name)
						// reset loop to beginning
						i = arrs.length
						// state.resetWhileLoop = true
						continue

						// if is not end of the loop- but it's the end of the active row
						// }

					} else if(!arrs[i][state[`row${i}`].index + 1]) {
						// if next invalid push and then increase active row
						console.log('End of row: push and shift active ' + state[`row${i}`].name, arrs[i][state[`row${i}`].index])
						tempArr.push(arrs[i][state[`row${i}`].index])
						state.activeRow++

					} else {

						let currentRow = arrs[i]
						let activeRow = arrs[i - 1]
						let activeRowIndex = state[`row${i}`].index
						// if 0 index push and increase only
						if(state[`row${i}`].index === 0) {

							recurseZero(i, activeRowIndex, arrs, true)
							// if(arrs[i - 1][currentIndex]) {
							// 	console.log(`check above zero ${arrs[i - 1][currentIndex]}`)
							// 	tempArr.push(arrs[i - 1][currentIndex])
							// 	// increment to stop it starting again
							// 	i++
							// }

							changeIndex(state[`row${i}`])
						} else {
							// if back one row and one index
							if(arrs[i - 1][state[`row${i}`].index - 1] && !state[`row${state.activeRow}`].backOneIndexes.some(ind => {
									// console.log(ind)
									return ind <= state[`row${state.activeRow}`].index
								})) {
								console.log('back one')
								// console.log(state[`row${state.activeRow}`].index)
								// console.log(state[`row${state.activeRow}`].backOneIndexes.some(ind => {
								// console.log(ind)
								// ind <= state[`row${state.activeRow}`].index
								// }))
								// active indexs is the real acttive row$
								// shfting is the moving row
								// mark index as checked this action
								console.log('PUSH TO ARR', state[`row${i}`])
								state[`row${i}`].backOneIndexes.push(state[`row${i}`].index)


								recurseBackOne(i, activeRowIndex, arrs)

								let check = state[`row${state.activeRow}`].backOneIndexes.some(ind => {
									return ind <= state[`row${state.activeRow}`].index
								})

							}
							// checking if a row above exists, is not the top row, is backone index already
							else if(arrs[state.activeRow - 1][state[`row${state.activeRow}`].index] && state.activeRow !== 0 && state[`row${state.activeRow}`].backOneIndexes.some(ind => {
									return ind <= state[`row${state.activeRow}`].index
								})) {

								// console.log('ABOVE', arrs[state.activeRow - 1][state[`row${state.activeRow}`].index])

								if(arrs[state.activeRow - 1][state[`row${state.activeRow}`].index] && state[`row${state.activeRow}`].index !== 0) {
									console.log('UP ONE')
									// console.log(`push ${arrs[state.activeRow][state[`row${state.activeRow}`].index]}`)
									console.log('push current active', arrs[state.activeRow][state[`row${state.activeRow}`].index])
									tempArr.push(
										arrs[state.activeRow][state[`row${state.activeRow}`].index])
									// console.log(state[`row${state.activeRow}`])
									// change above index to match current if not the same
									if(state[`row${state.activeRow}`].index !== state[`row${state.activeRow-1}`].index) {
										state[`row${state.activeRow-1}`].index = state[`row${state.activeRow}`].index
									}
									changeIndex(state[`row${state.activeRow}`])
									// console.log(state[`row${state.activeRow-1}`])
									// state[`row${state.activeRow}`].index++

								}
								else if(arrs[i - 1][state[`row${state.activeRow}`].index + 1]) {
									console.log('over one')
									// console.log(upperRow[activeRowIndex + 1])
									// tempArr.push(arrs[i][state[`row${i}`].index])
									// tempArr.push(upperRow[activeRowIndex + 1])
									recurseOverOne(activeRowIndex)
									changeIndex(state[`row${i}`])
									break
								} else {
									tempArr.push(arrs[i][state[`row${i}`].index])
									changeIndex(state[`row${i}`])
								}
							}
						}
					}

				} else {
					console.log('inner K', k)
					if(!arrs[i][state[`row${i}`].index + 1]) {
						// if next invalid push and then increase active row
						console.log('End of row: push and shift active ' + state[`row${i}`].name, arrs[i][state[`row${i}`].index])
						tempArr.push(arrs[i][state[`row${i}`].index])
						state.activeRow++

					} else {

						let currentRow = arrs[i]
						let activeRow = arrs[i - 1]
						let activeRowIndex = state[`row${i}`].index
						// if 0 index push and increase only
						if(state[`row${i}`].index === 0) {

							recurseZero(i, activeRowIndex, arrs, true)

							changeIndex(state[`row${i}`])
						} else {
							// if back one row and one index
							// let currentIndex = state[`row${i}`].index
							if(arrs[i - 1][state[`row${i}`].index - 1] && !state[`row${state.activeRow}`].backOneIndexes.some(ind => {
									return ind <= state[`row${state.activeRow}`].index
								})) {
								console.log('back one')

								// active indexs is the real acttive row$
								// shfting is the moving row
								// mark index as checked this action
								console.log('pushed to arr', state[`row${i}`])
								state[`row${i}`].backOneIndexes.push(state[`row${i}`].index)
								recurseBackOne(i, activeRowIndex, arrs)
								// let check = state[`row${state.activeRow}`].backOneIndexes.some(ind => {
								// 	return ind <= state[`row${state.activeRow}`].index
								// })

							}
							// checking if a row above exists, is not the top row, is backone index already
							else if(arrs[state.activeRow - 1][state[`row${state.activeRow}`].index] && state.activeRow !== 0 && state[`row${state.activeRow}`].backOneIndexes.some(ind => {
									return ind <= state[`row${state.activeRow}`].index
								})) {

								// console.log('ABOVE', state[`row${state.activeRow -1}`])
								// console.log('ABOVE', arrs[state.activeRow - 1][state[`row${state.activeRow}`]])

								if(arrs[state.activeRow - 1][state[`row${state.activeRow}`].index] && state[`row${state.activeRow}`].index !== arrs.length - 1) {
									console.log('UP ONE')

									// console.log('push current active', arrs[state.activeRow][state[`row${state.activeRow}`].index])
									// tempArr.push(
									// 	arrs[state.activeRow][state[`row${state.activeRow}`].index])

									// change above index to match current if not the same
									if(state[`row${state.activeRow}`].index !== state[`row${state.activeRow-1}`].index) {
										state[`row${state.activeRow-1}`].index = state[`row${state.activeRow}`].index
									}

									// console.log(state[`row${state.activeRow-1}`])
									// state[`row${state.activeRow}`].index++
									if(state[`row${state.activeRow-1}`]) {
										// console.log(state[`row${state.activeRow}`])
										// push the current and recurse up one
										function recurseUpOne(i, currentIndex, arrs, firstCall) {
											if(!arrs[i - 1]) {
												return
											}
											if(arrs[i - 1][currentIndex]) {
												console.log(state)
												tempArr.push(arrs[i][currentIndex])
												console.log(`push up one val: ${arrs[i][currentIndex]}`)
												if(i > 0) {
													i--
													console.log('i shift up one:', i)
												} else {
													console.error('i shift back one- too low')
												}
												recurseUpOne(i - 1, currentIndex, arrs)
											}

										}
										recurseUpOne(state.activeRow, state[`row${state.activeRow}`].index, arrs)
									} else {
										changeIndex(state[`row${state.activeRow}`])
									}


								}
								else if(arrs[i - 1][state[`row${state.activeRow}`].index + 1]) {
									// console.log(arrs[i])
									console.log('over one')
									// console.log(upperRow[activeRowIndex + 1])
									// tempArr.push(arrs[i][state[`row${i}`].index])
									// tempArr.push(upperRow[activeRowIndex + 1])
									recurseOverOne(activeRowIndex)
									changeIndex(state[`row${i}`])
									break
								} else {
									tempArr.push(arrs[i][state[`row${i}`].index])
									changeIndex(state[`row${i}`])
								}
							}
						}
					}
				}
			} else {
				console.log('nothing', [state[`row${i}`]])
				tempArr.push(arrs[i][state[`row${i}`].index])
			}



			// if(i === state.activeRow && state[`row${i}`].index === state[`row${i}`].length - 1) {
			// 	console.log('fired')
			// 	state.activeRow++
			//
			// }
		}

		// console.log('Raised Index', state[`row${i}`].index)
		k++
		function clearIndexes(i) {
			// for(var i = arrs.length - 1; i >= 0; i--) {
			// 	console.log(i)
			// 	// state[`row${i}`].backOneIndexes = []
			// 	console.log(state)
			// }
			state[`row${i}`].backOneIndexes = []
		}

		function changeIndex(stateObj) {
			console.log('change index')
			let index
			// index cannot exceed length
			if(stateObj.index + 1 <= stateObj.length - 1) {
				stateObj.index++
			} else {
				console.log(`Indexes too low for ${stateObj.name}`)
			}
		}
		// function recurseUpOne()
		function recurseOverOne(i) {
			console.log('i', i)
			console.log('row', arrs[i])
			console.log('val', arrs[i][state[`row${i}`].index])
			let currentRow = arrs[i]
			let upperRow = arrs[i - 1]
			let currentIndex = state[`row${i}`].index
			// if a row up push current recurseOverOne
			if(upperRow) {
				if(upperRow[currentIndex + 1])
					tempArr.push(currentRow[currentIndex])
				console.log('push', currentRow[currentIndex])
				recurseOverOne(i - 1)
			} else {
				tempArr.push(currentRow[currentIndex])
				console.log('push last ', currentRow[currentIndex])
				return
			}
		}

		function recurseBackOne(rowShiftingIndex, activeIndex, arrs) {
			// console.log(arrs)
			// console.log('rowShiftingIndex', rowShiftingIndex)
			// console.log('activeIndex', activeIndex)
			// if a row up  and back push current and recurseBackOne
			if(arrs[rowShiftingIndex - 1]) {
				if(arrs[rowShiftingIndex - 1][activeIndex - 1]) {

					// actually decrement the outer loop
					if(i > 0) {
						i--
						console.log('i shift back one:', i)
					} else {
						console.error('i shift back one- too low')
					}
					// push current val and decrement row upwards for next call
					console.log(`push current val: ${arrs[rowShiftingIndex][activeIndex]}`)
					tempArr.push(arrs[rowShiftingIndex][activeIndex])
					// move up a row
					rowShiftingIndex = rowShiftingIndex - 1
					// move back an index
					activeIndex = activeIndex - 1

					recurseBackOne(rowShiftingIndex, activeIndex, arrs)
					// if up and over from original and zero index
				} else if(!arrs[rowShiftingIndex - 1][activeIndex - 1] && activeIndex === 0) {
					// console.log('CC', arrs[rowShiftingIndex][activeIndex])
					console.log(`push back one val: ${arrs[rowShiftingIndex][activeIndex]}`)
					tempArr.push(arrs[rowShiftingIndex][activeIndex])
					if(i > 0) {
						i--
						console.log('i shift back one zero', i)
					} else {
						console.error('TOO LOW')
					}
					// rowShiftingIndex = rowShiftingIndex - 1
					recurseZero(rowShiftingIndex, 0, arrs, false)
					return
				}
				// if up and over from orignal and not zero index
			} else {
				tempArr.push(arrs[rowShiftingIndex][rowShiftingIndex])
				console.log('push last ', arrs[rowShiftingIndex][rowShiftingIndex])
				return
			}
		}
		// checks the one currently on for a zero index above
		function recurseZero(rowShiftingIndex, acrossIndex, arrs, firstRun) {
			// if current one is zero, push it
			if(firstRun) {
				console.log('first recurse zero push ' + arrs[rowShiftingIndex][state[`row${rowShiftingIndex}`].index])
				tempArr.push(arrs[rowShiftingIndex][state[`row${rowShiftingIndex}`].index])
				changeIndex(state[`row${i}`])
			}
			if(!arrs[rowShiftingIndex - 1]) {

				// console.log('recurse zero end')
				return
			}
			// if something is above it
			if(arrs[rowShiftingIndex - 1][acrossIndex]) {
				// console.log('curent inde', acrossIndex)
				console.log(`push zero index val: ${arrs[rowShiftingIndex - 1][acrossIndex]}`)
				tempArr.push(arrs[rowShiftingIndex - 1][acrossIndex])
				// increment the loop to stop it starting again
				// console.log(i)
				if(i > 0) {
					i--
					console.log('i shift zero:', i)
				} else {
					console.error('i shift zero- too low')
				}

				rowShiftingIndex = rowShiftingIndex - 1
				recurseZero(rowShiftingIndex, acrossIndex, arrs, false)

			}

		}
		store.push(tempArr)
		console.log('DONE')
	}
	console.log(store)
	console.log(state)




}

getAllIndexes(

	[
		[3],
		[7, 4],
		[2, 4, 6],
		[8, 5, 9, 3]
		// [5, 13, 10, 6, 8],
		// ]))
	]
)
//
// function longestSlideDown(arrs) {
//
// 	// reverse arrs
// 	var clone1 = JSON.parse(JSON.stringify(arrs))
// 	var clone2 = JSON.parse(JSON.stringify(arrs))
// 		.map(arr => arr.reverse())
//
// 	// console.log(clone2)
// 	// console.log(arrs)
// 	// clone2 = arrs.map(arr => arr.reverse()).slice(0)
//
// 	let forward = getSlideRanges(clone1)
// 	let reverse = getSlideRanges(clone2)
// 	let combo = forward.concat(reverse)
// 	// console.log(combo)
// 	// / let flatten = store.reduce(
// 	// 	function(accumulator, currentValue) {
// 	// 		return accumulator.concat(currentValue);
// 	// 	},
// 	// 	[]
// 	// );
// 	// // console.log(forward) console.log(reverse)
// 	// // let reverse = getSlideRanges(reverseArrs)
// 	// // console.log(arrsRevCopy)
// 	// // console.log(reverseArrs)
// 	// // console.log(forward)
// 	// // console.log(reverse)
// 	//
// 	function returnHighest(arrs) {
// 		let highest = 0
// 		var initialValue = 0;
// 		var sums = arrs.map(arr => {
// 			var sum = arr.reduce((acc, current) => {
// 				return acc + current
// 			}, initialValue)
// 			if(sum > highest) {
// 				highest = sum
// 			}
// 			return sum
// 		})
// 		console.log('sums', sums)
// 		return highest
// 	}
//
// 	// console.log(sums)
// 	// return highest
// 	// // return store
// 	function getSlideRanges(arrs) {
// 		let counter = 0
// 		let indexOfLongest = arrs[arrs.length - 1].length - 1 - counter
// 		// count down index from end of longest row
// 		let k = 0
// 		let store = []
// 		while(k < arrs.length) {
// 			console.log('IND', indexOfLongest)
// 			// console.log(arrs)
// 			// console.log('RUN')
// 			// loop over every row
// 			let tempArr = []
// 			for(var i = arrs.length - 1; i >= 0; i--) {
// 				// console.log('i loop', i)
// 				// console.log('i',i)
// 				let row = arrs[i]
// 				// loop get the last index of each row
// 				for(var j = row.length - 1; j >= row.length - 1; j--) {
// 					// console.log('AAA',
// 					// row[j])
// 					// console.log('j', j)
// 					// if row has the index this hish, slice it off
// 					if(row[indexOfLongest]) {
// 						// console.log('IND this row', row[indexOfLongest])
//
// 						let sliced = row.splice(arrs[j].length - 1, 1)
// 						// console.log('sliced', sliced[0])
// 						tempArr.push(sliced[0])
// 						break
// 					} else {
// 						// else
// 						// console.log(tempArr)
// 						// console.log(row[j])
// 						tempArr.push(row[j])
// 					}
// 					// push()
// 					// console.log('store', store)
// 				}
// 				counter++
// 				// console.log('TA in creation', tempArr)
// 				// store.push(tcoempArr)conso
// 				// console.log('store', store)
//
// 			}
// 			indexOfLongest--
// 			k++
// 			// let flatten = store.reduce(
// 			// 	function(accumulator, currentValue) {
// 			// 		return accumulator.concat(currentValue);
// 			// 	},
// 			// 	[]
// 			// );
// 			console.log('TA', tempArr)
// 			store.push(tempArr)
// 		}
// 		// console.log('store', store)
// 		return store
// 	}
// 	return returnHighest(forward)
// }
//
//         // console.log(longestSlideDown([
//         // 	[3],
//         // 	[7, 4],
//         // 	[2, 4, 6],
//         // 	[8, 5, 9, 3]
//         // ]))
// console.log(longestSlideDown([
// 	//         	   [6],
// 	//           [7, 8],
// 	//         [1, 5,  16],
// 	//       [2, 4,  19, 21],
// 	//     [5, 13, 10, 6,  8],
// 	//   [7, 7,  5,  14, 20, 22],
// 	// [8, 8,  9,  3,  9,  10, 13]
// ]))
// // 8, 9, 9, 10, 10
// // console.log(longestSlideDown([
// //                     	[75],
// //                       [95, 64],
// //                     [17, 47, 82],
// //                   [18, 35, 87, 10],
// //                 [20, 4, 82, 47, 65],
// //                [19, 1, 23, 75, 3, 34],
// //              [88, 2, 77, 73, 7, 63, 67],
// //             [99, 65, 4, 28, 6, 16, 70, 92],
// //           [41, 41, 26, 56, 83, 40, 80, 70, 33],
// //         [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
// //        [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
// //     [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
// //    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
// //   [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
// //  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
// // ]))
// // [[75],
// // 	[95, 64],
// // 	[17, 47, 82],
// // 	[18, 35, 87, 10],
// // 	[20, 4, 82, 47, 65],
// // 	[19, 1, 23, 75, 3, 34],
// // 	[88, 2, 77, 73, 7, 63, 67],
// // 	[99, 65, 4, 28, 6, 16, 70, 92],
// // 	[41, 41, 26, 56, 83, 40, 80, 70, 33],
// // 	[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
// // 	[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
// // 	[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
// // 	[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
// // 	[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
// // 	[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]])
//
// // 794, 852, 891, 738
// console.log(longestSlideDown([
// 	[6],
// 	[7, 8],
// 	[1, 5, 16],
// 	[2, 4, 19, 21],
// 	[5, 13, 10, 6, 8],
// 	[7, 7, 5, 14, 20, 22],
// 	[8, 8, 9, 3, 9, 10, 13]
// ]))
// //
// [0][0][0]
// [0][0][1]
//
// [0][1][0]
// [0][1][1]
// [0][1][2]