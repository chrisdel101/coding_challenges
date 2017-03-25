
// ----------ATTEMPT 1 - compare strings
// function mutation(arr){
//   var first_word = arr.splice(0,1);
//   var second_word = arr;
//   first_word = first_word.toString().split('').sort().join('').split(0)
//   second_word = second_word.toString().split('').sort().join('').split(0)
//   return first_word.indexOf(second_word)
//   console.log(first_word, second_word)
// }
//
// console.log(mutation(["hello", "hey"]))
//
//
// // - slice off first word arr.splice(0,1)
// // - make each var
// // -
// ----------ATTEMPT 2- splice words out
// function mutation(arr){
//   var first_word = arr.splice(0,1)
//   first_word = first_word.toLowerCase();
//   var second_word = arr.toLowerCase();
//
//   for (var i = 0; i < second_word.length; i++) {
//     if (first_word.indexOf(second_word[i]) < 0)
//       return false;
//     }
//     return true
//   }
//
// console.log(mutation(["hello", "Hello"]))


console.log(["Alien"].indexOf(["line"]))
