function makeIntervals(){

}


// let arr = [1, 5, null, 1, 2, 2, null, 3]
// console.log(makeIntervals(arr))

// loop over each - use length move over each num
// for (var i = 0; i < arr.length; i++) {
//     let current = arr[i]
//     // use inner for - move after calculating each num
// }
let arr = [1,2,5, 3,7]
// let tuples = []
// let storageArr = []
// let j = 0
// let copy
// while(arr.length) {
//     let current = arr[j]
//     console.log('current', current)
//     console.log('equal', arr.length)
//     // use BREAK to end loop
//     while(true){
//         // first run, push in item
//         console.log('arr j',arr[j])
//         storageArr.push(arr[j])
//         // stop when undefined
//         if(!arr[j]){
//             // slice off first digit - decrease arr by one
//             arr.splice(0,1)
//             console.log('splice', arr)
//             // reset inner counter
//             j = 0
//             // reset storageArr to empty
//             storageArr = []
//             break
//         }
//         // copy storageArr
//         copy = storageArr.slice()
//         tuples.push(copy)
//         j++
//     }
// }
// console.log(tuples)

function allMonintorWindows(arr) {
    let tuples = []
   let storageArr = []
   let j = 0
   let copy
    while(arr.length) {
        let current = arr[j]

        console.log('current', current)
        console.log('equal', arr.length)
        // use BREAK to end loop
        while(true){
            // first run, push in item
            console.log('arr j',arr[j])
            storageArr.push(arr[j])
            // stop when undefined
            if(!arr[j]){
                // slice off first digit - decrease arr by one
                arr.splice(0,1)
                console.log('splice', arr)
                // reset inner counter
                j = 0
                // reset storageArr to empty
                storageArr = []
                break
            }
            // copy storageArr
            copy = storageArr.slice()
            tuples.push(copy)
            j++
        }
    }
    return tuples
}
console.log(allMonintorWindows(arr))
