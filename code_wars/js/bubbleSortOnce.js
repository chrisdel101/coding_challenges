function bubblesortOnce(arr) {
	let newArr = arr.slice()
	for(var i = 0; i < newArr.length; i++) {
		if(newArr[i] > newArr[i + 1]) {
			let temp1 = newArr[i + 1]
			let temp2 = newArr[i]
			newArr[i] = temp1
			newArr[i + 1] = temp2
		}
	}
	return newArr
}


console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]))