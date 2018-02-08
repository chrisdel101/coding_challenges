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


// function solution(start, end,jumpLength){
//     var count = 0;
//     while(start < end){
//         start += jumpLength
//         count++
//     }
//     return count
// }
// console.log(solution(1,999111321,7))
// //  				// console.log(count)
// 		return solution(start,end,jumpLength, count + 1)
//
//     }
// 	return count
// }
// console.log(solution(0,99991,10,0))
function solution(start,end,jumpLength){
     var count = 0;
     // if((jumpLength <= 0) || (start < end)){
     //     throw(err)
     //     return;
     // }
     var fullLength = end - start;
     var i;
     for (i = 0; i < fullLength; i += jumpLength) {
         // console.log(i)
         count++
     }
     return count
 }
solution(0,100,10,0)

function solution(start, end,jumpLength){
    var count = 0;
    while(start < end){
        start += jumpLength
        count++
    }
    return count
}
console.log(solution(1,999111321,7))
//  				// console.log(count)
// 		return solution(start,end,jumpLength, count + 1)
//
//     }
// 	return count
// }
// console.log(solution(0,99991,10,0))
function solution(start,end,jumpLength){
    var count = 0;
    // if((jumpLength <= 0) || (start < end)){
    //     throw(err)
    //     return;
    // }
    var fullLength = end - start;
    var i;
    for (i = 0; i < fullLength; i += jumpLength) {
        // console.log(i)
        count++
    }
    return count
}
solution(0,100,10,0)
