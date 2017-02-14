function countPositivesSumNegatives(input) {
  if (input.length === 0){
    return []
  } else if (input == null){
    return []
  }  else {
    var blankArray = [];
    var posCount = 0;
    var negSum = 0;
    for (var i = 0;i < input.length;i++){
      if (input[i] > 0){
        // console.log([i])
        posCount += 1;
        // console.log(posCount)
      } else {
        negSum += input[i];
      }
    }
    blankArray.push(posCount, negSum)
     return(blankArray);
  }
}
console.log(countPositivesSumNegatives([]))

//
// Off by one in the loop for some reasonable
// Pseudocode
// - make blank array
// - make positve and negative sum vars, set to 0
// - looop through and check, if positive add the index to posSUm if negative add the number.
// - put the two into the blank array


//
// Input from creator/////////////////
//
// MDN has a good article about the difference between the strict equality (===) and the loose equality (==). Take a look at it.
//
// I have just looked at your solution.
// According to the kata description you have to consider one condition for some wrong inputs (e.g. null or empty) - return an empty array.
// So, your check for null is ok, but not the check for empty.
//
// The problem at this code lines
//
// else if (input == []) {
//     return  Array.lenght === 0
// }
// Your comparison for empty (input == []) compares the pointer to the input array with the pointer to a new array. Since these references are always different, the result will be always false.
// The property length is available only on Array instances. You can not get length of type Array. And the return value (Array.lenght === 0) is strange at all. You return an empty array after the check for null (return []), but why not the same here?


// function test(input){
//   return (input)
// }
// console.log(test([]))
