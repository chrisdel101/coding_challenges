class MonitoringWindow {
	constructor(list){
		this.vistorsPerMin = list
	}
    // UTILITY FUNC - check input for errors
    //takes an array - insert at first input point
    //returns errors if truthy
    _errorChecker(arr){
        // check for all null
        let allNull = arr.every(item => {
            return item === null
        })
        if(allNull){
            throw TypeError("All vals are null: cannot run function on null values")
        }
        if(arr.length <= 0){
            throw TypeError("Empty array: cannot run function on empty array.")
        }

    }
    // UTILITY FUNC - get all sub arrays between the nulls
    //takes an array of nums and nulls
    //returns arr of tuples - all vals in  between nulls
    _makeIntervals(arr){

        this._errorChecker(arr)
        let windows = []
        let nullIndex = 0
        let windowStartIndex = 0
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] === null){
                // set current nullIndex - end of slice path
                nullIndex = i
                // slice from start to nullIndex
                let window = arr.slice(windowStartIndex, nullIndex)
                // save window to arr
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
    // UTILITY FUNC - creates every instance of possible monitoring windows
    //takes array of tuples with btw null values
    //returns arr of tuples - all possible window combos
    _getMonitorWindows(arrOfTuples) {
        let tuples = []
        let storageArr = []
        let j = 0
        let copy
        arrOfTuples.forEach(arr => {
            // loop over each item in arr - reset counter to zero at each
             while(arr.length) {
                 let current = arr[j]
                 // use BREAK to end loop
                 while(true){
                     storageArr.push(arr[j])
                     // stop when undefined
                     if(!arr[j]){
                             // slice off first digit - decrease arr by one
                             arr.splice(0,1)
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

    // UTILITY FUNC - finds the interesting monitor windows
    // takes an array of tuples of all monitor windows
    //returns array of strings represing the IMWs
    _getIMW(arrOfTuples){
        var IMWs = []
        for(var i = 0; i < arrOfTuples.length; i++){
        	let outerVal = arrOfTuples[i].toString()
            // j is reset on each while start
        	let j = 0
        	while(j < arrOfTuples.length){
        	       let innerVal = arrOfTuples[j].toString()
        // 		if matches && index is not the same as outer val, break
        	//make so not checking same val against itself
        		let innerIndex = arrOfTuples.indexOf(arrOfTuples[j])
        		if(innerVal.match(outerVal) && innerIndex !== i){
        			break
        // if made to end without matching, push to arr
                } else if(j === arrOfTuples.length - 1){
        			IMWs.push(outerVal)
        		}
        		j++
        	}
        }
        return IMWs
    }
    // UTILITY FUNC - converts IMW strings into numsbers
    // take array of interesting monitor windows strs
    // returns array indentical in nums
    _convertToInts(arr){
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

    // INSTANCE FUNC- call on instance to get IMW with the highest sum
    //takes array of interesting monitor windows as strings
    //returns the IMW with highest sum
    maxSum(){
        let intervals = this._makeIntervals(this.vistorsPerMin)
        let getWindows = this._getMonitorWindows(intervals)
        let getIMWs = this._getIMW(getWindows)

    // 	will be strings, make nums
    	getIMWs = this._convertToInts(getIMWs)
        console.log('wins', getIMWs)
        //loop over each- return arr of window sums
        let sums = getIMWs.map(arr => {
            return arr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            })
        })
        // console.log(sums)
        //find highest sum of window
        let highSum = sums.reduce((a, b) => {
            return Math.max(a, b)
        })
        // check which index this in the array of sums
        let index = sums.indexOf(highSum)
        // index into the original arr to get solution
        let highestWindow = getIMWs[index]
        return highestWindow

    }

    // INSTANCE FUNC- call on instance to get IMW with the lowest average window
    //takes array of interesting monitor windows as strings
    //returns the IMW with lowest average
    minAverage(){
        let intervals = this._makeIntervals(this.vistorsPerMin)
        let getWindows = this._getMonitorWindows(intervals)
        // arr of tuples with all IMWs
        let getIMWs = this._getIMW(getWindows)

    // 	will be strings, make nums
    	getIMWs = this._convertToInts(getIMWs)
        console.log('wins', getIMWs)
        let averages = getIMWs.map(arr => {
            return arr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            })
        })
        // divide the sum by number of items in window
        .map((sum, index) => {
            return(sum / getIMWs[index].length)
        })//find lowest average in averages
        let highAverage = averages.reduce((a, b) => {
            return Math.min(a, b)
        })
        // find the index in the averages arr
        let index = averages.indexOf(highAverage)
        // index into the original arr to get solution
        let highestWindow = getIMWs[index]
        return highestWindow


    }
}
let arr = []
let x = new MonitoringWindow(arr)
console.log(x.maxSum())
