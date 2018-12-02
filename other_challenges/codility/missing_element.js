function solution(A){
  A = A.sort()
  // sort function
  A.sort(function(a,b) { return a - b; });
  console.log(A)
  // undefined
  if (A ===  undefined){
    return []
    //length 2
  }
    //else
     if (A.length === 2){
    if(A[1] - A[0] != 1){
      return A[1] - 1
    }
  }
    else {
  // for proper range
  // console.log(true)
  for(var i = 0; i < A.length; i++) {
    // console.log(A[i])
      if ((A[i + 1] - A[i]) != 1){
        return (A[i] + 1)
      }
    }
  }
}
console.log(solution([2,1,3,5,4,6,8,9,10,11,12,13]))


// // missing first or last
// 0.146 s WRONG ANSWER,  got 7 expected 1
// stdout:
// [ 2, 3, 4, 5, 6 ]
//
// single
// 0.150 s WRONG ANSWER,  got 3 expected 1
// stdout:
// [ 2 ]
//
// double
// two elements
// 0.146 s RUNTIME ERROR,  tested program terminated unexpectedly
// stderr:
// Invalid result type, integer expected, 'undefined' found
// Perhaps you are missing a 'return'?
// stdout:
// [ 1, 2 ]
// 2. 0.148 s OK
// stdout:
// [ 1, 3 ]
// 3. 0.143 s RUNTIME ERROR,  tested program terminated unexpectedly
// stderr:
// Invalid result type, integer expected, 'undefined' found
// Perhaps you are missing a 'return'?
// stdout:
// [ 2, 3 ]
