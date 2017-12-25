// - sort
// - find the normal gap between the numbers
// - then if each index subracts from it the previous index, if should give the gap.
// - if it does not give them gap, that's it
//
// 1 - 2
// 2 - 3
// 3 - 4
// 4 - 6
//
// var space = 1
// 2-1= 1
// 3-2 = 1
// 4-3 = 1
// 6-4 = 2
// so we know six is one above the space
//
// add the space to 6
// 6- space = 5

// A.sort(function(a,b) { return a - b; });

// var arr = [1000, 2000, 4000, 5000]
// arr = arr.sort(function(a,b) { return a - b; });


// ==========ATTMEPT 1 using [i-1] != i- okay, but only for consecutive numbers
// function solution(A){
//     // sort
//     A = A.sort(function(a,b) { return a - b; });
//     if (A.length >= 4){
//         var gaps = []
//         var gapValue;
//         var missing;
//     // push all gaps into array
//         for (var i = 0; i < A.length; i++) {
//             //   console.log(A[i], A[i-1], A[i] - A[i - 1])
//             gaps.push(A[i] - A[i - 1])
//         }
//         console.log(`gaps ${gaps}`)
//         //all three first valus have same gap
//         // 2 - 1 === 4 -3
//         if((gaps[2] - gaps[1]) === (gaps[3] - gaps[2])){
//             console.log("equal")
//             gapValue = gaps[2] - gaps[1]
//             console.log(gaps[2], gaps[1])
//             console.log(gapValue)
//         // 3 - 1 (2)!= 4 - 3 (1)
//         } else if ((gaps[2] - gaps[1]) > (gaps[3] - gaps[2])){
//             console.log("first")
//             gapValue = gaps[3] - gaps[2]
//             console.log(gaps[2], gaps[1])
//             console.log(gapValue)
//         // 2 - 1 (1)!= 5 - 3 (2)
//         }  else if ((gaps[2] - gaps[1]) < (gaps[3] - gaps[2])){
//             gapValue = gaps[2] - gaps[1]
//             // console.log(true)
//         } else {
//             console.log(other)
//         }
//         // console.log(gapValue)
//         for (var j = 0; j < gaps.length; j++) {
//             // if (gap[j] != gapValue){
//             //     missing
//             // }
//             // console.log(gaps[j], gapValue)
//         }
//     }

// }
solution([60000, 70000, 90000, 100000])






  // find value of gap
  // if first 3 value are the same, thats the gap
    // var gap1 = missing[2] - missing[1]
    // var gap2 = missing[3] - missing[2]
    // console.log(gap2)
    // console.log(missing[3], missing[2])
    //
    // // if first value is larger than the second, second is gap, and second number is missing
    //
    //
    // if second number is bigger, first is the gap and third number is missing
    //
    // var gap1 = missing[2] - missing[1]
    // var gap2 = missing[3] - missing[2]
    // console.log(gap2)
    // console.log(missing[3], missing[2])


// ===============ATTMEPT 2 -binary search

// set min and set max
// divide by 2- get two sets
//
// function misingNumInSeq(source, min = 0, max = source.length - 1){
//     if(min >= max){
//         return min + 1;
//     }
//     let pivot = Math.floor((min + max)/2);
//     // problem is in right side. Only look at right sub array
//     if(source[pivot] === pivot + 1){
//     console.log(source)
//     console.log(pivot)
//     console.log(source[pivot])
//         return misingNumInSeq(source, pivot + 1, max);
//     } else {
//         return misingNumInSeq(source, min , pivot);
//     }
// }
// misingNumInSeq([1,2,3,5,6,9,10,15])


// TRUTHY FALSY////////////

function solution(A){
    let checkNum = []
    for(let i = 1; i <= A.length;i++){
        checkNum[i] = true
    }
    for (a of A){
        checkNum[a] = false
    }
    for (let i = 1; i <= A.length; i++) {
        if(checkNum[i]) {
            return 0
        }
    }
    return 1
}
console.log(solution([1,3,6,4,1,2]))
