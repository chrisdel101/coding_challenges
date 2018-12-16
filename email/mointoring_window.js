
class MonitoringWindow{
	constructor(list){
		this.vistorsPerMin = list
	}
    makeIntervals(arr){
        let windows = []
        let nullIndex = 0
        let windowStartIndex = 0
        for (var i = 0; i < arr.length; i++) {
            // console.log('current', arr[i])
            if(arr[i] === null){
                // set current nullIndex - end of slice path
                nullIndex = i
                // console.log('n', nullIndex)
                // slice from start to nullIndex
                let window = arr.slice(windowStartIndex, nullIndex)
                // save window to arr - oR CALL INTERVAL FUNC HERE
                windows.push(window)
                // if next is not null, set windowStartIndex to next item
                if(arr[i + 1] !== null){
                    // sets after the last null in arr - for get the nums after it
                    windowStartIndex = i + 1
                }
            }
        }
        // if last val not null, get last window here
        if(nullIndex !== arr.length - 1){
            let finalWindow = arr.slice(windowStartIndex, (arr.length - 1) + 1 )
            windows.push(finalWindow)
        }
        return windows
    }
    getMonitorWindows(arrOfTuples) {
        let tuples = []
        let storageArr = []
        let j = 0
        let copy
        arrOfTuples.forEach(arr => {
            // console.log(arr)
            // loop over each item in arr - reset counter to zero at each
             while(arr.length) {
                     let current = arr[j]
                     // console.log('current', current)
                     // console.log('equal', arr.length)
                     // use BREAK to end loop
                     while(true){
                             // console.log('arr j',arr[j])
                             storageArr.push(arr[j])
                             // stop when undefined
                             if(!arr[j]){
                                     // slice off first digit - decrease arr by one
                                     arr.splice(0,1)
                                     // console.log('splice', arr)
                                     // reset inner counter
                                     j = 0
                                     // reset storageArr to empty
                                     storageArr = []
                                     break
                                 }
                                 // copy storageArr
                                 copy = storageArr.slice()
                                 // push new item into copy
                                 tuples.push(copy)
                                 j++
                             }
                         }
        })
        return tuples
    }
    getIMW(arrOfTuples){
        var IMWs = []
        for(var i = 0; i < arrOfTuples.length; i++){
        	let outerVal = arrOfTuples[i].toString()
        // 	console.log('OUTER', outerVal)
            // j is reset on each while start
        	let j = 0
        	while(j < arrOfTuples.length){
        // 	console.log('j', j)
        		let innerVal = arrOfTuples[j].toString()
        // 		console.log('innerVal', innerVal)

        // 		if matches && index is not the same as outer val, break
        	//make so not checking same val against itself
        		let innerIndex = arrOfTuples.indexOf(arrOfTuples[j])
        		if(innerVal.match(outerVal) && innerIndex !== i){
        			// console.log('break')
        			break
        // 		if made to end without matching, push to arr
                } else if(j === arrOfTuples.length - 1){
        			// console.log('at END:',outerVal)
        			IMWs.push(outerVal)
        		}
        		j++
        	}
        }
        return IMWs
    }
    convertToInts(arr){
        let nums = []
    	arr.forEach(block => {
    		let storageArr = []
     		for (var i = 0; i < block.length; i++) {
                let current = block[i]
                // skip over commas in the string
                if(current !== ","){
    // 				if not comma, push to store
                    current = parseInt(current)
                    storageArr.push(current)
                }
            }
            //once converted, push into outer arr
            nums.push(storageArr)
    	})
    	return nums
    }

}
// let arr = [1, 4, null, 1, 2, 3, null, 3]
let arr = [1, 5, null, 1, 2, 2, null, 3]
// get all sub arrays between the nulls
//takes an array of nums and nulls
//returns arr of tuples - all vals in  between nulls
function makeIntervals(arr){
    let windows = []
    let nullIndex = 0
    let windowStartIndex = 0
    for (var i = 0; i < arr.length; i++) {
        // console.log('current', arr[i])
        if(arr[i] === null){
            // set current nullIndex - end of slice path
            nullIndex = i
            // console.log('n', nullIndex)
            // slice from start to nullIndex
            let window = arr.slice(windowStartIndex, nullIndex)
            // save window to arr - oR CALL INTERVAL FUNC HERE
            windows.push(window)
            // if next is not null, set windowStartIndex to next item
            if(arr[i + 1] !== null){
                // sets after the last null in arr - for get the nums after it
                windowStartIndex = i + 1
            }
        }
    }
    // if last val not null, get last window here
    if(nullIndex !== arr.length - 1){
        let finalWindow = arr.slice(windowStartIndex, (arr.length - 1) + 1 )
        windows.push(finalWindow)
    }
    return windows
}
console.log(makeIntervals(arr))

//creates every instance of possible monitoring windows
//takes array of tuples with btw null values
//returns arr of tuples - all possible window combos
function getMonitorWindows(arrOfTuples) {
    let tuples = []
    let storageArr = []
    let j = 0
    let copy
    arrOfTuples.forEach(arr => {
        // console.log(arr)
        // loop over each item in arr - reset counter to zero at each
         while(arr.length) {
                 let current = arr[j]
                 // console.log('current', current)
                 // console.log('equal', arr.length)
                 // use BREAK to end loop
                 while(true){
                         // console.log('arr j',arr[j])
                         storageArr.push(arr[j])
                         // stop when undefined
                         if(!arr[j]){
                                 // slice off first digit - decrease arr by one
                                 arr.splice(0,1)
                                 // console.log('splice', arr)
                                 // reset inner counter
                                 j = 0
                                 // reset storageArr to empty
                                 storageArr = []
                                 break
                             }
                             // copy storageArr
                             copy = storageArr.slice()
                             // push new item into copy
                             tuples.push(copy)
                             j++
                         }
                     }
    })
    return tuples
}
// console.log(getMonitorWindows(makeIntervals(arr)))

//finds the interesting monitor windows
// takes an array of tuples of all monitor windows
//returns array of strings represing the IMWs
function getIMW(arrOfTuples){
    var IMWs = []
    for(var i = 0; i < arrOfTuples.length; i++){
    	let outerVal = arrOfTuples[i].toString()
    // 	console.log('OUTER', outerVal)
        // j is reset on each while start
    	let j = 0
    	while(j < arrOfTuples.length){
    // 	console.log('j', j)
    		let innerVal = arrOfTuples[j].toString()
    // 		console.log('innerVal', innerVal)

    // 		if matches && index is not the same as outer val, break
    	//make so not checking same val against itself
    		let innerIndex = arrOfTuples.indexOf(arrOfTuples[j])
    		if(innerVal.match(outerVal) && innerIndex !== i){
    			// console.log('break')
    			break
    // 		if made to end without matching, push to arr
            } else if(j === arrOfTuples.length - 1){
    			// console.log('at END:',outerVal)
    			IMWs.push(outerVal)
    		}
    		j++
    	}
    }
    return IMWs
}
console.log(getIMW(getMonitorWindows(makeIntervals(arr))))
// console.log(getIMW(getMonitorWindows([[1,2],[3],[1],[4,5], [4],[2]]
// )))
// takes an array of interseting monitor window strings

// converts to nums and finds IMW with the highest sum
//takes array of interesting monitor windows as strings
//returns the IMW with highest sum
function maxSum(arrOfIMW){
// 	will be strings, make nums
	let toNums = convertToInts(arrOfIMW)

    console.log('wins', toNums)
    //loop over each
    // let reduced = toNums.reduce((accumulator, currentValue) => {
    //     return accumulator + currrentValue
    // })
    // create array of sums
    let map = toNums.map(arr => {
        return arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        })
    })
    //find highest sum of window
    let highSum = map.reduce((a, b) => {
        return Math.max(a, b)
    })
    // check which index this in the array of sums
    let index = map.indexOf(highSum)
    // index into the original arr to get solution
    let highestWindow = toNums[index]
    return highestWindow

}
// converts IMW strings into numsbers
// take array of interesting monitor windows strs
// returns array indentical in nums
function convertToInts(arr){
    let nums = []
	arr.forEach(block => {
		let storageArr = []
 		for (var i = 0; i < block.length; i++) {
            let current = block[i]
            // skip over commas in the string
            if(current !== ","){
// 				if not comma, push to store
                current = parseInt(current)
                storageArr.push(current)
            }
        }
        //once converted, push into outer arr
        nums.push(storageArr)
	})
	return nums
}
