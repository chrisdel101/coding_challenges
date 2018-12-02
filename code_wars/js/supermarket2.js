function queueTime(customers, n) {
	// each customer has a range - make array of arrays of ranges
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
	let currentCustomer
	let done = false
	let i = 0
	// make n only as long as line of customers
	if (n > customerRanges.length) {
		n = customerRanges.length
	}
	// loop over ranges
	while (!done) {
		let obj = {}
		// loop n times
		for (var k = 0; k < n; k++) {
			// keep a pattern repeating over and over
			// arr[0][1]
			// arr[1][1]
			//arr[2][1]/// Indexes stay the same and get reassigned
			currentCustomer = customerRanges[k][i]
			// if undefined, concat next section to current
			// else - just loop over and do nothing
			if (!currentCustomer) {
				let left = customerRanges[n]
				// if some chunks left continue
				if (left) {
					// add next range from end to current index
					customerRanges[k] = customerRanges[k].concat(customerRanges[n])
					// console.log('arr', k + 1)
					// console.log('index', n)
					// console.log('chunk', customerRanges[n])
					// console.log('currentCus array', customerRanges[k])
					// console.log('splice', customerRanges[k + n])
					// splice off the chunk added
					// console.log('spliced', customerRanges[n])
					// splice off the concated part to shave arr length
					customerRanges.splice(n, 1)
					// console.log('whole', customerRanges)
					// console.log('currentCus', customerRanges[k][i])
				} else {
					// if current line has not more to get from end, make it undefined
					obj[k] = undefined
					// console.log('arr', k + 1)
					// console.log('done', customerRanges[k + n])
				}
			}
		}
		// base case to stop outer while loop
		if ((Object.entries(obj).length >= n) && (Object.values(obj).every(i => i === undefined))) {
			// console.log('true')
			done = true
			break
		}
		// console.log('obj', obj)
		// console.log('i', i)
		i++
	}
	return i
}
console.log(queueTime([1, 2, 3, 4], 1))
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2))
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