// [-2, 1, 3, -4, 5, 6, 22]
// s = [[-2], [1], [-2, 3], [-2, 4],[1,4]]
function maxSubsetSum(arr) {
  let skip = 0
  let prevSkip = 0
  for (let i = 0; i < arr.length; i++) {
    // current take value
    let currentSum = prevSkip + arr[i]
    // if currentSum GE skip choose it
    if (currentSum > skip) {
      console.log('here', currentSum, skip)
      // store current skip
      prevSkip = skip
      // reassign curentSum to next to accept
      skip = currentSum
    } else {
      // just store the prev skips
      prevSkip = skip
    }
  }
  return Math.max(skip, prevSkip)
  //   console.log('sums', sums)
}

// maxSubsetSum([3, 7, 4, 6, 5]) // 13
maxSubsetSum([-2, 1, 3, -4, 5]) // 13
// For [-2, 1, 3, -4, 5]:

//     Start with skip = 0, take = 0.
//     For -2: Skip it (skip = 0), Take it (take = -2).
//     For 1: Skip it (skip = 0), Take it (take = 1).
//     For 3: Skip it (skip = 1), Take it (take = 3 + 0 = 3).
//     For -4: Skip it (skip = 3), Take it (take = -4 + 1 = -3).
//     For 5: Skip it (skip = 3), Take it (take = 5 + 3 = 8).
