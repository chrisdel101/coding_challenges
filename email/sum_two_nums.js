// checks if any two arr values add up to a number
// takes an array and a num to match
// returns an object with sum: true/ false, and info of the two arr values
function sumTwoNums(arr, num){
    // set to true once a match is made
    let sumMade = false
    // outer loop controls num
    for (var j = 0; j < arr.length; j++) {
        let outerVal = arr[j]
        // get index of outer- same as j
        let outerValIndex = j
        // inner loops over arr once for every num
        for (var i = 0; i < arr.length; i++) {
            let innerVal = arr[i]
            // don't check outer against itself - if outer index matches the current index, skip
             if(outerValIndex !== i){
                let sum = outerVal + innerVal
                //if sum, then return obj & true
                if(sum === num){
                    sumMade = true
                    return {
                        sum: true,
                        numbers: [
                            {
                                first: outerVal,
                                index: outerValIndex
                            },
                            {
                                second: innerVal,
                                index: i
                            }
                        ]
                    }
                }
            }
        }
    }
    // if not match, return false
    if(!sumMade){
        return false
    }
}


// UNIT TESTs
const unitTest1 = sumTwoNums([22,3,14,5,-44, null], 17)
console.log(unitTest1.sum === true)
console.log(unitTest1.numbers[0].first === 3)
console.log(unitTest1.numbers[1].second === 14)

const unitTest2 = sumTwoNums([55, 2,11,603,400, 29,66,32, 77, 791, 10,44, 4, 2, 99, 548, 790, 91, 839, 3429, 43, 129], 632)
console.log(unitTest2.sum === true)
console.log(unitTest2.numbers[0].first === 603)
console.log(unitTest2.numbers[1].second === 29)

const unitTest3 = sumTwoNums([55, 2,11,603,400, 29,66,32, 77, 791, 10,44, 4, 2, 99, 548, 790, 91, 839, 3429, 43, 129], 433)
console.log(unitTest3 === false)
