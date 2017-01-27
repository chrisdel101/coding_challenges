 // let the variable min be the current minimum reasonable guess for this round,

 // let the variable max be the current maximum reasonable guess.

// let n be the input


// Pseudocode general
// 1.Let min = 1 and max = n.
// 2.Guess the average of max and min, rounded down so that it is an integer.
// 3.If you guessed the number, stop. You found it!
// 4.If the guess was too low, set minmin to be one larger than the guess.
// 5.If the guess was too high, set maxmax to be one smaller than the guess.
// 6.Go back to step two.


// Pseudocode for array
// 1.Let min = 0 and max = n-1.
// 2.Compute guess as the average of max and min, rounded down (so that it is an integer).
// 3.If array[guess] equals target, then stop. You found it! Return guess.
// 4.If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
// 5.Otherwise, the guess was too high. Set max = guess - 1.
// 6.Go back to step 2.
//
// 1.Let min = 0 and max = n-1.
// 2.If max < min, then stop: target is not present in array. Return -1.
// 3.Compute guess as the average of max and min, rounded down (so that it is an integer).
// 4.If array[guess] equals target, then stop. You found it! Return guess.
// 5.If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
// 6.Otherwise, the guess was too high. Set max = guess - 1.
// 7.Go back to step 2.
//
//
//

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var guess;
var min = 0;
var max = (primes.length - 1);
// target is the guess
function binarySearch(array,target){
  while (min <= max){
    guess = Math.floor((max + min)/2)
// guess is the index, guess index
    if (array[guess] === target){
      return guess + "you're guess is correct";
    } else if (array[guess] < target){
        min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
}
console.log(binarySearch(primes,10));


// Solution from Kahn Academy

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
// var doSearch = function(array, targetValue) {
// 	var min = 0;
// 	var max = array.length - 1;
//     var guess;
//     var totalGuess = 1;
//     while (min <= max){
//     guess = Math.floor((max + min)/2);
//     if (array[guess] === targetValue){
//      println("Total guesses " +totalGuess);
//       return guess;
//     } else if (array[guess] < targetValue){
//         min = guess + 1;
//     } else {
//       max = guess - 1;
//     }
//     totalGuess = totalGuess+1;
//     println(guess);
//   }
//     return -1;
// };
//
// var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
// 		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
//
// var result = doSearch(primes, 73);
// println("Found prime at index " + result);
// var result = doSearch(primes, 41);
// println("Found prime at index " + result);
// var result = doSearch(primes, 39);
// println("Found prime at index " + result);
//
// Program.assertEqual(doSearch(primes, 73),
// 20);
// Program.assertEqual(doSearch(primes, 41),
// 12);
// Program.assertEqual(doSearch(primes, 39),
// -1);
//
//
//
