class Arr {
	constructor(values) {
		this.values = values
	}
	square() {
		return map(val => Math.pow(val, 2))
	}
	cube() {
		return map(val => Math.pow(val, 3))
	}
	sum() {
		return reduce((a, c) => a + c)
	}
	average() {
		return sum() / length
	}
	even() {
		return filter(val => val % 2 === 0)
	}
	odd() {
		return filter(val => val % 2 !== 0)
	}
}

const arr = new Arr([1, 2, 3, 4, 5])
arr.square([1, 2, 3, 4, 5])