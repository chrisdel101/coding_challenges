// recursive version
// function evaporator(content, evaported, threshold){
//     let  = 10
//     let breakingPoint = content * (threshold / 100)
//     let i = 0
//
//     function recurse(content, evaported, threshold){
//         let tenPercent = content * (evaported/100)
//         let contentLeft = content - tenPercent
//         i++
//         if(contentLeft < breakingPoint) return
//     	recurse(contentLeft, evaported, threshold)
//     }
//     recurse(content, evaported, threshold)
//     return i
// }
//
// console.log(evaporator(10,10,10))

function evaporator(content, evaported, threshold){
    let breakingPoint = content * (threshold / 100)
    let i = 1
    let amountEvap = content * (evaported/100)
    // console.log('evap num',evaported/100)
    let contentLeft = content - amountEvap
    // console.log(contentLeft)

    // while (i < 5) {
    while( contentLeft > breakingPoint){
        i++
        amountEvap = contentLeft * (evaported/100)
        contentLeft = contentLeft - amountEvap
        console.log(contentLeft)
    }

    return i
}

console.log(evaporator(100, 4.69, 2.49))
