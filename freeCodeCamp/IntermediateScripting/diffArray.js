function diffArray(arr1, arr2) {
	let store = []
	function checker(checkItem1, checkItem2){
		checkItem1.forEach(i => {
		if(!checkItem2.includes(i)){
			store.push(i)
		}

		})
	}
	checker(arr1, arr2)
	checker(arr2, arr1)
	return store
}
