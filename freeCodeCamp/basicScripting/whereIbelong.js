function getIndexToIns(arr, num) {

 arr.push(num)

 arr.sort(function(a,b) { return a - b; });

 for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num){
        return i
    }
 }

}

console.log(getIndexToIns([5, 3, 20, 3], 2))


function getIndexToIns(arr, num){
	arr = arr.sort((a, b) => a - b);
	var index
// LESS THAN
 // if first val is greater than num, index is zero
	if(num < arr[0]){
		index = 0
		console.log('one')
		return index
	}
// 	EQUALITY
	for(var j = 0; j < arr.length; j++) {
		if(arr[j] === num){
			index = j
			console.log('two')
			return index
		}

	}
// 	INSERTING
	//once arr val is higher than num, get i and break
	for(var i = 0; i < arr.length ; i++){
        if(num < arr[i]){
                index = i
                break
		console.log('three')
		}
	}
// 	check if lower than index val, but higher than one below
	if(num < arr[index]){
		if(num > arr[index - 1]){
// 		reassign to the index of highest, so as
		console.log('four')
		 return index
		}

	}
// 	GREATER THAN
	//if greater than last number, goes after last number, so arr.length
	if(num > arr[arr.length - 1]){
		index = arr.length
		console.log('last')
		return index
	}
// 	BLANK
	if(arr === [] || arr === NaN || arr === null){
    	return 0
	}
}
