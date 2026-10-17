// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,11,3  --> 5 (1 + 4 + 7 + 10 + 13 + 16 + 19)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
   // return 0 when begin more than end
  let sum = 0
  let sequenceVal = begin
  // if sequence goes past end return sum 
  // compare abs of seq - negative step could seq to diverge inf negative
  while (Math.abs(sequenceVal) <= end ){
    // add prev sum to sequenceVal
    sum += sequenceVal
    // get next value in sequence
    sequenceVal += step
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
// console.log(sequenceSum(-1, -5, -3))
// console.log(sequenceSum(2, 2, -9))
