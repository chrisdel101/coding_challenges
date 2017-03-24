// // - sort array
// // - check value against current item, counting each item
// // - when value changes, start a new counting
// // -move through all values this way until end
// //
// function findOdd(A) {
//   var A = [5,2,3,1,5,6,1,2,3]
//   var sorted = A.sort()
//   var num = new Array()
//
//   for(var i = 0;i < sorted.length;i++){
//     var current_val = sorted[i];
//   // var 1 = all number 1s
//   //   when value changes var changes
//   // var 2 = all number 2s
//     num[i] = (current_val.valueOf())
//     console.log(num[i])
//     if (current_val !== num[i]){
//
//






      // var histo = {},
      // for (var i=0; i < arr.length; ++i) {
      //     var current val = arr[i];
      //     if (histo[val]) {
      //        console.log(++histo[val]);
      //     } else {
      //        console.log(histo[val] = 1);
      //     }






  //
  //   }
  //   // else if (current_val !== sorted[i]){
  //   // //   num[i + 1] === sorted[i]
  //   //   console.log(num[i +1])
  //   }

//
// }
//



 // var x = arr;
 // for (var i=0;i<x.length;i++)
 // {
 //   var theName = x[i].name;
 //   theStatus[theName] = 'normal';
// ---- ATTEMPT 1-- arrays are values--
//  function findOdd(A) {
//   var obj = {
//
//   };
//   // assign first value
//   obj[0] = A[0]
//   // set up array loop
//   for (var i = 0; i < A.length; i++) {
//     // set obj loop
//     for(var key in obj){
//       if(obj[key] === A[i]){
//         obj[key] += 1
//       } else {
//         obj[i] = A[i]
//       }
//     }
//   }
//   console.log(obj)
// }
//
// findOdd([5,2,3,1,5,6,1,2,3])
 // function findOdd(A) {
 //  // set up array loop
 //  for (var i = 0; i < A.length; i++) {
 //    var obj = {
 //      key: value
 //    };
 //    A[i] = obj.key[i]
 //    value =
 //  }
 //
 //    // for(var key in obj){
 //    //   if(obj[key] === A[i]){
 //    //     obj[key] += 1
 //    //   } else {
 //    //     obj[i] = A[i]
 //    //   }
 //    console.log(obj)
 //    }



// findOdd([5,2,3,1,5,6,1,2,3])

// -assign obj[0] to the first array digit
// - after that
// // ------ATTEMPT 2-------------
//  function findOdd(A) {
//   var obj = {
//
//   };
//   obj[0] = A[0]
//   for (var i = 0; i < A.length; i++) {
//     var current = A[i]
//   // set a bunch of keys
//     obj[i] = current
//     // check keys to remove doubles
//     }
//     A.map((item) =>{
//     if
//     })
    // if (A.indexOf(current) != -1){
    // // console.log(current)
    // }
    //
    //   for(var key in obj){
    //     var current_key = obj[key]
    //     current_key
    //      curret_key = current
    //   console.log(current_key)
    //   }

  // // assign first value
  // obj[0] = A[0]
  // // => 0 : 5
  // for (var i = 0; i < A.length; i++) {
  //   var currentArray = A[i];
  //
  //
  //     if(obj[key] === A[i]){
  //       obj[key] += 1
  //     } else {
  //       obj[i] = A[i]
  //     }
  //   }
  //}
//   console.log(obj)
// }
//
// findOdd([5,2,3,1,5,6,1,2,3])


// function toObject(arr) {
//   var rv = {};
//   for (var i = 0; i < arr.length; ++i)
//     rv[i] = arr[i];
//   return rv;
// }


// }

// create new object
// loop through array and push into object with .call, and value false.
// Each iteration will push into object
// If in, the value will change from false/true, etc.
// False at the end is odd
// -----------ATTEMPT 3---------
function findOdd(A) {
  var countedNums = A.reduce(function (allNums, num) {
    if (num in allNums) {
      allNums[num]++;
    }
    else {
      allNums[num] = 1;
    }
    return allNums;
    return num;
  }, {});
}
findOdd([5,2,3,1,5,6,1,2,3,7])
//
//
