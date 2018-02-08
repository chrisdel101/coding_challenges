// to get the counter to work, it must be passed in as an argument


// recursive function- fails big jumps
// function solution(start,end,jumpLength, count = 0){
//     count = count | 0;
//
//     if(start >= end){
// 		return count;
//     }
//     if(start < end){
//         start = start + jumpLength;
// 		return solution(start,end,jumpLength, count + 1)
//
//     }
// }
//
// console.log(solution(3,999111321,7,0))


function solution(start, end,jumpLength){
    var count = 0;
    while(start < end){
        start += jumpLength
        count++
    }
    return count
}
console.log(solution(1,999111321,7))
