const assert = require('assert')

function mixedFraction(s){
    let nums = s.split("/")
    let num = s.split('/').reduce((p, c) => p / c);
    let breakingCall = nums[0] % nums[1]
    let breaker = GCF(breakingCall, num)
    // get comm factor
    let commonFact = GCF(parseInt(nums[0]),parseInt(nums[1]) )
    commonFact = Math.abs(commonFact)
    let result

    if(commonFact === 1){
        let frontInt
        let newTop
            if(Math.abs(nums[0]) < Math.abs(nums[1])){
                if(nums[0] === '0'){
                    result =`${0}`
                } else {
                    result = `${nums[0]}/${nums[1]}`
                }
            } else if(Math.abs(nums[0]) > Math.abs(nums[1])){
            frontInt = parseInt(nums[0] / nums[1])
            newTop = nums[0] % nums[1]
            if(newTop === 0){
                result = `${frontInt}`
            } else {
                result = `${frontInt} ${Math.abs(newTop)}/${Math.abs(nums[1])}`
            }
        }
        if(result){
            return checkNegativity(result)
        } else {
            let check = checkNegativity(s)
        }
        return result ? checkNegativity(result) : nums[0]
    }
    let reducedTop = parseInt(nums[0]) /commonFact
    let reducedBottom = parseInt(nums[1]) /commonFact
        // if staying as reduced fraction
        if(Math.abs(reducedTop) < Math.abs(reducedBottom)){
            result = `${reducedTop}/${reducedBottom}`
            result = checkNegativity(result)
            return result
        } else {
            let frontInt = round(reducedTop / reducedBottom)
            let newTop = reducedTop % reducedBottom
            let newBottom = reducedBottom
            if(!newTop || !newBottom){
                result = `${frontInt}`
                return result
            } else {
                // if new bottom negative, make int positive
                result = `${newTop}/${newBottom}`
                result = checkNegativity(result)
                if(frontInt < 0){
                    if(result[0] === "-"){
                        result = result.slice(1)
                    }
                }
                result = `${frontInt} ${result}`
                return result
            }
        }

    function checkNegativity(str) {
    	let tempStr = str.split("/")
    	if ((tempStr[0] < 0 && tempStr[1] < 0) || (tempStr[0] > 0 && tempStr[1] < 0)) {
    		tempStr[0] = tempStr[0] * -1
    		tempStr[1] = tempStr[1] * -1
    		if (Math.abs(tempStr[0]) / Math.abs(tempStr[1]) === 1) {
    			if (tempStr[1] < 0 || tempStr[0] > 0) {
    				return `-${tempStr[0]}`
    			} else if (tempStr[1] > 0 || tempStr[0] < 0) {
                    return `${tempStr[0]}`
    			}
            }
    			return `${tempStr[0]}/${tempStr[1]}`
    		} else if (tempStr[0] === '0') {
    			return `0`
    		} else if (Math.abs(tempStr[0]) / Math.abs(tempStr[1]) === 1) {
    			if (tempStr[1] < 0 || tempStr[0] > 0) {
    				return `-${tempStr[0]}`
    			} else if (tempStr[1] > 0 || tempStr[0] < 0) {
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
    // source https://codereview.stackexchange.com/a/166362/136499
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
