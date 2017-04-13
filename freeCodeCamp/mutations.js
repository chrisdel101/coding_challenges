
// ----------ATTEMPT 1 - compare strings
// function mutation(arr){
//   var target = arr.splice(0,1);//first
//   var test = arr;//second
//   target = target.split('').sort().join('').split(0)
//   test = test.toString().split('').sort().join('').split(0)
//   return target.indexOf(test)
//   console.log(target, test)
// }
 // ----------ATTEMPT 1 - VERSION 2
 function mutation(arr){
   var target = arr.splice(0,1);//first
   var test = arr;//second
 // use sting methods, need [0]
   target = target[0].toLowerCase()
   test = test[0].toLowerCase()
  for(var i=0;i<test.length;i++){
    if (target.indexOf(test[i]) < 0)
       return false
     }
     return true
   }

console.log(mutation(["hello", "hey"]))

2
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


// console.log(["Alien"].indexOf(["line"]))
// ---------------ATTEMPT 3-------------

function mutation(arr){

}
