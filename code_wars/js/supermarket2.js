function queueTime(customers, n) {
	// each customer has a range for the minutes
	let customerRanges = []
	let counter = 0
	for (var j = 0; j < customers.length; j++) {
		let tempArr = []
		// make a range for each customer
		while (customers[j]) {
			tempArr.push(customers[j])
			customers[j]--
		}
		// push to outer arr
		customerRanges.push(tempArr)
		// reset arr store
		tempArr = []
	}
	console.log('customer ranges', customerRanges)
	let currentCustomer
	let done = false
	let i = 0
	if (n > customerRanges.length) {
		n = customerRanges.length
	}
	while (!done) {
		let obj = {}
		// keeps looping in twos
		for (var k = 0; k < n; k++) {
			// keep a pattern repeating over and over
			currentCustomer = customerRanges[k][i]
			// if not undefined
			if (!currentCustomer) {
				// k + n is next range to process
				let left = customerRanges[k + n]
				// if some left, conact it to the current chunk
				if (left) {
					// console.log('reassign')
					// k + n concat to the chunk of customerRanges currently on
					customerRanges[k] = customerRanges[k].concat(customerRanges[k + n])
					console.log('arr', k + 1)
					console.log('currentCus array', customerRanges[k])
					// console.log('splice', customerRanges[k + n])
					// splice off the chunk added
					customerRanges.splice(k + n, 1)
					console.log('currentCus', customerRanges[k][i])
				} else {
					obj[k] = undefined
					console.log('arr', k + 1)
					console.log('done', customerRanges[k + n])
				}
			} else {
				// loop through
				console.log('arr', k + 1)
				console.log('currentCus', currentCustomer)
			}
		}
		if ((Object.entries(obj).length >= n) && (Object.values(obj).every(i => i === undefined))) {
			console.log('true')
			done = true
			break
		}
		console.log('obj', obj)
		console.log('i', i)
		i++
	}
	// console.log('i++', i)
	// console.log('CR', customerRanges)
	return i
}
console.log(queueTime([1, 2, 3, 4, 5], 100))
//
// [7,10,11,14],2
//
//
// Picture this instead of customers and queues as buckets and water.
//
// if I have 3 buckets, and 20, 15, 30, 12 oz of water, what is the minimum possible weight that a bucket can have?
// bucket1 = 0 add 20 here
// bucket2 = 0 this is still empty add 15 here
// bucket3 = 0 this is still empty add 30 here
//
// but that leaves 12 oz left over, how to find the best place to pour? Find the lowest possible bbucket which is bucket 2
// bucket2 = 15 add 12 oz here which gives us 27
//
// what is the fullest bucket (or in the code example the highest amount of time that a line at the grocer can take?)
// the answer is bucket 3 which is 30.
// what if we had an additional 12 to that?
//
// bucket1 is only 20, being the lowest, we pour 12 into bucket 1
// bucket1 = 32 now, this would be the new minimum possible weight distributed among 3 buckets