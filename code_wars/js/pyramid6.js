function pyramid(pyramid){
   let first
   let right
   let left
   let valTracker =[]
   let indexTracker =[]
   for (const [rowIndex,arr] of pyramid.entries()){
    // first row
    if(rowIndex === 0){
        first = arr[0]
        valTracker.push(arr[0])
    } else {
        if(!left || !right){
            left = first + arr[0]
            right = first + arr[1]
        } else {
            // console.log('arr', arr)
            let tempLeft
            for (let index = 1; index < arr.length-1; index++) {
                console.log('xx', arr)
                tempLeft = tempLeft ? Math.max(tempLeft, left+arr[index]) : Math.max(left+arr[0], left+arr[index])
                // console.log('set', left+arr[0])
                // console.log('set', left+arr[index])
            }
            left = tempLeft
            valTracker.push(left)
            // console.log('LLxxx',left)
            let tempRight
            for (let index = 1; index < arr.length-1; index+=2) {
                // console.log('arr', arr)
                // console.log('i', index)
                tempRight
                = tempRight ? Math.max(tempRight, right+arr[index]) : Math.max(right+arr[index], right+arr[index+1])
                console.log('tempRight', tempRight)
                // console.log('yy1', arr[index+1])
            }
            right = tempRight
            console.log('RRyy',right)
            valTracker.push(right)
        }
    
    }
   }
   console.log('values', valTracker)
   console.log('left', left)
   console.log('right', right)
}

console.log(pyramid([
    [75],//0
    [95, 64],//0
    // [17, 47, 82], //1
    // [18, 35, 87, 10], //2
    // [20,  4, 82, 47, 65],//2
    // [19,  1, 23, 75,  3, 34],//3
    // [88,  2, 77, 73,  7, 63, 67],//3
    // [99, 65,  4, 28,  6, 16, 70, 92],//3
    // [41, 41, 26, 56, 83, 40, 80, 70, 33],//4
    // [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],//4
    // [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],//5
    // [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],//5
    // [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],//6
    // [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],//7
    // [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]//7
]))

// console.log(pyramid([
//     [3],
//   [7, 4],
//   [2, 4, 6],
//   [8, 5, 9, 3]
// ]))
