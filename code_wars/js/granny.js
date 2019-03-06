function tour(friends, fTowns, distTable) {
	let route = []
	let objs = []
	// get order of towns
	friends.forEach((friend) => {
		fTowns.forEach(town => {
			if(friend === town[0]) {
				route.push(town[1])
			}
		})
	})
	// get all those distances in order - find any gaps
	// let gaps = []
	let gaps = route.map((town, i) => {
		let diff
		let townNum
		if(route[i + 1]) {
			diff = route[i + 1][1] - route[i][1]
			// if not a beginning or end of array
			if(diff !== 1) {
				if(i !== 0 || i !== route.length - 1) {
					townNum = parseInt(route[i][1]) + 1
					return townNum
				} else {
					return
				}
			}
		}
	})
	// splice out values not used
	gaps.forEach((gap, i) => {
		distTable.forEach((item, j) => {
			if(typeof item === 'string') {
				if(item.indexOf(gap) > -1) {
					distTable.splice(j, 1)
					distTable.splice(j, 1)
				}
			}
		})

	})
	// make objs with triangle vals
	route.forEach((town, i) => {
		distTable.forEach((place, j) => {
			let obj
			if(town === place) {
				if(i === route.length - 1) {
					obj = {
						b: distTable[j - 1],
						hyp: distTable[j + 1]
					}
				} else {
					obj = {
						b: distTable[j + 1],
						hyp: distTable[j + 3]
					}
				}
				objs.push(obj)
			}
		})
	})
	// get side lengths
	function pythagorus(obj) {
		let { b, hyp } = obj
		b = Math.pow(b, 2)
		hyp = Math.pow(hyp, 2)
		let a = hyp - b
		a = a, 2
		let sides = {
			a: Math.sqrt(a),
			b: Math.sqrt(b),
			hyp: Math.sqrt(hyp)
		}
		return sides
	}
	let allSides = objs.map(obj => {
		return pythagorus(obj)
	})
	//get all distances looping over routes
	let distances = []
	for(var k = 0; k < route.length + 1; k++) {
		if(k === 0) {
			distances.push(allSides[k].b)
		} else if(k == (route.length)) {
			distances.push(allSides[allSides.length - 1].hyp)
		} else {
			distances.push(allSides[k - 1].a)
		}
	}
	// get the sum
	var sum = distances.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue;
	}, 0)
	return Math.floor(sum)
}

// var friends1 = ["A1", "A2", "A3", "A4", "A5"];
// var fTowns1 = [
// 	["A1", "X1"],
// 	["A2", "X2"],
// 	["A3", "X3"],
// 	["A4", "X4"]
// ];
// var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];

tour(['B1', 'B2', 'B4', 'B5', 'B6'], [
	['B1', 'Y1'],
	['B2', 'Y2'],
	['B3', 'Y3'],
	['B4', 'Y4'],
	['B5', 'Y5']
], ['Y1', 60, 'Y2', 80, 'Y3', 100, 'Y4', 110, 'Y5', 150])