// - remove first letter of longer string on each iteration
// - start from that first letter forward as a substring of the short string
// - if leftover letters are not matched, re-run with each of those removed from the long string, getting all iterations

function LCS2(str1, str2) {
	// get short and long str
	let { shortestName, longestName } = stringLen(str1, str2)
	shortestName = stringLen(str1, str2).shortestVal
	longestName = stringLen(str1, str2).longestVal
	let indexShort
	let arr = []
	let longestNameCopy1 = longestName.slice()
	let longestNameCopy2 = longestNameCopy1.slice()
	let k = 0
	let count = countInstances(longestName)
	// keep copy of original count
	const originalCount = JSON.parse(JSON.stringify(count))
	while(longestNameCopy1) {
		let i = 0
		// reset substr each loop
		let subStr = ""
		// keep each iteration in temp arr
		let tempArr = []
		let shortestNameCopy = shortestName.slice()
		// keep copy of fullSubstr
		let fullSubstring = ""

		// start substring from found letter forward
		function makeSubtr(shortCopy, longCopy, shortIndex) {
			indexShort = shortCopy.indexOf(longCopy[0])
			// start make subStr of shorter str on each round - remove starting letter
			shortCopy = shortCopy.substring(indexShort + 1, shortCopy.length)
			return shortCopy
		}

		function getLetters(subString, longString, count) {
			if(!longString) {
				return
			}
			// check if substring includes longString part
			if(subString.includes(longString[0])) {
				// get index of letter in of shorter
				indexShort = shortestNameCopy.indexOf(longString[0])
				// copy full substr to above
				if(!fullSubstring) {
					fullSubstring = shortestNameCopy.substring(indexShort, shortestNameCopy.length)
				}
				// make subString of shorter str on each round -remove first letter
				subString = makeSubtr(subString, longString[0], indexShort)
				// push to store
				tempArr.push(longString[0])
				// decrement count
				count[longString[0]].count--
				// shift first char off long
				longString = shiftString(longString)
			} else {
				longString = shiftString(longString)
			}
			getLetters(subString, longString, count)
		}
		getLetters(shortestNameCopy, longestNameCopy1, count)
		// check if any part of count is left
		Object.values(count).forEach((val, i) => {
			let value = Object.keys(count)[i]
			// check if values are in the substring
			if(val.count > 0 && fullSubstring.includes(value)) {
				let charIndexes = getCharIndexes(longestNameCopy1, value)
				// splice each index out of the longestName and rerun
				charIndexes.forEach(index => {
					let newLong = stringSplice(longestNameCopy1, index)
					if(tempArr.length) {
						arr.push(tempArr)
						tempArr = []
					}
					let countCopy = JSON.parse(JSON.stringify(originalCount))
					// recall with long with removed index and full count
					getLetters(fullSubstring, newLong, countCopy)
				})
			}

		})
		// decrease long string by one
		longestNameCopy2 = shiftString(longestNameCopy2)
		longestNameCopy1 = longestNameCopy2
		arr.push(tempArr)
		// recalc count obj
		count = countInstances(longestName)
		k++
	}
	// find the longest string
	function findLongest() {
		let longestLen = 0
		let longest = ""
		arr.forEach(i => {
			if(i.length > longestLen) {
				longestLen = i.length
				longest = i
			}
		})
		return longest ? longest.join('') : longest
	}
	return findLongest(arr)
}

function getCharIndexes(str, char) {
	var indexes = []
	for(var i in str) {
		if(str[i] === char) {
			indexes.push(i)
		}
	}
	return indexes
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
			longestVal: str2,
			shortestName: 'str1',
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
	return count
}

function shiftString(str) {
	str = str.split('')
	str.shift()
	return str.join('')

}

function addIndexToCount(obj, key, index) {
	if(!obj[key]['index']) {
		obj[key]['index'] = [index]
	} else {
		obj[key]['index'].push(index)
	}
	console.log(obj)
	return obj
}



// console.log(shiftString("anothertest"))
LCS2("anothertest", "notatest") //not est ts
// function makeSubtr(str, index){
//     let s = str.subString(index, str.leng)
// }