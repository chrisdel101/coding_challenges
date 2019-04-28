// check long against short
function LCS2(str1, str2) {
	let previousIndex2
	let currentIndex2
	// get short and long str
	let { shortestName, longestName } = stringLen(str1, str2)
	shortestName = stringLen(str1, str2).shortestVal
	longestName = stringLen(str1, str2).longestVal
	// loop over longer str - for now use low number
	let indexShort
	let indexLong
	let subStr
	let arr = []

	let longestNameCopy1 = longestName.slice()
	let longestNameCopy2 = longestNameCopy1.slice()
	let fullSubstring
	let k = 0
	// while(k < longestName.length) {
	while(k < 2) {
		let i = 0
		console.log('START', longestNameCopy1)
		subStr = ""
		let tempArr = []
		let count = countInstances(shortestName)
		console.log(count)
		let shortestNameCopy = shortestName.slice()
		fullSubstring = ""

		function makeSubtr(shortCopy, longCopy, shortIndex) {
			indexShort = shortCopy.indexOf(longCopy[0])
			// start make subStr of shorter str on each round - remove starting letter
			shortCopy = shortCopy.substring(indexShort + 1, shortCopy.length)
			return shortCopy
		}

		function getLetters(subString, longString) {
			console.log('subStr', subString)
			if(!longString) {
				return
			}
			if(subString.includes(longString[0])) {
				console.log('includes', longString[0])
				console.log('includes', subString)
				// get index of letter in both strs
				indexShort = shortestNameCopy.indexOf(longString[0])
				// copy full substr
				if(!fullSubstring) {
					fullSubstring = shortestNameCopy.substring(indexShort, shortestNameCopy.length)
				}
				// make subString of shorter str on each round -remove firrst letter
				subString = makeSubtr(subString, longString[0], indexShort)
				// console.log('sub', subString)
				// push to store
				tempArr.push(longString[0])
				count[longString[0]].count--

				longString = shiftString(longString)
				console.log('long', longString)
				getLetters(subString, longString)
			} else {
				console.log('nothing')
				longString = shiftString(longString)
				getLetters(subString, longString)
			}
			console.log('tempArr', tempArr)
		}
		getLetters(shortestNameCopy, longestNameCopy1)
		// while(longestNameCopy1) {
		// 	console.log("\n")
		// 	console.log('long', longestNameCopy1[0])
		// 	// if shortsub includes letter of long
		// 	if(shortestNameCopy.includes(longestNameCopy1[0])) {
		// 		console.log('top', longestNameCopy1[0])
		// 		// get index of letter in both strs
		// 		indexShort = shortestNameCopy.indexOf(longestNameCopy1[0])
		// 		// console.log('short', indexShort + 1)
		// 		indexLong = longestNameCopy1.indexOf(longestNameCopy1[0])
		// 		// copy full substr
		// 		if(!fullSubstring) {
		// 			fullSubstring = shortestNameCopy.substring(indexShort, shortestNameCopy.length)
		// 		}
		// 		// make subStr of shorter str on each round -remove firrst letter
		// 		shortestNameCopy = shortestNameCopy.substring(indexShort + 1, shortestNameCopy.length)
		// 		console.log('sub', shortestNameCopy)
		// 		// push to store
		// 		tempArr.push(longestNameCopy1[0])
		// 		count[longestNameCopy1[0]].count--
		//
		// 		longestNameCopy1 = shiftString(longestNameCopy1)
		// 	} //else if(
		// 	// 	subStr && subStr.includes(longestNameCopy1[0]) &&
		// 	// 	count[longestNameCopy1[0]].count
		// 	// ) {
		// 	// 	console.log('bottom')
		// 	// 	// console.log(count)
		// 	// 	// console.log(longestNameCopy1[0])
		// 	// 	// console.log(indexLong)
		// 	// 	addIndexToCount(count, longestNameCopy1[0], indexLong)
		// 	//
		// 	// 	count[longestNameCopy1[0]].count--
		// 	// 	console.log('BEFORE', longestNameCopy1)
		// 	// 	tempArr.push(longestNameCopy1[0])
		// 	// 	longestNameCopy1 = shiftString(longestNameCopy1)
		// 	//
		// 	// 	console.log('AFTER', longestNameCopy1)
		// 	// 	console.log(i)
		// 	//
		// 	//}
		// 	else {
		// 		console.log('nothing')
		// 		longestNameCopy1 = shiftString(longestNameCopy1)
		//
		// 	}
		// 	// check if substr is in other
		// }

		console.log('full', fullSubstring)
		Object.values(count).map((val, i) => {
			console.log('VAL', Object.keys(count)[i], val)
			if(val.count) {
				if(fullSubstring.includes(Object.keys(count)[i])) {
					console.log('\n')
					let newSub = stringSplice(fullSubstring, fullSubstring.indexOf(Object.keys(count)[i]))
					if(tempArr.length) {
						arr.push(tempArr)
						tempArr = []
						console.log('push to arr', arr)
					}
					console.log('letter to check', Object.keys(count)[i])
					getLetters(newSub, longestNameCopy1)

				}
			}
		})
		// check count left
		// Object.keys(count).map(key => {
		// 	console.log(key)
		// 	// if(fullSubstring.includes(key)) {
		// 	// 	console.log('key', key)
		// 	// }
		// })
		console.log(count)
		// recopy full long string
		longestNameCopy2 = shiftString(longestNameCopy2)
		longestNameCopy1 = longestNameCopy2
		arr.push(tempArr)
		count = countInstances(shortestName)
		k++
	}
	console.log(arr)
}

function stringSplice(str, index) {
	let newSub = str.split('')
	newSub.splice(index, 1)
	newSub = newSub.join('')
	return newSub
}

function stringLen(str1, str2) {
	if(str1.length <= str2.length) {
		return {
			shortestVal: str1,
			longesValt: str2,
			shortestStr: 'str1',
			longestName: 'str2'
		}
	} else {
		return {
			shortestVal: str2,
			longestVal: str1,
			shortestName: 'str2',
			longestName: 'str1'
		}
	}
}

function countInstances(str) {
	let count = {}
	for(var i = 0; i < str.length; i++) {

		if(!count[str[i]]) {
			count[str[i]] = {
				count: 1
			}
		} else {
			count[str[i]].count++
		}
	}
	// console.log('CCC', count)
	return count
}
// countInstances("notatest")

function shiftString(str) {
	str = str.split('')
	str.shift()
	return str.join('')

}
// console.log(shiftString("anothertest"))
LCS2("anothertest", "notatest") //not est ts
// function makeSubtr(str, index){
//     let s = str.subString(index, str.leng)
// }
function addIndexToCount(obj, key, index) {
	// console.log("\n")
	// console.log('key', key)
	// console.log('index', index)
	// console.log('obj', obj)
	if(!obj[key]['index']) {
		obj[key]['index'] = [index]
	} else {
		obj[key]['index'].push(index)
	}
	console.log(obj)
	return obj
}
// ['a','n']
// notatest
// anothertest
// includes a => true
// index1 = 0
// index2 = 3
//
// str2. includes => true
// index1 = 1
// index2 = 0let
//
// function LCS(str1, str2) {
// 	// console.log("K", k)
// 	let arr = []
// 	// console.log(count)
// 	if(!stringLen(str1, str2).longest || k > 6) {
// 		console.log('DONE')
// 		return
// 	}
// 	const count = countInstances(str2)
// 	let previousIndex2
// 	let currentIndex2
// 	for(var i = 0; i < 5; i++) {
// 		// if length is one
// 		// if(i === str.length - 1){
// 		//     arr.push(str[i])
// 		// let slice = str.slice(i, str.length)
// 		// console.log(arr)
// 		console.log('previousIndex2 string2', previousIndex2)
// 		console.log('currentIndex2 string2', currentIndex2)
// 		// make substring of one of the strs
// 		let substr = str2.substring(currentIndex2, str2.length)
// 		console.log('sub', substr)
// 		console.log('str[i]', str1[i])
// 		console.log('')
// 		// check if substr is in other
// 		if(substr.includes(str1[i])) {
// 			// index of previous in str2
// 			previousIndex2 = str2.indexOf(str1[i - 1])
// 			// index of current str2
// 			currentIndex2 = str2.indexOf(str1[i])
// 			let previousVal1 = str1[i - 1]
// 			let currentVal1 = str1[i]
//
// 			console.log('previousVal1 string1', previousVal1)
// 			console.log('currentVal1 string1', currentVal1)
// 			console.log('count val', count[currentVal1])
// 			// LCS("anothertest", "not atest")
//
// 			// find current letter in substring - can only find letters after this
// 			if(currentIndex2 > previousIndex2 && count[currentVal1]) {
// 				console.log('str[i] push', str1[i])
// 				arr.push(str1[i])
// 				count[currentVal1]--
// 			} else if(currentIndex2 < previousIndex2 && count[currentVal1]) {
// 				console.log('HERE')
// 				if(previousIndex2) {
// 					console.log('arr', arr)
// 					let temp = currentVal1
// 					console.log('temp previousVal1', previousVal1)
// 					console.log('temp currentVal1', currentVal1)
//
// 					arr[i - 1] = currentVal1
// 					arr[i] = previousVal1
// 					// currentVal1 = previousVal1
// 					// previousVal1 = temp
// 					// console.log('K', arr)
// 					// console.log('str[i] push', str1[i])
// 					// arr.push(str1[i])
// 					count[currentVal1]--
// 				}
// 			}
// 		}
//
// 	}
// 	// console.log('STR1', str1)
// 	var split = stringLen(str1, str2).longest.split("")
// 	split.shift()
//
// 	console.log(stringLen(str1, str2).longest)
// 	let longer = eval(stringLen(str1, str2).longestName)
// 	longer = split.join("")
// 	console.log('LONGER', longer)
// 	k++
// 	LCS(longer, str2)
//
// 	// return arr.join('')
// }
// LCS("anothertest", "notatest")


// countInstances("132535365")

//
// function LCS(str1,str2){
//     let arr = []
//     const count = countInstances(str2)
//     console.log(count)
//     for (var i = 0; i < str1.length; i++) {
//         // if length is one
//         // if(i === str.length - 1){
//         //     arr.push(str[i])
//         // let slice = str.slice(i, str.length)
//         console.log(arr)
//         if(str2.includes(str1[i])){
//             let previousIndex2 = str2.indexOf(str1[i-1])
//             let currentIndex2 = str2.indexOf(str1[i])
//             let previousVal1 = str1[i-1]
//             let currentVal1 = str1[i]
//             console.log('previousIndex2', previousIndex2)
//             console.log('currentIndex2', currentIndex2)
//             console.log('previousVal1',previousVal1)
//             console.log('currentVal1',currentVal1)
//             console.log('count val', count[currentVal1])
//             if(currentIndex2 > previousIndex2 && count[currentVal1]){
//                 // console.log('str[i] push', str1[i])
//                 arr.push(str1[i])
//                 count[currentVal1]--
//             } else if(currentIndex2 < previousIndex2 && count[currentVal1]){
//                 if(previousIndex2){
//                     console.log('arr',arr)
//                     let temp = currentVal1
//                     // console.log('previousVal1',previousVal1)
//                     // console.log('currentVal1',currentVal1)
//
//                     arr[i - 1] = currentVal1
//                     arr[i] = previousVal1
//                     // currentVal1 = previousVal1
//                     // previousVal1 = temp
//                     console.log(arr)
//                     // console.log('str[i] push', str1[i])
//                     // arr.push(str1[i])
//                     count[currentVal1]--
//                 }
//             }
//         }
//
//     }
//     return arr.join('')
// }