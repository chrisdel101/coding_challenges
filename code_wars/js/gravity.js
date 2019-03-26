function solution(values, units) {
	let obj1W = convertToKG(values[0], units[0]);
	let obj2W = convertToKG(values[1], units[1]);
	let distance = convertToM(values[2], units[2]);
	let F = 0.0000000000667 * (obj1W * obj2W) / Math.pow(distance, 2);
	F = Number(F).toFixed(18)
	return F;

}

function convertToKG(value, unit) {
	if(unit === 'g') {
		return value / 1000.0
	} else if(unit === 'mg') {
		return value / 1000000.0
	} else if(unit === "μg") {
		return value / 1000000000.0
	} else if(unit === "lb") {
		return value / 2.2046226218
	} else if(unit === "kg") {
		return value;
	} else {
		return 0;
	}
}

function convertToM(value, unit) {
	if(unit === "cm") {
		return value / 100.0
	} else if(unit === "mm") {
		return value / 1000.0;
	} else if(unit === "μm") {
		return value / 1000000.0
	} else if(unit === 'ft') {
		return value / 3.280839895
	} else if(unit === 'm') {
		return value;
	} else {
		return 0;
	}
}
console.log(solution([200001.0, 200001.0, 0.3], ['lb', 'kg', 'cm']))