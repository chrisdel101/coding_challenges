// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,11,3  --> 5 (1 + 4 + 7 + 10 + 13 + 16 + 19)
// 1,5,3  --> 5 (1 + 4)
// 16 is multiple of 4
// Worse way
// - run the sequence and check if end is a multiple
// - if sum is GT end we know it is not in the sequence
const sequenceSum = (begin, end, step) => {
  let topStep = 0
  let i = 1
  let steps = []
  while (topStep < end) {
    topStep = topStep + step
    steps.push(topStep)
    // sum += (innerStep + (step * i))
    if(topStep > end) return nd
    i++

  } 
  return steps.reduce((cur,acc) => cur + acc)
}
// console.log(sequenceSum(2,2,2))
// console.log(sequenceSum(2,6,2))
// console.log(sequenceSum(1,5,1))
console.log(sequenceSum(764, 989, 3))
// console.log(sequenceSum(1,5,3))
