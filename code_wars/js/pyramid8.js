function pyramid(pyramid) {
  let totals = [];
  let totalStrs = []
  for (const [j, pRow] of pyramid.entries()) {
    // first row
    if (j === 0) {
      totals.push(pRow);
      totalStrs.push([`${pRow[0]}`])
    } else {
      console.log('ROW')
      console.log('totals', totals)
      console.log('j', j)
      let tempTotals = [];
      let tempStrs = []
      let currentTotalArr =  totals[j-1]
      console.log('currentTotalArr', currentTotalArr)
      for (const [i, total] of currentTotalArr.entries()) {
        console.log('pRow', pRow)
        console.log('TOTAL', total)
          var t1x = pRow[i]
          // console.log('t1x', t1x)
          var t1y = total
          // console.log('t1y', t1y)
          let temp1 = pRow[i] + total
          let tempStr1 = `${totalStrs[j-1][i]}+${pRow[i]}`
          // let tempStr1 = `${t1x}+${t1y}`
          console.log('T1', tempStr1)
          tempStrs.push(tempStr1);
          tempTotals.push(temp1);

            var t2x = pRow[i]
            // console.log('t1x', t1x)
            var t2y = total
            // console.log('t1y', t1y)
            let temp2 = pRow[i+1] + total
            let tempStr2 = `${totalStrs[j-1][i]}+${pRow[i+1]}`
            // let tempStr1 = `${t1x}+${t1y}`
            console.log('T2', tempStr2)
            tempStrs.push(tempStr2);
            tempTotals.push(temp2);
  
    
          // }


        }
        console.log('\n')
        totalStrs.push(tempStrs);
        totals.push(tempTotals);
        console.log('\n')
        console.log('pushing totals', tempTotals)
        console.log('pushing strs', tempStrs)
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
    // [20,  4, 82, 47, 65],//2
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
