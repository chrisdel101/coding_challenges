// function flattenAll(arr) {
// 	console.log('start', arr)
//
// 	var tempArr = []
// 	let anyArrays = false
// 	arr.forEach(item => {
// 		console.log('inside')
// 		if(Array.isArray(item)) {
// 			anyArrays = true
// 			// console.log('item',item)
// 			// anyArrays = true
// 			tempArr.push(...item)
// 		} else {
// 			tempArr.push(item)
// 		}
// 	})
// 	console.log('arr after')
// 	console.log('anyArrays', anyArrays)
// 	console.log('TA', tempArr)
// 	if(!anyArrays) {
// 		// console.log('here')
// 		return "Hello"
// 	}
// 	flattenAll(tempArr)
// }
//
// console.log(flattenAll([
// 	[1, 2],
// 	[7, 8, [890, 889, [87, 98]]]
// ]))

function flattenAll(arr) {
	var tempArr = []
	let anyArrays = false
	arr.forEach(item => {
		if(Array.isArray(item)) {
			anyArrays = true
			tempArr.push(...item)
		} else {
			tempArr.push(item)
		}
	})
	if(!anyArrays) {
		return tempArr
	}
	return flattenAll(tempArr)
}

console.log(flattenAll([
	[1, 2],
	[7, 8, [890, 889, [87, 98]]]
]))