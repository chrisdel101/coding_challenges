function simplify(poly) {
	console.log(poly)
	poly = poly.split('')
	let obj = {}
	// recurce get alll preceding digits for coeff
	function getAllDigits(arr, i, increment, str) {
		if(isNaN(arr[i - increment])) {
			// if starts with minus sign add to return
			if(arr[i - increment] === "-") {
				let split = str.split("")
					.reverse()
					.join("")
				str = `${-split}`
				return str
				// else not minus sign
			} else {
				return str.split("")
					.reverse()
					.join("")
			}
		}
		// check if number and add to string
		if(!isNaN(arr[i - increment])) {
			str += arr[i - increment]
			return getAllDigits(arr, i, increment + 1, str)
		}
	}
	for(var i = 0; i < poly.length; i++) {
		let char = poly[i]
		// if NOT a plus / minus
		// if PREVIOUS WAS NOT a plus or minus - no sign
		// if NOT a digit
		if((char !== "+" && char !== "-") && (poly[i - 1] !== "+" && poly[i - 1] !== "-") && isNaN(char)) {
			// if coeffecient
			let coeffecient
			if(!isNaN(poly[i - 1])) {
				coeffecient = parseInt(getAllDigits(poly, i, 1, ""))
			}
			let chunkBetween = ""
			let k = i
			let searching = true
			// make substr out of section
			while(searching) {
				let next = poly[k + 1]
				chunkBetween += poly[k]
				// look ahead for break
				if(next === "+" || next === "-" || !isNaN(next) || next === undefined) {
					i = k
					searching = false
					break
				}
				k++
			}
			// use substing to make key/val
			if(!obj[chunkBetween]) {
				if(coeffecient) {
					obj[chunkBetween] = {
						value: coeffecient
					}
				} else if(coeffecient === 0) {
					obj[chunkBetween] = {
						value: 0
					}
				} else {
					obj[chunkBetween] = {
						value: 1
					}
				}
			} else {
				if(coeffecient) {
					obj[chunkBetween].value += coeffecient
				} else if(coeffecient === 0) {
					obj[chunkBetween].value = 0

				} else {
					obj[chunkBetween].value++
				}
			}
			// if NOT a plus/minus
			// if PREVIOUS WAS a plus or minus
			// if is NOT A DIGIT - get the ones after unitl operator or digit
		} else if((char !== "+" && char !== "-") && (poly[i - 1] === "+" || poly[i - 1] === "-") && isNaN(char)) {
			let chunkBetween = ""
			let k = i
			let sign = poly[i - 1]
			let searching = true
			// check if next is opertator, number, or end of line
			// get all nums until it hits cond
			while(searching) {
				console.log('k', k)
				let next = poly[k + 1]
				console.log('next', next)
				console.log('current', poly[k])
				console.log('chunkBetween', chunkBetween)
				if((next === "+" || next === "-" || !isNaN(next) || next === undefined)) {
					i = k
					chunkBetween += poly[k]
					searching = false
					break
				}
				chunkBetween += poly[k]
				k++
			}
			console.log('char', chunkBetween)
			if(!obj[chunkBetween]) {
				if(sign === "-") {
					obj[chunkBetween] = {
						value: -1,
					}
				} else if(sign === "+") {
					obj[chunkBetween] = {
						value: 1,
					}

				}

			} else {
				if(sign === "-") {
					obj[chunkBetween].value--
				} else {
					obj[chunkBetween].value++
				}
			}
		}

		// if not a plus/minus
		// if prevoious was a plus or minus
		// if IS a digit - get the ones after unitl operatrot or digit
	}
	// sort the keys
	let arr = []
	for(let key in obj) {
		// make arr and sort keys
		let ordered = key.split('')
			.sort()
			.join("")
		// check that new key is diff - don't delete the only one
		if(ordered !== key) {
			// if new key is same as existing one, add them together
			if(obj[ordered]) {
				obj[ordered].value += obj[key].value
			} else {
				// else create, delete and push
				obj[ordered] = obj[key]
				delete obj[key]
				arr.push(ordered)
			}
		} else {
			arr.push(key)
		}
	}
	// sort up to two letters in
	function sortArr(arr, j) {
		//first pass shift items
		let temp
		if(!arr[i + 1]) {
			return arr
		}
		for(let [i, val] of arr.entries()) {
			if(arr[i + 1]) {
				// sort by length
				if(val.length > arr[i + 1].length) {
					temp = val
					arr[i] = arr[i + 1]
					arr[i + 1] = temp
					// if equal sort by alpha by first letter
				} else if(val.length === arr[i + 1].length) {
					if(val[0] > arr[i + 1][0]) {
						temp = val
						arr[i] = arr[i + 1]
						arr[i + 1] = temp
						// if first equal try second
					} else if(val[0] === arr[i + 1][0] && val[1] > arr[i + 1][1]) {
						temp = val
						arr[i] = arr[i + 1]
						arr[i + 1] = temp
					}
				}
			}
		}
		console.log(arr)
		// second pass, if not in order recurse
		for(let [i, val] of arr.entries()) {
			let temp
			if(arr[i + 1]) {
				// break if already in order
				if(val.length < arr[i + 1].length) {
					break
				}
				// sort by length first
				console.log(j)
				console.log('val', val, "is greater than",
					arr[i + 1][j], val[j] > arr[i + 1][j])
				if(val.length > arr[i + 1].length) {
					temp = val
					arr[i] = arr[i + 1]
					arr[i + 1] = temp
					// sort by first letter
				} else if((val.length === arr[i + 1].length) && val[j] > arr[i + 1][j]) {
					temp = val
					arr[i] = arr[i + 1]
					arr[i + 1] = temp
					return 'DONE'
					// sort by second letter
				} else {
					sortArr(arr, j + 1)
				}
				// else if((val.length === arr[i + 1].length) && (val[0] <= arr[i + 1][0]) && (val[1] > arr[i + 1][1])) {
				// 	console.log('HERE')
				// 	temp = val
				// 	console.log(temp)
				// 	arr[i] = arr[i + 1]
				// 	arr[i + 1] = temp
				// }

			}
		}
		return arr
	}
	arr = sortArr(arr, 0)
	let str = ""
	let newArr = []
	arr.forEach(key => {
		console.log('key', key)
		if(obj[key].value !== 0) {
			// if has a negtive sign in front add it
			newArr.push(
				//if sting starts with minus - don't add anything
				// add plus symbol to positive
				//if val is not 1/-1 print it
				// if value is less than 1 include -
				`${String(obj[key].value)[0] === "-" ? "" : "+"}${obj[key].value !== 1 && obj[key].value !== -1 ?  obj[key].value : ""}${obj[key].value !== -1  ? "" : "-"}${key}`)

		}
	})
	let mathStr = newArr.join("")
	if(mathStr[0] === "+") {
		// slice if + sign
		mathStr = mathStr.slice(1, mathStr.length)
	}


	return mathStr
}


simplify("-a+5ab+3a-c-2a")