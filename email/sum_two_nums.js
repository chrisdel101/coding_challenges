// - use index - get val at each stage
// - loop val against the arr nums - exclude the indexOf of the val from comparison
function sumTwoNums(arr, num){
    // outer loop controls num
    for (var j = 0; j < arr.length; j++) {
            let outerVal = arr[j]
        // inner loops over arr once for every num
        console.log('OUTER', outerVal)
        let outerValIndex = arr.indexOf(outerVal)
        console.log('outerIndex', outerValIndex)
        for (var i = 0; i < arr.length; i++) {
            let innerVal = arr[i]

        // let val = arr.map((innerVal, index) => {
            // console.log('INNER', innerVal)
            // console.log('index', index)
            // console.log('indexOf', //`${innerVal}: ${arr.indexOf(innerVal)}`)
            // don't check outer against itself - if outer index matches the current index
             if(outerValIndex !== i){
                let sum = outerVal + innerVal
                console.log(outerVal + innerVal)
                if(sum === num){
                    console.log('equal')
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
}

console.log(sumTwoNums([22,3,14,5,-44, null], 17))
