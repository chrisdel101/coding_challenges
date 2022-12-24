function pyramid(pyramid) {
  let totals = [];
  let totalStrs = []
  for (const [rowIndex, arr] of pyramid.entries()) {
    // first row
    if (rowIndex === 0) {
      totals.push(arr);
      totalStrs.push([`${arr[0]}`])
    } else {
      let tempTotals = [];
      let tempStrs = []
      for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1]) {
          var t1x = arr[i]
          // console.log('t1x', t1x)
          var t1y = totals[rowIndex-1][i]
          // console.log('t1y', t1y)
          let temp1 = arr[i] + totals[rowIndex-1][i];
          let tempStr1 = `${totalStrs[rowIndex-1][i]}+${arr[i]}`
          // let tempStr1 = `${t1x}+${t1y}`
          console.log('T1', tempStr1)
          tempStrs.push(tempStr1);
          tempTotals.push(temp1);

          var t2x = arr[i+1]
          // console.log('t2x', t2x)
          var t2y = totals[rowIndex-1][i]
          // console.log('t2y', t2y)
          let temp2 = arr[i + 1] + totals[rowIndex-1][i];
          let tempStr2 = `${totalStrs[rowIndex-1][i]}+${arr[i + 1]}`;
          // let tempStr2 = `${t2x}+${t2y}`
          console.log('T2', tempStr2)
          tempStrs.push(tempStr2);

          tempTotals.push(temp2);


          console.log('\n')
        } else {
          totals.push(tempTotals);
          totalStrs.push(tempStrs);
          console.log('\n')
        }
        // console.log(totals)
      }
    }
  }
  // console.log(totals)
  console.log(totalStrs)
}

console.log(
  pyramid([
    [75], //0
    [95, 64], //0
    [17, 47, 82], //1
    [18, 35, 87, 10], //2
    [20,  4, 82, 47, 65],//2
    // [19,  1, 23, 75,  3, 34],//3
    // [88,  2, 77, 73,  7, 63, 767],//3
    // [99, 65,  4, 28,  6, 16, 70, 92],//3
    // [41, 41, 26, 56, 83, 40, 80, 70, 33],//4
    // [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],//4
    // [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],//5
    // [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],//5
    // [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],//6
    // [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],//7
    // [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]//7
  ])
);

// console.log(pyramid([
//     [3],
//   [7, 4],
//   [2, 4, 6],
//   [8, 5, 9, 3]
// ]))

  totals = ['75+95+17',
    '75+95+47',
    '75+64+47',
    '75+64+47']
// First group
j = 3 
i = 0
// 18 + [75+95+17
arr[i] + total[j-1][i]
// 35 + [75+95+17]
arr[i+1] + total[j-1][i]

// Second group
// run #1
j = 3 
i = 1

// 35 + [75+95+47]
arr[i] + total[j-1][i]
// 87 + [75+95+47]
arr[i+1] + total[j-1][i]
// run #2
// 35 + [75+64+47]
arr[i] + total[j-1][i+1]
// 87 + [75+64+47]
arr[i+1] + total[j-1][i+1]

// third group
j = 3 
i = 2

run #1
// 87 + [75+95+47]
arr[i] + total[j-1][i]
// 87 + [75+95+47]
arr[i+1] + total[j-1][i]
 + total[j-1][i+1]