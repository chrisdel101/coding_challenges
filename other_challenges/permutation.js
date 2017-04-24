function solution(A){
    //sort
    A = A.sort(function(a,b) { return a - b; });

    for (var i = 1; i < A.length; i++) {
        let sum = A[i] - A[i -1]
        // console.log(sum)
        if(A[i] - A[i -1] != 1)
            return 0
        }
         return 1

    }
    // -fails on double of the same 
    // -fails on single



// --giveN solution---------
// function solution(A) {
//     let checkNum = []
//     for (let i = 1; i <= A.length; i++) {
//         console.log(checkNum[i])
//     }
//     for(a of A){
//         console.log(checkNum[a])
//     }
//     for (let i = 1; i <= A.length; i++) {
//         if (checkNum[i]){
//             return 0
//         }
//     }
//     return 1
// }

solution([2,3,4,4,6])
