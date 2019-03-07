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


	// console.log(frames.length)
	for(var i = 0; i < 10; i++) {
		let tempVal = 0
		console.log(`LOOP${i}`)
		// if X make obk w/ two indexes
		if(frames[i].includes('X')) {
			let n = 0
			addAndUpdateStrikes(n)
			// make any new strikes occuring here
			k = createStrike(k, i, false)
		} else {
			let ball1
			let ball2
			if(frames[i].includes('/')) {
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

				m++
				// if frame is just nums
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

	function addAndUpdateStrikes(n) {
		// if any values exists, update
		if(Object.values(strikes).length) {
			console.log('update strikes')
			updateStrikes(strikes, [10], true, i)
		}
		if(Object.values(spares).length) {
			updateSpares(spares, 10)

		}
		if(i === 9 && frames[i][n] === 'X') {

			console.log('recurse create new strike', `strike${k}`)
			k = createStrike(k, i, true)
			// console.log('push strike', strikes[`strike${k-1}`], strikes[`strike${k-1}`].value)
			let diff = strikes[`strike${k-1}`].movingIndex - strikes[`strike${k-1}`].startingIndex
			// if(frames[8][0] !== 'X') {
			frameVals.push(strikes[`strike${k-1}`].value)

			// }
			console.log('N+ 1', frames[i][n + 1])
			if(frames[i][n + 1] === 'X') {
				console.log(k)
				addAndUpdateStrikes(n + 1)
				// if not X but still there
			} else if(frames[i][n + 1] !== 'X' && frames[i][n + 1]) {
				frameVals.push(parseInt(frames[i][n + 1]))
			} else {
				console.log('END')
				return
			}
		} else {
			return
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
			// console.log(ball1)
			console.log('i', i)
			console.log('k', k)
			// if(i === 9 && (k === 0 || k === 1 || k === 2)) {
			// 	console.log('push')
			// 	frameVals.push(strikes[`strike${k-1}`].value)
			// } else
			if(diff === 2) {
				let innerFrameVal = frameVal[0]
				obj[`strike${ind}`].value = innerFrameVal + obj[`strike${ind}`].value

				frameVals.push(obj[`strike${ind}`].value)


				console.log(`set
                 ${strikes[`strike${ind}`]} pushed to true`)
				console.log(`push strike ${ind} val
                 ${strikes[`strike${ind}`].value}`)
				console.log(`set strike ${ind} to false`)
				obj[`strike${ind}`].active = false
				obj[`strike${ind}`].pushed = true
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
console.log(bowlingScore('5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 8/8'))

// 5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 7/2
// 6/ 5/ 6/ 2/ 3/ 0/ 1/ 8/ 3/ 6/5
// 00 00 00 00 00 00 00 00 00 0/X
// 00 00 00 00 00 00 00 00 X 0/X
// 9/ 40 X 9/ 63 04 14 X 03 1/X