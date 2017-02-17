function sumArray(array){
  if ((array === null)        ||
      (array === "" )         ||
      (array.length === 0)    ||
      (array.length === 1)){
    return 0
  } else {
	var sorted = array.sort(function(a, b){
	   return a-b
	})
    sorted.pop()
	  sorted.shift()
    console.log(sorted)
    if(sorted <= 0){
      return 0
    }else {
	var sum = sorted.reduce(function(acc, val) {
  return acc + val;
	})
  return sum
  // } else {
  // return 0
  }
  }
}
console.log(sumArray([10,9 -9,-10]));

//
//
// function test(val){
//   console.log(val)
//   if(val.length === 0){
//     return 0
//   } else {
//     return false
//   }
// }
// console.log(test([]))
