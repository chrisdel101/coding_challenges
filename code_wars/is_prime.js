// function isPrime(num){
//   var isPrime;
//   var range = [];
//   for (var i = 1; i < num; i++) {
//      (range.push(i));
//    }
//    console.log(range)
//   for(var j = 0; j < range.length; j++){
//

    // console.log(range[j])
    // console.log(range.length)
    // console.log(j)
    // console.log((range.length - 1) % j)
  //   if (range.length - 1 % j === 0){
  //     is_prime = false;
  // } else {
  //     is_prime = true;
  // }

  // console.log(is_prime)

///////////////////////////////////////////////////
// Idea below- function to make number into a range is called
// then range is loop through until last, where division occurs
//
// function isPrime(num){
//   makeRange(num)
//   var prime;
//   for(var i = 2;i < num-1;i++){
//     if(num % i === 0){
//       prime = false
//     } else {
//       prime = true;
//     }
//   }
//   (prime)
// }
// isPrime(2);
//
// function makeRange(num){
//   var range = [];
//   for (var i = 1; i <= num; i++) {
//     range.push(i);
//   }
//   return(range)
// }
// makeRange(11)
//
// CURRENT WAY
// take in a number
// make it a range - 1- this is HARD in JS
// start from 2, and loop through
// if end num / i = 0, not prime
////////////////////////////////////////////////////////////////
// function makeArray(N){
//   var arr = [];
//
//   for (var i = 0; i <= N; i++) {
//      arr.push(i);
//   }
//   return arr
// }
// console.log(makeArray(10))
////////////////////////////////////////////////////////////////

// list = 2,node 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,45, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
//
// 47
//
// if 47


// if (num === 1|| 0){
//   return true
// } else if (num % 2 === 0){
//   return false

////////////////////////////////////////////////////////////////
// MAIN ATTEMPT
// function isPrime(num){
//   var is_prime;
//   for(var i = 0;i < num;i++){
//     if(num %i === 0){
//       is_prime = false;
//     } else if (i === num-1){
//     is_prime = true;
//   }
//   return is_prime
//   }
// }
// console.log(isPrime(4));


////////////////////////////////////////////////////////////////
// FROM STACK OVERFLOW
// // var isPrime = function (n) {
//   if (n < 2) {
//     return false
//   } else if (n === 2) {
//     console.log(n)
//     // return true
//   }
//   for (var i = 2; i < n; i++) {
//     //i = 2,3,4,5,6,7
//     if (n%i === 0) {
//       return false
//     }else if (i === n-1) {
//       // console.log(i)
//       return true
//     }
//   }
// }
// console.log(isPrime(7));


////////////////////////////////////////////////////////////////
function isPrime(num){
  // if less than 1, false
  if (num < 1){
    return false
  }
  // if 1, false
  if (num === 1){
    return false
    // if two, if true
  } else if (num === 2){
    return true
  //  higher than 2, set i = 2 to begin
  } else {
    for(var i = 2;i < num;i++){
    // loops through every number expect itself, if it's divisibale by any of them, it's not prime
      if(num % i === 0){
        return false;
      }
    }
    return true
  }
}
console.log(isPrime());
////////////////////////////////////////////////////////////////
// FROM W3- USED TO GET SYNTAX
// function test_prime(n){
//   if (n===1){
//     return false;
//   } else if(n === 2) {
//     return true;
//   } else {
//     for(var x = 2; x < n; x++){
//       if(n % x === 0){
//         return false;
//       }
//     }
//     return true;
//   }
// }
//
// console.log(test_prime(37));
