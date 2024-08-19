function LIS(arr){
    let temp = []   
    for (let i = 0; i < arr.length; i++) {
        console.log('i',arr[i])
        console.log('i',temp.slice(-1)?.[0])
        // if GE then last push on end
        if(arr[i] > temp.slice(-1)?.[0] || !temp.slice(-1)?.[0]){
            temp.push(arr[i])
            console.log('put at end',temp)
        } else {
            let newArr = swapUpperBound(temp, arr[i])
            // if empty arr then no greater value found - swap last item
            temp = newArr
            console.log(temp)
        }
    }
    console.log(temp)
    return temp
}
// find arr values on lower and upper bounds of inputValue   - swapp with upper bound
function swapUpperBound(arr, inputValue){
    for (let i = 0; i < arr.length; i++) {
        // if item is dupe do nothing
        if(arr[i] === inputValue) {
            return arr
        } else if(arr[i] > inputValue){
            console.log('swap',arr[i+1], 'with', inputValue)
            arr[i] = inputValue
            return arr
        }
    }
    // no placement found - swap last item
    console.log('swap final',arr[arr.length-1], 'with', inputValue)
    arr[arr.length-1] = inputValue
    return arr
}

LIS([1,7,8,4,5,6,-1,9])