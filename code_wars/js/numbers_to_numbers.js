// function toNumberArray(stringarray){
//   for (var i = 0; i < stringarray.length; i++) {
//     console.log(stringarray[i])
//     if (typeof(stringarray[i]) == Number){
//       console.log(true)
//     } else {
//       console.log(typeof(stringarray[i]))
//     }
//   }
// }

function toNumberArray(stringarray){
  var arr = []
for (var i = 0; i < stringarray.length; i++) {
  var current_val = stringarray[i]
    console.log(typeof(current_val))
     if (!isNaN(current_val)){
      console.log(current_val);
      var parsed = parseInt(current_val);
      console.log(parsed);
      arr.push(current_val)
    } else {
      arr.push(current_val)
      console.log("already a number")
    }
  }
  return arr
}
  // console.log(arr)

// var array = [10, 11, 12]
// var array = ["10","11","12"];
//   for (var i = 0; i < array.length; i++) {
//     var current_val = array[i]
//     console.log(typeof(current_val))
//
//   }
  // if (isNaN(current_val)){
  //   parseInt(current_val)
  // }




//
toNumberArray(["10","11","12"])
