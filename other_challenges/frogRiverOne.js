// ATTMEPT ONE- REASSIGN TOP NUMBER, doesn't work
// function solution(A,X){
//     var startLeaf = 0;
//     var endLeaf   = X;
//     for (var i = 0; i < A.length; i++) {
//         if(A[i] > startLeaf){
//             startLeaf = A[i]
//             console.log(`startLeaf ${startLeaf}`)
//             console.log(`endLeaf ${endLeaf}`)
//         }
//         if(startLeaf === endLeaf){
//             return i
//         }
//     }
// }

console.log(solution([1,2,3,3,2,1,5,3,20,10,9,9,8,7,4,6,8,11,11,12,14,13,15,16,17,18,19], 10))
