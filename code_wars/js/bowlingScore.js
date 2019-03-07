function bowlingScore(frames) {
	let strikes = {}
	let spares = {}
	frames = frames.split(' ')
	let cursor = 0
	// k and m control names of objs - iterated on creation
	let k = 0
	let m = 0
	let frameVals = []
	frames = frames.map((frame, i) => {
		return frames[i] = frames[i].split('')

	})

	// console.log(frames)
	for(var i = 0; i < 9; i++) {
		let tempVal = 0
		console.log(`LOOP${i}`)
		// if X make obk w/ two indexes
		if(frames[i][0] == 'X') {
			// if any values exists, update
			if(Object.values(strikes).length) {
				console.log('update strikes')
				updateStrikes(strikes, [10], true)
			}
			if(Object.values(spares).length) {
				console.log('update spares')
				updateSpares(spares, 10)

			}
			// make any new strikes occuring here
			console.log('create new strike', `strike${k}`)
			strikes[`strike${k}`] = {
				startingIndex: i,
				movingIndex: i,
				value: 10,
				active: true
			}
			// console.log(`create new strike${k}`)
			k++
		} else {
			let ball1
			let ball2
			if(frames[i][1] === '/') {
				console.log('spare on 1')
				ball1 = parseInt(frames[i][0])
				console.log('ball1', ball1)
				ball2 = 10 - parseInt(frames[i][0])
				console.log('ball2', ball2)
				// console.log(ball1 + ball2)
				// let active = Object.values(strikes).filter((val) => {
				// 		return val.active
				// 	})
				// 	.forEach((active, i) => {
				//
				// 		updateStrikes(strikes, [ball1, ball2])
				// 	})
				updateStrikes(strikes, [ball1, ball2], false)
				updateSpares(spares, ball1)
				spares[`spare${m}`] = {
					startingIndex: i,
					movingIndex: i,
					value: 10,
					active: true
				}
				console.log(`create new spare${m}`)

				m++
				// if frame is just nums
			} else {
				ball1 = parseInt(frames[i][0])
				ball2 = parseInt(frames[i][1])

				tempVal = 10 - parseInt(frames[i][0])
				// console.log('XX', parseInt(frames[i][0]) + parseInt(frames[i][1]))
				updateStrikes(strikes, [ball1, ball2], false)
				// updateStrikes(strikes, ball2)
				updateSpares(spares, ball1)
				console.log(`push plain number frame ${parseInt(frames[i][0])} + ${parseInt(frames[i][1])}`)
				frameVals.push(parseInt(frames[i][0]) + parseInt(frames[i][1]))
			}

		}

	}

	function updateSpares(obj, frameVal) {
		Object.values(obj).forEach((val, i) => {
			// console.log('OBJ', obj)
			if(!obj[`spare${i}`].active) {
				return
			}
			obj[`spare${i}`].movingIndex++
			let diff = obj[`spare${i}`].movingIndex - obj[`spare${i}`].startingIndex
			// if gap > 2, kill it
			if(diff === 1) {

				obj[`spare${i}`].value = obj[`spare${i}`].value + frameVal
				console.log("spare val to", obj[`spare${i}`].value)
				frameVals.push(obj[`spare${i}`].value)
				console.log(`push spare ${i} val ${spares[`spare${i}`].value}`)
				console.log(`set spare ${i} to false`)
				obj[`spare${i}`].active = false
				// if gap is 2, get value
			}
			// console.log('strike', obj[`strike${i}`])
		})
	}

	function updateStrikes(obj, frameVal, isStrike) {
		console.log('frameVal', frameVal)
		Object.values(obj).forEach((val, i) => {
			if(!obj[`strike${i}`].active) {
				return
			}
			obj[`strike${i}`].movingIndex++
			let diff = obj[`strike${i}`].movingIndex - obj[`strike${i}`].startingIndex
			// if gap > 2, kill it
			// console.log(`strike${i}`)
			// console.log(obj[`strike${i}`])
			console.log('Dif', diff)
			// console.log(ball1)
			// console.log('strike', obj[`strike${i}`].value)
			if(diff === 2) {
				let innerFrameVal = frameVal[0]
				obj[`strike${i}`].value = innerFrameVal + obj[`strike${i}`].value

				frameVals.push(obj[`strike${i}`].value)
				console.log(`push strike ${i} val
                 ${strikes[`strike${i}`].value}`)
				console.log(`set strike ${i} to false`)
				obj[`strike${i}`].active = false
				// if gap is 2, get value
			} else if(diff === 1) {
				let innerFrameVal
				if(isStrike) {
					innerFrameVal = frameVal[0]
				} else {
					// update to count both ball in non-strike
					obj[`strike${i}`].movingIndex++
					if(frameVal.length === 2) {
						innerFrameVal = frameVal[0] + frameVal[1]
					} else {
						innerFrameVal = parseInt(frameVal.toString())
					}
				}
				console.log('FRAMEVAL', innerFrameVal)
				let value = obj[`strike${i}`].value + innerFrameVal
				obj[`strike${i}`].value = value
				console.log(`val strike${i} Val to ${value}`)
				// check for new diff and make false if 2
				if(obj[`strike${i}`].movingIndex - obj[`strike${i}`].startingIndex === 2) {
					frameVals.push(obj[`strike${i}`].value)
					console.log(`push strike ${i} val
                     ${strikes[`strike${i}`].value}`)
					console.log(`set strike ${i} to false`)
					obj[`strike${i}`].active = false
				}

				// else increment on each frame
			}
			// console.log('strike', obj[`strike${i}`])
		})
		console.log('strikes', strikes)
	}
	console.log(frameVals)
	let sums = []
	frameVals.reduce((acc, curr) => {
		sums.push(acc + curr)
		return acc + curr
	})
	console.log(sums)
}
// bowlingScore('11 11 11 11 11 11 11 11 11 11')
bowlingScore('X X 1/ 72 X 80 2/ X 44')


// let val = frames[i][0]
// console.log(val)
// console.log(frames[i])
// let len = (i - cursor)
// set j to last index cursor - loop until current i
// for(var j = cursor; j < i; j++) {
// 	if(frames[j].toString() === 'X' || frames[j][1] === '/') {
// 		// console.log(frames[j])
// 		if(frames[j].toString() === 'X') {
// 			let frameVals = parseInt(val[0]) + parseInt(val[1]) + 10
// 		} else if(frames[j][1].toString() === '/') {
// 			let spareVal = parseInt(val[0]) + 10
// 			console.log(spareVal)
// 		}
// 		// let val = 10 +
// 		// console.log(frames[j])
// 	}
// }