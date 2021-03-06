  // The address at the point in the array where all of the unique numbers have occurred
//
// A non-empty zero-indexed array A consisting of N integers is given. The first covering prefix of array A is the smallest integer P such that 0≤P<N and such that every value that occurs in array A also occurs in sequence A[0], A[1], ..., A[P].
//
// For example, the first covering prefix of the following 5−element array A:
//   A[0] = 2
//   A[1] = 2
//   A[2] = 1
//   A[3] = 0
//   A[4] = 1
//
// is 3, because sequence [ A[0], A[1], A[2], A[3] ] equal to [2, 2, 1, 0], contains all values that occur in array A.
//
// Write a function
//
//   function solution(A) {
//
// that, given a zero-indexed non-empty array A consisting of N integers, returns the first covering prefix of A.
//
// For example, given array A such that
//   A[0] = 2
//   A[1] = 2
//   A[2] = 1
//   A[3] = 0
//   A[4] = 1
//
// the function should return 3, as explained above.
//
// Assume that:
//
//         N is an integer within the range [1..1,000,000];
//         each element of array A is an integer within the range [0..N−1].
//
// Complexity:
//
//         expected worst-case time complexity is O(N);
//         expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
//
// Elements of input arrays can be modified.


// MY ATTEMPT
//
// -create variable that will act as current highest variable.
// -loop through array
// -set first value in array to be the first value in the set.
// -compare next value.
//   -If greater than, then reassign the variable.
//   -if lower then move on.


//
// var array = [1,2,3,5,2];
//
//
//   function covPrefix(n){
//     var counter = 0;
//
//     for (var i = 0;i < n.length;i++){
//         console.log(i);
//       // if (i < counter){
//       //   counter = n[i];
//       // }
//       // return counter;
//       }
//   };
//
// console.log(covPrefix(array));


////////////DANIEL ATTEMPT////////

// -set loop index
// -loop through array
// -set each index to current_item
// -comapare current item to a hash used to store values.
// -check if current value is in array, current_value == undefined then unpdate the loop index to i
// -if hash is called storage, it'd be hash[current_item]

// ========ATTEMPT 2=========

function solution(A){
  var i = 0
  var j = i;
  var index;
  for (i; i < A.length; i++) {
    // console.log(i)
    // console.log(A[i])
    if(A[i] > j){
      j = A[i]
      console.log(j)
      index = i
    }
  }
  return index
}

console.log(solution([2,2,1,0,1]))
