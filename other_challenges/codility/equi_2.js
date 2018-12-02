// ----------ATTEMPT(failure 1-----------)

// function solution(A){
//   var leftSums = []
//   var rightSums = []
// // while( there is still some left left)
//
//   var leftSum = 0
//   for (var i = 0; i < A.length; i++){
//    leftSum = leftSum + A[i]
//    leftSums.push(leftSum)
//     console.log(leftSum + "top")
//   }
//   var rightSum = 0
//   for (var j = A.length - 1; j >= 0; j--) {
//     rightSum = rightSum + A[j]
//     rightSums.push(rightSum)
//      console.log(rightSum + "bottom")
//   }
//   console.log(leftSums)
//   console.log(rightSums)
// }
// console.log(solution([1,2,3,4]))
// - get length, subract all of array but the first
// - add that
// - move digit forward and compare value again.
// ----------ATTEMPT 2-----------)

// function solution(A){
//   for (var i = 0; i < A.length; i++) {
//   var firstSum = 0;
//   var secondSum = 0;
//
//   var measurer1 = i + 1
//
//     for(var j = 0;j < i + i;j++){
//       console.log(firstSum += A[j] + "first sum")
//     }
//   }
// }
// solution([1,2,3,4])

// ----------ATTEMPT 3-----------)

function solution(A){

  var leftSum = 0,
      leftSums = [],
      rightSums = [],
      answers = []

  var rightSum = A.reduce((acc, val) => {
    return acc + val
  }, 0) // 10
  console.log(rightSum)
  var checkValue = A.map((i, index) => {

    rightSum -= i
    // console.log(rightSum)

    rightSums.push(rightSum)
    // 10 -2 => 8
    // 10 -2 => 6
    // ...
    if(rightSum === leftSum){
      answers.push(index)
    }
    leftSum += i
    leftSums.push(leftSum)
  })
  return answers
}
console.log(solution([-1,3,-4,5,1,-6,2,1]))
