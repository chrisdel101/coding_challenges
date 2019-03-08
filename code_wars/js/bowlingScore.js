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
	for(var i = 0; i < 10; i++) {
		let tempVal = 0
		console.log(`LOOP${i}`)
		// if X make obk w/ two indexes
		if(frames[i].includes('X') && i !== 9) {
			// if any values exists, update
			if(Object.values(strikes).length) {
				updateStrikes(strikes, [10], true, i)
			}
			if(Object.values(spares).length) {
				updateSpares(spares, 10)

			}
			// make any new strikes occuring here
			k = createStrike(k, i, false)
		} else if(frames[i].includes('X') && i === 9) {
			let lastFrameVal = 0
			if(frames[i][0] === 'X') {
				updateStrikes(strikes, [10], true, i)
				updateSpares(spares, 10)
			} else {
				updateStrikes(strikes, [0], true, i)
				updateSpares(spares, parseInt(frames[i][0]))

			}

			// if all strikes
			if(frames[i][1] === 'X' && frames[i][2] === 'X') {
				lastFrameVal = 30
				updateStrikes(strikes, [10], true, i)
				// if a strike and a spare
			} else if(frames[i].includes('/')) {
				lastFrameVal = 20
				if(frames[i].indexOf('/') === 1) {
					console.log('PP', frames[i][0])
					updateStrikes(strikes, [10], true, i)
					// updateStrikes(strikes, [parseInt(frames[i][0])], true, i)
				}
				// if  2 strikes and then normal pins
			} else if(frames[i][1] === 'X' && frames[i][2] !== 'X') {
				lastFrameVal += 20
				lastFrameVal += parseInt(frames[i][2])
				updateStrikes(strikes, [10], true, i)
			}
			console.log(strikes)
			frameVals.push(lastFrameVal)


		} else {
			let ball1
			let ball2
			if(frames[i].includes('/') && i !== 9) {

				ball1 = parseInt(frames[i][0])
				ball2 = 10 - parseInt(frames[i][0])

				updateStrikes(strikes, [ball1, ball2], false, i)
				updateSpares(spares, ball1)
				spares[`spare${m}`] = {
					startingIndex: i,
					movingIndex: i,
					value: 10,
					active: true
				}
				// console.log(spares)
				m++
				// if frame is just nums
			} else if(frames[i].includes('/') && i === 9) {
				let lastFrameVal = 0
				if(frames[i][1] === '/') {

					updateSpares(spares, parseInt(frames[i][0]))

					lastFrameVal += 10
					lastFrameVal += parseInt(frames[i][2])
					frameVals.push(lastFrameVal)
					// console.log(frameVals)
					// console.log('PUSH last frame val', lastFrameVal)
					// console.log(frameVals)

				}
			} else {
				ball1 = parseInt(frames[i][0])
				ball2 = parseInt(frames[i][1])

				tempVal = 10 - parseInt(frames[i][0])
				updateStrikes(strikes, [ball1, ball2], false, i)
				updateSpares(spares, ball1)
				console.log(`push ${parseInt(frames[i][0]) + parseInt(frames[i][1])}`)
				frameVals.push(parseInt(frames[i][0]) + parseInt(frames[i][1]))
			}

		}

	}

	function createStrike(k, i) {
		strikes[`strike${k}`] = {
			startingIndex: i,
			movingIndex: i,
			value: 10,
			active: true,
			pushed: false
		}
		k = k + 1

		// console.log('k', k)
		return k
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
				// console.log("spare val to", obj[`spare${i}`].value)
				frameVals.push(obj[`spare${i}`].value)
				// console.log(`push spare ${i} val ${spares[`spare${i}`].value}`)
				// console.log(`set spare ${i} to false`)
				obj[`spare${i}`].active = false
				// if gap is 2, get value
			}
			// console.log('strike', obj[`strike${i}`])
		})
	}

	function updateStrikes(obj, frameVal, isStrike, i) {
		console.log('frameVal in update', frameVal)
		Object.values(obj).forEach((val, ind) => {
			if(!obj[`strike${ind}`].active) {
				return
			}
			obj[`strike${ind}`].movingIndex++
			let diff = obj[`strike${ind}`].movingIndex - obj[`strike${ind}`].startingIndex
			// if gap > 2, kill it
			console.log(obj[`strike${ind}`])
			console.log(obj[`strike${ind}`].startingIndex)
			// console.log(obj[`strike${ind}`])
			console.log('Dif', diff)

			// if(i === 9 && (k === 0 || k === 1 || k === 2)) {
			// 	console.log('push')
			// 	frameVals.push(strikes[`strike${k-1}`].value)
			// } else
			if(diff === 2) {
				let innerFrameVal = frameVal[0]
				console.log(innerFrameVal)
				obj[`strike${ind}`].value = innerFrameVal + obj[`strike${ind}`].value

				frameVals.push(obj[`strike${ind}`].value)

				console.log(`push strike ${ind} val
                 ${strikes[`strike${ind}`].value}`)
				console.log(`set strike ${ind} to false`)
				obj[`strike${ind}`].active = false
				// if gap is 2, get value
			} else if(diff === 1) {
				let innerFrameVal
				if(isStrike) {
					innerFrameVal = frameVal[0]
				} else {
					// update to count both ball in non-strike
					obj[`strike${ind}`].movingIndex++
					if(frameVal.length === 2) {
						innerFrameVal = frameVal[0] + frameVal[1]
					} else {
						innerFrameVal = parseInt(frameVal.toString())
					}
				}
				console.log('FRAMEVAL', innerFrameVal)
				let value = obj[`strike${ind}`].value + innerFrameVal
				obj[`strike${ind}`].value = value
				console.log(`val strike${ind} Val to ${value}`)
				// check for new diff and make false if 2
				if(obj[`strike${ind}`].movingIndex - obj[`strike${ind}`].startingIndex === 2) {
					frameVals.push(obj[`strike${ind}`].value)
					console.log(`push strike ${ind} val
                     ${strikes[`strike${ind}`].value}`)
					console.log(`set strike ${ind} to false`)
					obj[`strike${ind}`].active = false
					obj[`strike${ind}`].pushed = true
				}

				// else increment on each frame
			}
			// console.log('strike', obj[`strike${i}`])
		})
	}
	// console.log('strikes', strikes)
	Object.values(strikes).map(val => {
		// console.log('val', val)
	})
	let sums = []
	frameVals.reduce((acc, curr) => {
		sums.push(acc + curr)
		return acc + curr
	})
	console.log(sums)
	return sums[sums.length - 1]
}
// console.log(bowlingScore('11 11 11 11 11 11 11 11 11 11'))
// console.log(bowlingScore('X X X X X X X X X XXX'))
// console.log(bowlingScore('00 5/ 4/ 53 33 22 4/ 5/ 45 XXX'))
// console.log(bowlingScore('42 42 72 6/ 72 62 6/ 0/ 4/ 1/X'))
// console.log(bowlingScore('08 6/ 61 81 90 41 90 63 X 1/X'))
console.log(bowlingScore('62 61 7/ 15 8/ 4/ 36 X 9/ 1/X'))

// 5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 7/2
// 6/ 5/ 6/ 2/ 3/ 0/ 1/ 8/ 3/ 6/5
// 00 00 00 00 00 00 00 00 00 0/X
// 00 00 00 00 00 00 00 00 X 0/X
// 9/ 40 X 9/ 63 04 14 X 03 1/X