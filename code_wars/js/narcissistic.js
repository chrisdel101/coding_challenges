// function isNarcissistic(n){
//   original_n = n;
//   // set to string
//   n = n.toString().split('')
//
// // cube numbers + sum the cubes
//   var cube = n.map((i) => {
//     return i * i * i
//   })
//   console.log(cube)
//   var red = cube.reduce((acc, val) => {
//    return acc + val
//  })
//   console.log(red)
//   console.log(original_n)
//
// // check if total is equal to original num
//   if(cube === original_n){
//     return true
//   } else {
//     return false
//   }
//
//   function adder(n){
//     total += n
//     return total
//   }
// }

// ---------------TAKE 2------------
function isNarcissistic(n){
  let original_n = n;
  let total = 0;
  n = n.toString().split('')
  let l = n.length

  var cube = n.map((i) => {
    return Math.pow(i,l)
  }).map(adder)

  if(total === original_n){
    return true
  } else {
    return false
  }

  function adder(n){
    total += n
    return total
  }

}

console.log(isNarcissistic(1741725))
