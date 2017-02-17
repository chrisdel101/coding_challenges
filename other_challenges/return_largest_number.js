// function largestOfFour(arr) {
//   var largest = [];
//
//   for (var i = 0; i < arr.length; i++) {
// //
//     var current_val = arr[i][0]
//     for (var j = 0; j < arr[i].length; j++) {
//       // console.log(current_val)
//       if(arr[i][j] > current_val){
//         current_val = arr[i][j]
//         console.log(current_val)
//       }
//     }
//     largest.push(current_val)
// //
//     }
//   console.log(largest);
// }


///////////////////PROFESSSIONAL ANSWER/////////////////////
// function largestOfFour(arr) {
//   var results = [];
//   for (var n = 0; n < arr.length; n++) {
//     var largestNumber = arr[n][0];
//     console.log(largestNumber)
//     for (var sb = 1; sb < arr[n].length; sb++) {
//       if (arr[n][sb] > largestNumber) {
//         largestNumber = arr[n][sb];
//       }
//     }
//
//     results[n] = largestNumber;
//   }
//
//   console.log(results);
//   }

// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//
// //
// function largestOfFour(arr) {
//   var largest = [];
//   for (var i = 0; i < arr.length; i++) {
//     var current_val = arr[0][0]
//     for (var j = 0; j < arr[i].length; j++) {
//       // console.log(current_val)
//       if(arr[i][j] > current_val){
//         current_val = arr[i][j]
//         // console.log(current_val)
//       }
//     }
//     // at the end of the inner loop it ends, so then it exits and pushes to the array, but the outer array keeps going.
//     largest.push(current_val)
//     current_val = 0
//     // console.log(largest);
//
//     }
//   return largest;
// }
//
// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


///////////////////PROFESSSIONAL ANSWER2/////////////////////

function largestOfFour(arr) {
  return arr.map(function(group, index, arr){
    console.log(arr)
    });
  };


largestOfFour([13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]);

//)

I'm too confused. I don't even know where name fits into the problem. Shoudld I be adding a name prop?

My solution has no objects with a prop of name. I only impliment name in the solution since it calls for it. I literally just add name when I try to run it. If I do .name on my own solution I'd get a error since there is no name.
