
////////////FIRST WORKKING ANSWER\////////////////////
// function invert(array){
//   var new_arr = []
//   for(var i = 0;i < array.length;i++){
//     // console.log(array[i])
//     if (array[i] > 0){
//       new_arr.push(-Math.abs(array[i]))
//     } else  if (array[i] < 0) {
//       new_arr.push(Math.abs(array[i]))
//     } else if (array[i] == 0){
//       new_arr.push(array[i])
//     }
//   }
//   return new_arr
// }
// console.log(invert([0]))



// USING MAP DOESN'T WORK IN funtion
var arr = [5,2,-3,-1,5,6,1,2,3]

var invert = arr.map(function(i){
  if (i > 0){
  return -Math.abs(i)
  } else {
  return  Math.abs(i)
  }
});

console.log(invert)

function invert(array){

}

// WORKING MAP VERSIONS
// function invert(array) {
//    return array.map( x => x === 0 ? x : -x);
// }
//
// function invert(array) {
//    return array.map(i => i==0 ? 0 : -i);
// }
