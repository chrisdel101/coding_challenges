// to get the counter to work, it must be passed in as an argument

// call stack exceeds at 99999
// function solution(start,end,jumpLength, count = 0){
//     if((start > end) || (jumpLength === 0)){
// 		return count;
//     }
//     if(start < end){
//         start = start + jumpLength;
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
