// function palindrome(str) {
//   for (var i = 0; i < str.length; i++) {
//     console.log(str[i])
//     }
//     for (var j = str.length- 1; j >= 0 ; j-- ){
//       console.log(str[j])
//     }
// }
// //
// //
// console.log(palindrome("dooh dooh daah"));


// console.log(str.charAt(0))

////////////ATTEMPT ONE/////NO GOOD////////////////
// function checkPalindrome(palindrome){
//   for(var i = palindrome.length;i > 0;i--){
//     console.log(palindrome[i])
//     if(palindrome[i] == palindrome.charAt(palindrome.length-1)){
//       console.log(palindrome[i])
//       return true
//     } else {
//       console.log(palindrome[i])
//       return false
//     }
//   }
// }
//
// console.log(checkPalindrome('eye'));
//
// var pal = "test word"
// for(var i = pal.length;i > 0;i--){
//   console.log(pal[i])
// }
////////////ATTEMPT TWO/////////////////////////////////
// loop one going forward, another counting back- trying compare but getting inaccurate results
// function palindrome(pal){
//   for (var i = 0; i < pal.length; i++) {
//       if (pal[i] == pal[pal.length - i - 1]){
//         console.log(pal[i], pal[pal.length - i - 1])
//         return true
//       } else {
//         return false
//       }
//
//   }
// }
// console.log(palindrome("ffaaf"))
////////////ATTEMPT THREE- comapre two string exactly///////////////////
// WORKING!!! FOR STRINGS ONLY
// function palindrome(pal){
//   var re= (/[^0-9a-z]/gi);
//   var lower = pal.replace(re,"").toLowerCase();
//     // console.log(lower)
//   var reversed = lower.split('').reverse().join('');
//     // console.log(reversed)
//   return (lower === reversed ? true: false)
//   }
//
// // var str = "test string"
// // console.log(str.split('').reverse().join(''))
//
// console.log(palindrome("0_0 (: /-\ :) 0-0"))

// PROFESSINOAL ANSWER
// function palindrome(str) {
//   /* remove special characters, spaces and make lowercase*/
//   var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
//     console.log(removeChar)
//   /* reverse removeChar for comparison*/
//   var checkPalindrome = removeChar.split('').reverse().join('');
//     console.log(checkPalindrome)
//   /* Check to see if str is a Palindrome*/
//    return (removeChar === checkPalindrome);
// }
// console.log(palindrome('eyee'));


////////////ATTEMPT FOUR/////////////////////////////////


// function palindrome(pal){
//   var re= (/[^0-9a-z]/gi);
//   var lower = pal.replace(re,"").toLowerCase()
//     // console.log(lower)
//   var reversed = lower.split('').reverse().join('');
//     // console.log(reversed)
//   return (lower === reversed ? true: false)
//   }
//
// // var str = "test string"
// // console.log(str.split('').reverse().join(''))
//
// console.log(palindrome(1111))



////////////ATTEMPT FIVE WITH NUMBERS/////////////////////////////////
// var reg = (/^[a-zA-Z\s]+$/);
// console.log(("palindrome").match(reg))


// FOR LOOP BACKWARDS- no go
// function check(value){
//     if (isNaN(value) === false){
// //means it is a number
//   console.log(value)
//   var rev_number = [];
//   for(var i = value; i > 0;i--){
//     console.log(i)
//     rev_number.push(i)
//   }
//     }
//     return rev_number.join('')
// }
// console.log(check(10))

- if number, turn to string with split
 -another turn number to string, split to array, reverse
- num_word.split().reverse()
-compare the two


function check(value){
    if (isNaN(value) === false){
//means it is a number
  console.log(value)
  var rev_number = [];
  for(var i = value; i > 0;i--){
    console.log(i)
    rev_number.push(i)
  }
    }
    return rev_number.join('')
}
console.log(check(10))
