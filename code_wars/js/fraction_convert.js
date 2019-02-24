const assert = require('assert')
// make it a decimal
// take right side as int
// function mixedFraction(s){
//     // console.log('STR', s)
//     let num = s.split('/').reduce((p, c) => p / c);
//     console.log('num', num)
//     let int
//     // if(num < 0){
//     //     int = Math.ceil(num)
//     // } else {
//     //     int = Math.floor(num)
//     //
//     // }l
//     int = Math.floor(num)
//
//     console.log('int', int)
//     let decimal = num % 2
//     decimal = Math.floor(decimal * 100) / 100
//     // console.log('dec', decimal)
//     let nums = s.split("/")
//     console.log('nums', nums)
//     // let remainder = nums[0] % nums[1]
//     let remainder = -505289
//     console.log('rem', remainder)
//     let originalDenom = nums[1]
//     let commonFact = GCF(remainder, originalDenom)
//     console.log('comm Fact',commonFact)
//     let newTop = Math.abs(remainder / commonFact)
//     console.log('ntop',newTop)
//     let newBottom = Math.abs(originalDenom / commonFact)
//     console.log('Nbottomg',newBottom)
//     if(newTop === 0){
//         return(`${int}`)
//     } else if(int === 0) {
//         return(`${newTop}/${newBottom}`)
//
//     } else {
//         console.log(`${int} ${newTop}/${newBottom}`)
//         return(`${int} ${newTop}/${newBottom}`)
//     }
//     // let frac = decimal * 100
//     // let commonFact = GCF(frac, 100)
//     // let topNum = frac / commonFact
//     // let bottomNum  = 100 / commonFact
//     // console.log(topNum, bottomNum)
//     // // decimal = parseFloat(decimalStr)
//     // console.log(frac)
//     // const factors = number => Array
//     // .from(Array(number + 1), (_, i) => i)
//     // .filter(i => number % i === 0)
//     function GCF(a, b) {
//         if (b === 0) return a;
//         else return GCF(b, a % b);
//     }
// }
// get commonFact- if one return
// if lower is negative, move to top value
function mixedFraction(s){
    let nums = s.split("/")
    let num = s.split('/').reduce((p, c) => p / c);
    // console.log('num', num)
    let breakingCall = nums[0] % nums[1]
    let breaker = GCF(breakingCall, num)
    console.log(GCF(breaker, num))

    console.log(nums)

    let commonFact = GCF(parseInt(nums[0]),parseInt(nums[1]) )
    commonFact = Math.abs(commonFact)
    console.log('COM', commonFact)
    let result

    if(commonFact === 1){
        console.log('q0000')
        let frontInt
        let newTop
            if(Math.abs(nums[0]) < Math.abs(nums[1])){
                console.log('numS', nums)
                if(nums[0] === '0'){
                    result =`${0}`
                } else {
                    result = `${nums[0]}/${nums[1]}`
                }
            } else if(Math.abs(nums[0]) > Math.abs(nums[1])){
            // console.log('N1',nums[1])
            // console.log('N0',nums[0])
            frontInt = parseInt(nums[0] / nums[1])
            console.log('F   F', parseInt(frontInt))
            newTop = nums[0] % nums[1]
            console.log('newT', newTop)
            // console.log('2')
            if(newTop === 0){
                result = `${frontInt}`
                console.log('res', result)
            } else {
                result = `${frontInt} ${Math.abs(newTop)}/${Math.abs(nums[1])}`
            }
        }
        console.log('res', result)
        console.log('newTop', newTop)
        if(result){
            return checkNegativity(result)
        } else {
            let check = checkNegativity(s)

        }
        return result ? checkNegativity(result) : nums[0]
        // return result
    }

    // if bottom neg, move minus to top
    // if(parseInt(nums[1]) < 0 && parseInt(nums[0] > 0)){
    //     nums[1] = nums[1] * -1
    //     nums[0] = nums[0] * -1
    //     // if both negtaive remove bottom negative sign
    // } if( parseInt(nums[1]) < 0 && parseInt(nums[0]) < 0 ){
    //     console.log('HI')
    //         nums[1] = nums[1] * -1
    // }
    // if(nums[0] === "0"){
    //     return `${0}`
    // }


    let reducedTop = parseInt(nums[0]) /commonFact
    let reducedBottom = parseInt(nums[1]) /commonFact
    console.log('rT', reducedTop, 'RB', reducedBottom)
        // if staying as reduced fraction
        if(Math.abs(reducedTop) < Math.abs(reducedBottom)){
            console.log('Fractin')
            result = `${reducedTop}/${reducedBottom}`
            result = checkNegativity(result)
            return result
        } else {
            let frontInt = round(reducedTop / reducedBottom)
            console.log('FI', frontInt)
            let newTop = reducedTop % reducedBottom
            let newBottom = reducedBottom
            if(!newTop || !newBottom){
                result = `${frontInt}`
                return result
            } else {
                console.log('5')
                // if new bottom negative, make int positive

                result = `${newTop}/${newBottom}`
                result = checkNegativity(result)
                console.log(result[0])
                if(frontInt < 0){
                    if(result[0] === "-"){
                        result = result.slice(1)
                    }
                }
                console.log('res', result)
                result = `${frontInt} ${result}`
                return result
            }
        }
        // if(parseInt(nums[1]) < 0 && parseInt(nums[0] > 0)){
        //     nums[1] = nums[1] * -1
        //     nums[0] = nums[0] * -1
        //     // if both negtaive remove bottom negative sign
        // } if( parseInt(nums[1]) < 0 && parseInt(nums[0]) < 0 ){
        //     console.log('HI')
        //         nums[1] = nums[1] * -1
        // }
    if(nums[0] === "0"){
        return `${0}`
    }
    // https://stackoverflow.com/questions/41586838/rounding-of-negative-numbers-in-javascript
    function checkNegativity(str) {

	let tempStr = str.split("/")
	console.log(Math.abs(tempStr[0]) / Math.abs(tempStr[1]) === 1)
	if ((tempStr[0] < 0 && tempStr[1] < 0) || (tempStr[0] > 0 && tempStr[1] < 0)) {
		tempStr[0] = tempStr[0] * -1
		tempStr[1] = tempStr[1] * -1
		if (Math.abs(tempStr[0]) / Math.abs(tempStr[1]) === 1) {
			if (tempStr[1] < 0 || tempStr[0] > 0) {
				// console.log('third')

				console.log("T0", tempStr[0])
				return `-${tempStr[0]}`
			} else if (tempStr[1] > 0 || tempStr[0] < 0) {
				// console.log('fourth')
                return `${tempStr[0]}`
				console.log("T1", tempStr[0])

			}
			console.log('first')
			console.log(tempStr)
        }
			return `${tempStr[0]}/${tempStr[1]}`
			// top is zero
		} else if (tempStr[0] === '0') {
			console.log('second')

			return `0`
		} else if (Math.abs(tempStr[0]) / Math.abs(tempStr[1]) === 1) {
			console.log(tempStr[1] < 0 || tempStr[0] > 0)
			if (tempStr[1] < 0 || tempStr[0] > 0) {
				console.log('third')

				console.log("T0", tempStr[0])
				return `-${tempStr[0]}`
			} else if (tempStr[1] > 0 || tempStr[0] < 0) {
				console.log('fourth')

				console.log("T1", tempStr[0])
				return `${tempStr[0]}`
			}
		}
		return str
	}


    function round(v) {
        if(v >= 0){
            return Math.floor(v)
        } else {
            return Math.ceil(v)
        }
    }
    function GCF(a, b) {
        // if (a === 0 || b === 0) return 0
        if (b === 0) return a;
        else return GCF(b, a % b);
    }
}
assert.strictEqual(mixedFraction("5/1"), "5")
// console.log(mixedFraction("202/-130"))

console.log(mixedFraction("0/1"))
// console.log(mixedFraction("-62/-96"))
