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
    console.log('num', num)

        let breakingCall = nums[0] % nums[1]
        let breaker = GCF(breakingCall, num)
        console.log(GCF(breaker, num))


    // console.log('nums', nums[1] )
    // console.log('num1', parseInt(nums[1]))
    // if(parseInt(nums[0]) === 0 || parseInt(nums[1]) === 0){
    //     // console.log('inner 0',parseInt(nums[0]))
    //     // console.log('inner 1', parseInt(nums[1]))
    //     // console.log('here')
    //     throw "ZeroDivisionError"
    // }
    let commonFact = GCF(parseInt(nums[0]),parseInt(nums[1]) )
    console.log('comm', commonFact)
    if(commonFact === 1){
        console.log('7')
        // move minus value to top
        if(nums[1] < 0 && nums[0] > 0){
            // make bottom pos
            nums[1] = nums[1] * -1
            nums[0] = nums[0] * -1
            console.log('N0',nums[0])
            // console.log(`-${nums[0]}/${nums[1]}`)
            if(Math.abs(nums[0]) < Math.abs(nums[1])){
                return `${nums[0]}/${nums[1]}`

            }
        }
        // if top more, divide bottom into topNum
        if(Math.abs(nums[0]) > Math.abs(nums[1])){
            console.log('N1',nums[1])
            // console.log('N0',nums[0])
            let frontInt = parseInt(nums[0] / nums[1])
            // console.log('F   F', parseInt(frontInt))
            let newTop = nums[0] % nums[1]
            console.log('2')
            return(`${frontInt} ${Math.abs(newTop)}/${Math.abs(nums[1])}`)
        }
    }
    // else if(commonFact === 0){
    //     throw "ZeroDivisionError"
    // }
    let reducedTop = parseInt(nums[0]) /commonFact
    let reducedBottom = parseInt(nums[1]) /commonFact
    console.log('rT', reducedTop, 'RB', reducedBottom)
    if(Math.abs(reducedTop) < Math.abs(reducedBottom)){
        console.log('22')
        // console.log('N1', nums[1])
        if(reducedTop === 0){
            return `${0}`
        }
        if(reducedBottom < 0){
            console.log('INS')
            reducedBottom = reducedBottom * -1
            return `-${reducedTop}/${reducedBottom}`
        }
        console.log('ins')
        console.log('rT', reducedTop, 'RB', reducedBottom)
        return `${reducedTop}/${reducedBottom}`
    }
    let frontInt = round(reducedTop / reducedBottom)
    console.log('front', frontInt)
    let newTop = reducedTop % reducedBottom
    let newBottom = reducedBottom
    console.log('nt', newTop, 'nb', newBottom)
    if(!newTop || !newBottom){
            console.log('4')
        return `${frontInt}`
    } else {
            console.log('5')
            // if new bottom negative, make int positive
            if(newBottom < 0 && frontInt > 0){
                newBottom = newBottom * -1
                frontInt = frontInt * -1
                // else just make bottom pos
            } else if(newBottom < 0 && frontInt < 0){
                newBottom = newBottom * -1
            }
            if(newTop < 0){
                if(frontInt > 0){
                    frontInt = frontInt * -1
                    newTop = newTop * -1
                } else {
                    newTop = newTop * -1
                }
            }
        return `${frontInt} ${newTop}/${newBottom}`
    }
    // https://stackoverflow.com/questions/41586838/rounding-of-negative-numbers-in-javascript
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
// console.log(mixedFraction("0/18891"))
// console.log(mixedFraction("649/359"))
// console.log(mixedFraction("-4/-25"))
console.log(mixedFraction("883/-522"))
//
