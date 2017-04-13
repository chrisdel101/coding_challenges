// function destroyer(arr) {
// //make array of arguments
//   var test = []
//   for(var i = 0;i < arguments.length;i++){
//   test.push(arguments[i])
//   }
//   // console.log(test)
//   // set first to array - leave rest of array
//   var target = test.splice(0,1)
//
//   //set first element to array
//   // var first = a[0]
//   // console.log(first)
//   console.log(test)
//   console.log(target)
//   for (i=0;i< test.length;i++) {
//     if (target.indexOf(test[i]) < 0){
//       return false;
//   }
//   return true;
//  }
// }
// }
  // ANOTHER FILTER ATTEMPT - NO GO
  // first.filter((item) =>{
  //   return a.indexOf(item) > -1
  // })

  // TRY TO USE FILTER - ERROR?
  //return the numbers to remove
  // var rest = arr.filter((items) =>{
  //   let first = items[0]
  //   return !first
  //   })
  //   rest()

// - make it all into an array
// -make first arguments an array
// - loop through the array with the rest of the value to the length of arguments
// - if i is equal to the array value, array. splice t0 Remove
// - this should leave only the values not given.

// ([[1,2,3,4,],2,3]).filter((items, index) => {
//   var arr = items[0]
//   return !arr
// })
//
//
// function array(arr){
// var a = []
// for(var i = 0;i < arguments.length;i++){
// a.push(arguments[i])
// }
// console.log(a)
// }
// array([1,2,3,4],2,3)
//////////////////////////////////////////


function destroyer() {

  var args = [] //second_part
  for(var i = 0;i < arguments.length;i++){
  args.push(arguments[i])
  }
  var first_part = args.splice(0,1)//arary of top

  // console.log(first_part)
  //

  var normal = [];
  console.log(args)

// make nested into normal array
  for (var i=0;i<first_part.length;i++){
    for(var j=0;j<first_part[i].length;j++){
      normal.push(first_part[i][j])
      }
    }
      console.log(normal)
  for (var i = 0; i < normal.length; i++) {
    for(var j = 0;j < args.length;j++){
      if(args[j] == normal[i]){
        delete normal[i]
      }
    }
  }
  console.log(normal)
}
  // for (var i=0;i< args.length;i++) {
  //   for(var j=0;j< target.length;j++){
  //   console.log(args[i])
  //     // console.log(target[j])
  //     // if (target[i] == args[j]){
  //       // delete args[i]
  //     // }
  //   }
  // }
  // return args

destroyer([1,2,3,4],2,3,4)
