function simplify(poly) {
	poly = poly.split('')
	// console.log(poly)
	let obj = {}
	for(var i = 0; i < poly.length; i++) {
		// console.log('I', i)
		let char = poly[i]
		// if not a plus / minus
		// if prevoious was a not plus or minus - no sign
		// if not a digit
		if((char !== "+" && char !== "-") && (poly[i - 1] !== "+" && poly[i - 1] !== "-") && isNaN(char)) {
			// if coeffecient
			let coeffecient
			if(!isNaN(poly[i - 1])) {
				let sign
				// console.log('insider')
				if(poly[i - 2]) {
					sign = poly[i - 2]
					coeffecient = parseInt(sign + poly[i - 1])
				} else {
					coeffecient = parseInt(poly[i - 1])

				}
				// console.log(coeffecient)
			}
			let chunkBetween = ""
			let k = i
			// console.log('last', poly[i - 1])
			let searching = true
			while(searching) {
				let next = poly[k + 1]
				chunkBetween += poly[k]
				// console.log('cc', chunkBetween)
				// console.log('K', k)
				// console.log('i', i)
				if(next === "+" || next === "-" || !isNaN(next) || next === undefined) {
					i = k
					// console.log('redefine i', i)
					searching = false
					break
				}
				k++
			}
			// console.log('OBJ', obj[chunkBetween])
			// console.log('OBJ', coeffecient)
			if(!obj[chunkBetween]) {
				if(coeffecient) {
					obj[chunkBetween] = {
						value: coeffecient
					}
				} else {
					obj[chunkBetween] = {
						value: 1
					}
				}
			} else {
				if(coeffecient) {
					obj[chunkBetween].value += coeffecient
				} else {
					obj[chunkBetween].value++
				}
			}
			// console.log('obj top', obj)
			// if not a plus/minus
			// if prevoious was a plus or minus
			// if is a not digit - get the ones after unitl operatrot or digit
		} else if((char !== "+" && char !== "-") && (poly[i - 1] === "+" || poly[i - 1] === "-") && isNaN(char)) {
			// console.log("HERE char", char)
			let chunkBetween = ""
			let k = i
			let sign = poly[i - 1]
			let coeffecient
			if(!isNaN(poly[i - 1])) {
				let sign
				// console.log('insider')
				if(poly[i - 2]) {
					sign = poly[i - 2]
					coeffecient = parseInt(sign + poly[i - 1])
				} else {
					coeffecient = parseInt(sinpoly[i - 1])

				}
				// console.log(coeffecient)
			}
			let searching = true
			// check if next is opertator, number, or end of line
			// get all nums until it hits cond
			while(searching) {
				// console.log('k', k)
				let next = poly[k + 1]
				// console.log('nex', next)
				// console.log('current', poly[k])
				// console.log('NEX/T', chunkBetween)
				if((next === "+" || next === "-" || !isNaN(next) || next === undefined) && chunkBetween !== "") {
					i = k
					chunkBetween += poly[k]
					// console.log('redefine i', i)
					searching = false
					// if(poly[k]) {
					// 	chunkBetween += poly[k]
					// 	console.log('chunk', chunkBetween)
					//
					// }
					break
				}
				chunkBetween += poly[k]
				// console.log('chunk btw', chunkBetween)
				k++
			}
			// console.log('char', chunkBetween)
			// console.log('sign', sign)
			if(!obj[chunkBetween]) {
				if(coeffecient) {
					obj[chunkBetween] = {
						value: coeffecient,
						sign: sign
					}
				} else if(!coeffecient && sign === "-") {
					obj[chunkBetween] = {
						value: -1,
						sign: sign
					}
				} else if(!coeffecient && sign === "+") {
					obj[chunkBetween] = {
						value: 1,
						sign: sign
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
	// /make arr
	let arr = []
	for(let key in obj) {
		// make arr and sort keys
		let ordered = key.split('')
			.sort()
			.join("")
		// check that new key is diff - don't delete the only one
		if(ordered !== key) {
			// add new obj w keys
			console.log('IN', obj[key])
			obj[ordered] = obj[key]
			console.log('IN', obj[ordered])
			// del old key
			delete obj[key]
			arr.push(ordered)
		} else {
			arr.push(key)
		}
		// console.log(key)

	}
	// console.log('A', arr)

	function sortArr(arr) {
		//first pass shift items
		let temp
		for(let [i, val] of arr.entries()) {
			if(arr[i + 1]) {
				// sort by length
				if(val.length > arr[i + 1].length) {
					temp = val
					arr[i] = arr[i + 1]
					arr[i + 1] = temp
					// console.log(arr)
					// store.push(arr)
					// if equal sort by alpah
				} else if(val.length === arr[i + 1].length) {
					if(val[0] > arr[i + 1][0]) {
						temp = val
						arr[i] = arr[i + 1]
						arr[i + 1] = temp
					}
				}
			}
		}
		// second pass, if not in order recurse
		for(let [i, val] of arr.entries()) {
			if(arr[i + 1]) {
				if(val.length > arr[i + 1].length) {
					// sortArr(arr)

				}

			}
			// }

		}
	}
	sortArr(arr)
	console.log('arr', arr)
	// make a string
	// let arr = []

	for(let key in obj) {
		// console.log(key)
		let i = 0



		// if(obj[key].sign) {
		// 	str += `${obj[key].sign}${obj[key].value > 1 ?  obj[key].value : ""}${key}`
		// } else {
		// 	str += `+${obj[key].value > 1 ?  obj[key].value : ""}${key}`
		// }
		// console.log(obj[key])
	}

	// console.log(str)
	console.log(obj)
}


simplify("-y+x")
// simplify("xzy+zby")