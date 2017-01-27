//Linear search


    // for (var i = 0;i < array.length; i++){
    //   console.log(primes[i]);
    // }
// Write function that takes an array and a target value and returns index number of the target.
// Loop through array
// compare each value with the target
// once target is found exit

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var target= 31;
var i = 0;
function linearSearch(primes,target){
  console.log("inside");
  // while(primes[i] < target){
  //   console.log(i);
  // }
}
linearSearch(primes);





// function linearSearch(array, target){
//   for (var i = 0;i < array.length; i++){
//       console.log(i);
//     if (array[i] == `target){
//     // return array[i]i
//     } else {s
//       return "Not in the array";
//     }
//   }
//
// }
// console.log(linearSearch(primes,31));
//
//






// targetValue = 31;
//
// var doLinearSearch = function(array) {
//   for (var guess = 0; guess < array.length; guess++) {
//     if (array[guess] === targetValue) {
//         return guess;  // found it!
//     }
//   }
//   return -1;  // didn't find it
// };
// console.log(doLinearSearch(array));
