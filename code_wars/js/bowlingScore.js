function bowlingScore(frames) {
	let strikes = {}
	let spares = {}
	frames = frames.split(' ')
	// k and m control names of objs - iterated on creation
	let k = 0
	let m = 0
	let frameVals = []
	let sum = 0
	// make each any array
	frames = frames.map((frame, i) => {
		return frames[i] = frames[i].split('')
	})
	for(var i = 0; i < 10; i++) {
		if(frames[i].includes('X') && i !== 9) {
			// if any values exists, update every time
			if(Object.values(strikes).length) {
				updateStrikes(strikes, [10], true, i)
			}
			if(Object.values(spares).length) {
				updateSpares(spares, 10)
			}
			// assign to var so it updates
			k = createStrike(k, i)
			// if last frame
		} else if(frames[i].includes('X') && i === 9) {
			let lastFrameVal = 0
			// if first digit is strike add 10 to previous
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
			} else if(frames[i].includes('/') && frames[i].indexOf('/') === 1) {
				lastFrameVal = 20
				updateStrikes(strikes, [10], true, i)
				// if  2 strikes and then normal pins
			} else if(frames[i][1] === 'X' && frames[i][2] !== 'X') {
				lastFrameVal += 20
				lastFrameVal += parseInt(frames[i][2])
				updateStrikes(strikes, [10], true, i)
			}
			sum += lastFrameVal
		} else {
			let ball1
			let ball2
			if(frames[i].includes('/') && i !== 9) {
				ball1 = parseInt(frames[i][0])
				ball2 = 10 - parseInt(frames[i][0])
				updateStrikes(strikes, [ball1, ball2], false, i)
				updateSpares(spares, ball1)
				createSpare(m)
				// final frame
			} else if(frames[i].includes('/') && i === 9 && frames[i][1] === '/') {
				let lastFrameVal = 0
				// add first ball val to previous - no update to strikes here
				updateSpares(spares, parseInt(frames[i][0]))
				lastFrameVal += parseInt(frames[i][2]) + 10
				sum += lastFrameVal
			} else {
				// if spare is final index
				ball1 = parseInt(frames[i][0])
				ball2 = parseInt(frames[i][1])
				// add first ball val to previous no update to strikes
				updateStrikes(strikes, [ball1, ball2], false, i)
				updateSpares(spares, ball1)
				sum += parseInt(frames[i][0]) + parseInt(frames[i][1])
			}
		}
	}

	function createSpare(m) {
		spares[`spare${m}`] = {
			startingIndex: i,
			movingIndex: i,
			value: 10,
			active: true
		}
		m++
	}

	function createStrike(k, i) {
		strikes[`strike${k}`] = {
			startingIndex: i,
			movingIndex: i,
			value: 10,
			active: true,
			pushed: false
		}
		k++
		return k
	}
	// loop over spares update with proceeding values
	function updateSpares(obj, frameVal) {
		Object.values(obj).forEach((val, i) => {
			if(!obj[`spare${i}`].active) {
				return
			}
			// increment
			obj[`spare${i}`].movingIndex++
			let diff = obj[`spare${i}`].movingIndex - obj[`spare${i}`].startingIndex
			if(diff === 1) {
				obj[`spare${i}`].value = obj[`spare${i}`].value + frameVal
				sum += obj[`spare${i}`].value
				obj[`spare${i}`].active = false
			}
		})
	}

	function updateStrikes(obj, frameVal, isStrike, i) {
		Object.values(obj).forEach((val, ind) => {
			if(!obj[`strike${ind}`].active) {
				return
			}
			// increment
			obj[`strike${ind}`].movingIndex++
			// get number of increments
			let diff = obj[`strike${ind}`].movingIndex - obj[`strike${ind}`].startingIndex
			// if gap is 2, get value
			if(diff === 2) {
				let innerFrameVal = frameVal[0]
				obj[`strike${ind}`].value = innerFrameVal + obj[`strike${ind}`].value
				sum += obj[`strike${ind}`].value
				// set strike to false
				obj[`strike${ind}`].active = false
				// if gap is one increment
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
				let value = obj[`strike${ind}`].value + innerFrameVal
				obj[`strike${ind}`].value = value
				// check for new diff again before loop rerun
				if(obj[`strike${ind}`].movingIndex - obj[`strike${ind}`].startingIndex === 2) {
					sum += obj[`strike${ind}`].value
					obj[`strike${ind}`].active = false
					obj[`strike${ind}`].pushed = true
				}
			}
		})
	}
	return sum
}
console.log(bowlingScore('X X X X X X X X X XXX'))
// console.log(bowlingScore('11 11 11 11 11 11 11 11 11 11'))
// console.log(bowlingScore('00 5/ 4/ 53 33 22 4/ 5/ 45 XXX'))
// console.log(bowlingScore('42 42 72 6/ 72 62 6/ 0/ 4/ 1/X'))
// // console.log(bowlingScore('08 6/ 61 81 90 41 90 63 X 1/X'))
// console.log(bowlingScore('62 61 7/ 15 8/ 4/ 36 X 9/ 1/X'))

// 5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 7/2
// 6/ 5/ 6/ 2/ 3/ 0/ 1/ 8/ 3/ 6/5
// 00 00 00 00 00 00 00 00 00 0/X
// 00 00 00 00 00 00 00 00 X 0/X
// 9/ 40 X 9/ 63 04 14 X 03 1/X