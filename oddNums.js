function oddNumbers(l, r) {
	const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

	let odds = range(l, r, 1)
		.filter(num => {
			if(num % 2 !== 0) {
				return num
			}
		})
	console.log(odds)


}

oddNumbers(0, 4)
let odds = range(l, r, 1)
	.filter(num => {
		if(num % 2 !== 0) {
			return num
		}
	})