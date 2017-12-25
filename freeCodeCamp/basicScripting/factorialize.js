
// ATTEMPT 1 iteration---doesn't handle negatives
// function factorialize(num) {
//   if (num === 0){
//     return 1
//   } else {
//     var product = num;
//     for (var i = num -1 ; i > 0; i--) {
//       product *= i
//     }
//   }
//   return product
// }
// console.log(factorialize(-5));

// console.log(product)

function factorialize(num){
    if (num === 1){
        return 1
    }
    return num * factorialize(num - 1)
}
factorialize(5)
