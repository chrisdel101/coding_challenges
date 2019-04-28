    // function solution(arr) {
    // 	console.log(arr)
    // 	if(arr.length === 1) return arr[0] + 1
    // 	let diffs = []
    // 	let obj = {}
    // 	arr = arr.sort((a, b) => a - b)
    // 	// remove duplicates
    // 	let uniq = [...new Set(arr)];
    // 	// make array of difs between all values
    // 	for(var i = 0; i < uniq.length; i++) {
    // 		let current = uniq[i]
    // 		// console.log(current)
    // 		let next = uniq[i + 1]
    // 		if(next) {
    // 			let diff = next - current
    // 			diffs.push(diff)
    // 		}
    // 	}
    // 	// console.log(diffs)
    // 	// count instances of each diff
    // 	let uniqDiffOccurences = ""
    // 	if(arr.length > 1) {
    // 		var newDiffs = diffs.reduce(function(allDiffs, diff) {
    // 			if(diff in allDiffs) {
    // 				allDiffs[diff]++;
    // 			} else {
    // 				allDiffs[diff] = 1;
    // 			}
    // 			return allDiffs;
    // 		}, {});
    // 		// console.log('ND', newDiffs)
    // 		uniqDiffOccurences = Object.values(newDiffs).reduce((acc, cur) => {
    // 			// console.log('curr', cur)
    // 			// console.log('acc', acc)
    // 			if(Object.values(newDiffs).length === 1) {
    // 				// console.log('only one diff')
    // 				return acc
    // 			}
    // 			if(acc < cur) {
    // 				return acc
    // 			} else if(cur < acc) {
    // 				acc = cur
    // 				// console.log('acc', acc)
    // 			}
    // 			return acc
    // 		})
    // 	}
    // 	// console.log('UN', uniqDiffOccurences)
    //
    //
    // 	let differentGapKey = ""
    // 	let uniqDiffValue = Object.values(newDiffs).map(val => {
    // 		// console.log('val', val)
    // 		if(val === uniqDiffOccurences) {
    // 			// find length of the gaps that don't match
    // 			differentGapKey = Object.keys(newDiffs).find(key => newDiffs[key] === uniqDiffOccurences);
    // 			// console.log('DG', differentGapKey, `A gap of ${differentGapKey} occurs ${val} times`)
    // 			return differentGapKey
    // 		}
    //
    // 	}).filter(obj => obj)
    //
    // 	// console.log('UN2', uniqDiffValue)
    // 	let regularGapOccurences = Object.values(newDiffs).map(val => {
    // 		if(val !== uniqDiffOccurences) {
    // 			return val
    // 		}
    // 	}).filter(obj => obj)
    // 	// let uniq = [...new Set(arr)];
    // 	let regularGapKey = Object.keys(newDiffs).find(key => newDiffs[key] === regularGapOccurences[0]);
    // 	// console.log(`A gap of ${regularGapKey} occurs ${newDiffs[regularGapKey]} times`)
    //
    // 	// only on gap size
    // 	if(Object.keys(newDiffs).length === 1) {
    // 		// console.log(`The only gap size is ${differentGapKey}`)
    // 		console.log(`Add to end ${arr[arr.length - 1] + parseInt(differentGapKey)}`)
    // 		return arr[arr.length - 1] + parseInt(differentGapKey)
    // 	} else {
    //
    // 		// console.log('regu', newDiffs[regularGapKey])
    // 		// console.log('regu', regularGapOccurences)
    //
    // 		// let keyOfval = newDiffs[diffGap]
    // 		// console.log(newDiffs)
    // 		// console.log(keyOfval)
    // 		// console.log(diffGap)
    // 		let valToFill = ""
    // 		for(var i = 0; i < uniq.length; i++) {
    // 			let current = uniq[i]
    // 			// console.log(current)
    // 			let next = uniq[i + 1]
    // 			if(next) {
    // 				let diff = next - current
    // 				// console.log(diff)
    // 				// console.log(differentGapKey)
    // 				if(diff === parseInt(differentGapKey)) {
    // 					valToFill = next - parseInt(regularGapKey)
    // 					// console.log('next', next)
    // 				}
    // 			}
    // 		}
    // 		console.log('val to fil', valToFill)
    // 		return valToFill
    // 	}
    // }
    //
    // // A([1, 3, 6, 4, 1, 2])
    // // A([1, 2, 3])
    // // A([-1, -3])
    // console.log(solution([90, 91, 92, 93]))

    function solution(arr) {
    	if(arr.length === 1) return arr[0] + 1
    	let diffs = []
    	let obj = {}
    	arr = arr.sort((a, b) => a - b)
        console.log(arr)
    	// remove duplicates
    	let uniq = [...new Set(arr)];
    	// make array of difs between all values
    	for(var i = 0; i < uniq.length; i++) {
    		let current = uniq[i]
    		let next = uniq[i + 1]
    		if(next) {
    			let diff = next - current
    			diffs.push(diff)
    		}
    	}
    	// count instances of each diff
    	let uniqDiffOccurences = ""
    	if(arr.length > 1) {
    		var newDiffs = diffs.reduce(function(allDiffs, diff) {
    			if(diff in allDiffs) {
    				allDiffs[diff]++;
    			} else {
    				allDiffs[diff] = 1;
    			}
    			return allDiffs;
    		}, {});
    		uniqDiffOccurences = Object.values(newDiffs).reduce((acc, cur) => {
    			if(Object.values(newDiffs).length === 1) {
    				return acc
    			}
    			if(acc < cur) {
    				return acc
    			} else if(cur < acc) {
    				acc = cur
    			}
    			return acc
    		})
    	}
    	let differentGapKey = ""
    	let uniqDiffValue = Object.values(newDiffs).map(val => {
    		if(val === uniqDiffOccurences) {
    			// find length of the gaps that don't match
    			differentGapKey = Object.keys(newDiffs).find(key => newDiffs[key] === uniqDiffOccurences);
    			return differentGapKey
    		}

    	}).filter(obj => obj)
    	let regularGapOccurences = Object.values(newDiffs).map(val => {
    		if(val !== uniqDiffOccurences) {

    			return val
    		}
    	}).filter(obj => obj)
    	let regularGapKey = Object.keys(newDiffs).find(key => newDiffs[key] === regularGapOccurences[0]);
    	// only on gap size
    	if(Object.keys(newDiffs).length === 1) {

            if(!arr.includes(1) && (arr[arr.length - 1] + parseInt(differentGapKey) > 1)){
                return 1
            } else {
                return arr[arr.length - 1] + parseInt(differentGapKey)
            }

    	} else {

    		let valToFill = ""
    		for(var i = 0; i < uniq.length; i++) {
    			let current = uniq[i]
    			let next = uniq[i + 1]
                if(next) {
    				let diff = next - current
                    // console.log('diff', diff)
                    // console.log('difkey', differentGapKey)
                    // console.log('regKey', regularGapKey)
    				if(diff === parseInt(differentGapKey)) {
                        // check for smaller int
                        valToFill = next - parseInt(regularGapKey)
                        for (var j = 1; j < 10; j++) {
                            if(j < valToFill && !arr.includes(j)){
                                console.log('return', j)
                                return j
                            }
                        }
                        return valToFill
    				}
    			}
    		}
            // console.log(valToFill > 1)
            if(!arr.includes(1) && valToFill > 1){
                return 1
            } else {
                return valToFill
            }
    	}
    }

    // console.log(solution([1, 3, 6, 4, 1, 2]))
    console.log(solution([ -1000000, 1, 1, 1, 2, 2, 3, 4, 5, 1000000]))
    // A([1, 2, 3])
    // A([-1, -3])
    // console.log(solution([90, 91, 92, 93]))
