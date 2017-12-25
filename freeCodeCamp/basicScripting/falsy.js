var arr = [false, null, 0, "",1, undefined, NaN]

// var new_array = []
// for (var i = 0; i < arr.length; i++) {
//   arr[i] = false
//   new_array.push(arr[i])
//   }
// console.log(new_array)


// function falsy(arr){
//   var new_array = []
//  for (var i = 0; i < arr.length; i++) {
//    if (Boolean(arr[i]) === false){
//     console.log("false " + arr[i])
//   } else if (Boolean(arr[i] === true){
//      new_array.push(arr[i])
//    }
//  }
//   return new_array
// }
// console.log(falsy(arr))

// arr.filter((falsy) =>{
//   return falsy
// })
// -------ATTEMPT 2 -for loop-- ok!
// function falsy(arr){
//   var new_array = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (Boolean(arr[i]) === true){
//       new_array.push(arr[i])
//     }
//   }
//   return new_array
// }
// console.log(falsy([7, "ate", "", false, 9]))
// console.log(falsy([false, null, 0, NaN, undefined, ""]))

// ----------ATTEMPT---3--filter- OK

function falsy(arr){
var x=  arr.filter((val) =>{
    return Boolean(val) !== false
  })
  return x
}
console.log(falsy([7, "ate", "", false, 9]))
