// Given an array of integers, remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//
//
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

///////////////FIRST ATTEMPT//////////////////////////////////////////
// check the value of the first number
// loop through array and check value of each number
// In second loop,
//
// adding to an array.
// If value is added, skip additional values.
// Once all values are checked, array.sort
// Delete the smallest value array[0].
// return the new array as the answer.

// var array = [1,2,3,4,5];
// var checkNumbers = [];
//
// var removeSmallest = function(numbers) {
//   checkNumbers.push(numbers[0]);
//   for (var i = 0;i < numbers.length;i++){
//     for (var j = 0;j < checkNumbers.length;i++){
//       if (numbers[i] === checkNumbers[j]) {
//         checkArray += numbers[i];
//         console.log(checkArray);
//     }    // console.log(checkNumbers[j]);
//       checkNumbers.push(numbers[i]);
//   }
//     }
//     console.log(checkNumbers);
// }
// removeSmallest(array);


///////////////////////////SECOND ATTEMPT/////////////////////////////////


// var array = [1,2,3,4];a
// // // top loop does return the smallest value.
// // To reverse to return largest reverse < sign.
// function removeSmallest(numbers){
//   var smallest = numbers[0];
//   // console.log(smallest);
//
//   for (var i = 1;i < numbers.length;i++){
//     if (numbers[i] < smallest){
//       smallest = numbers[i];
//       console.log(smallest);
//     }
//     for (var j = numbers.length -1 ;j >= 0; j--){
//       // console.log(numbers[j]);
//       if(smallest === numbers[j]){
//
//         numbers.splice(j,1);
//       }
//         else if (numbers.length <= 0){
//         return [];
//       } else if (numbers != 'numb'){
//         return [];
//       } else if (numbers == undefined) {
//         return [];
//
//       }
//     }
//
//   }
//
//
//     console.log(numbers);
// };
// removeSmallest(array);


//////////////THIRD ATTEMPT//////////////////
// -Set var first item to be the smallest
// -Loop through
// -comapre current_item to smallest
// -if < smallest reassign smallest to current_item
//
// -loop through, if current_item == i, splice(i,1)---remove i and only one
// -break loop to make sure only the one value is removed.

function removeSmallest(numbers){
  var smallest = numbers[0];

  for (var i = 0;i < numbers.length;i++){
    if (numbers[i] < smallest){
      smallest = numbers[i];
    }
  }
  var smallInd = (numbers.indexOf(smallest))

  for (var j = 0;j < numbers.length;j++){
    // console.log(numbers[j])
    if (numbers[j] === smallest){
      numbers.splice(smallInd,1)
      break;
    }
    }
  console.log(numbers)
}
removeSmallest([]);
