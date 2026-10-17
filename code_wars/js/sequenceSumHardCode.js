const sequenceSum = (b, e, s) => {
  let sum = 0
  while (s >= 0 ? b <= e : b >= e){
    // add prev sum to sequenceVal
    sum += b
    // get next value in sequence
    b += s
  } 
  return sum
}
// console.log(sequenceSum(2,2,2))
// console.log(sequenceSum(2,6,2))
// console.log(sequenceSum(1,5,1))
// console.log(sequenceSum(764, 989, 3))
// console.log(sequenceSum(743, 141, 60))
// console.log(sequenceSum(163, 189, 99))
// console.log(sequenceSum(1,5,3))
// console.log(sequenceSum(-1, -5, 3))
// console.log(sequenceSum(1, 5, -3))
// console.log(sequenceSum(-1, -5, 3))
// console.log(sequenceSum(2, 2, -9))
// console.log(sequenceSum(-2, 4, 658))
console.log(sequenceSum(-24, -2, 22))
