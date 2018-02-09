function chunkArrayInGroups(arr,size){
    var arrStore = [];
    // loop through increasing by the size amount
    for(var i = 0;i < arr.length;i += size){
        console.log(i)
        // minus current i from length to track array state
        var state = arr.length - i
    	if(state > size){
    	//slice off size from current stop to end of size range
            arrStore.push(arr.slice(i,i+size))
    	} else if(state < size){
            // get amount left,     total length - state
    		var left = arr.length - state
            // push startLeaf
            console.log(i)
            console.log(left+state)
    		// arrStore.push(i+   1,(left+state-1))
    	}
    }
    console.log(arrStore)
}

chunkArrayInGroups([1,2,3,4,5,6,7],2)
//
// check if length has remainder zero
// if yes, split up
// if no,


// ([0, 1, 2, 3, 4, 5], 3) => [[0, 1, 2], [3, 4, 5]].
