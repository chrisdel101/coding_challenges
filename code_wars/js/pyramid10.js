function pyramid(pyramid) {
  const pCopy = [...pyramid];
  let totals = [];
  let totalStrs = [];
  let numTotals = {}
  for (const [j, arr] of pyramid.entries()) {
    // first row
    if (j === 0) {
      totals.push(arr);
      totalStrs.push([`${arr[0]}`]);
    } else if (j === 1) {
      let t1 = arr[0] + totals[0][0];
      let t2 = arr[1] + totals[0][0];
      let t1Str = `${totals[0][0]}+${arr[0]}`;
      let t2Str = `${totals[0][0]}+${arr[1]}`;
      totals.push([t1, t2]);

      totalStrs.push([t1Str, t2Str]);
    } else if (j === 2) {
      let t1 = arr[0] + totals[1][0];
      let t2 = arr[1] + totals[1][0];
      let t3 = arr[1] + totals[1][1];
      let t4 = arr[2] + totals[1][1];
      let t1Str = `${totalStrs[1][0]}+${arr[0]}`;
      let t2Str = `${totalStrs[1][0]}+${arr[1]}`;
      let t3Str = `${totalStrs[1][1]}+${arr[1]}`;
      let t4Str = `${totalStrs[1][1]}+${arr[2]}`;
      totals.push([t1, t2, t3, t4]);
      totalStrs.push([t1Str, t2Str, t3Str, t4Str]);
      numTotals[j] = [1,2,1]
    } else {
      let tempTotals = []
      let tempStrTotals = []
      let tempNumTotals = []
      for (const [i, item] of arr.entries()) {
        if(i === 0){
          let total = totals[j-1][0] + item
          let totalStr = `${totalStrs[j-1][0]}+${item}`
          tempTotals.push(total)
          tempStrTotals.push(totalStr)
          tempNumTotals.push(1)
        } else if(i === arr.length-1){
          let total = totals[j-1].slice(-1)[0] + item
          let totalStr = `${totalStrs[j-1].slice(-1)[0]}+${item}`
          tempTotals.push(total)
          tempStrTotals.push(totalStr)
          tempNumTotals.push(1)
        } else {
          let leftTotalNum = numTotals[j-1][i-1]
          let rightTotalNum = numTotals[j-1][i]
          tempNumTotals.push(leftTotalNum+rightTotalNum)
          for (let k = i-1; k < (i-1 + leftTotalNum); k++) {
            let total = totals[j-1][k] + item
            let totalStr = `${totalStrs[j-1][k]}+${item}`
            tempTotals.push(total)
            tempStrTotals.push(totalStr)
          }
          for (let k = (i-1 + leftTotalNum); k < (i-1 + leftTotalNum + rightTotalNum); k++) {
            let total = totals[j-1][k] + item
            let totalStr = `${totalStrs[j-1][k]}+${item}`
            tempTotals.push(total)
            tempStrTotals.push(totalStr)
          }
        }
      }
      totals.push(tempTotals)
      totalStrs.push(tempStrTotals)
      numTotals[j] = tempNumTotals
  }
  console.log(totalStrs)
  console.log(totals)
}
}
// console.log(
//   pyramid([
//     [75], //0
//     [95, 64], //0
//     [17, 47, 82], //1
//     [18, 35, 87, 10], //2
//     [20,  4, 82, 47, 65],//2
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
//   ])
// );
[
  [3], 
  [3+7, 3+5], 
  [3+7+2, 3+7+4, 3+5+4, 3+5+6]
  [3+7+2+8, 3+7+2+5, 3+7+4+5, 3+7+4+5, 
   3+7+4+9, 3+5+4+9, 3+5+6+9, 3+5+6+3]
]
8 - 1(0): 3+7+2
5 - 1(0): 3+7+2
  - 2(1): 3+7+4, 3+5+4
9 - 2(1): 3+7+4, 3+5+4 // starts on the same one as previous ends
  - 1(2): 3+5+6
3 - 1(2): 3+5+6

1 - 1(0): 3+7+2+8
2 - 1(0): 3+7+2+8
  - 3(1): 3+7+2+5, 3+7+4+5, 3+5+4+9
3:- 3(1): 3+7+2+5, 3+7+4+5, 3+7+4+9
  - 3(2): 3+5+4+9, 3+5+6+9, 3+5+6+3
4:- 3(2): 
console.log(pyramid([
  [3],
[7, 5],
[2, 4, 6],
[8, 5, 9, 3],
[1, 2, 3, 4, 5]
]))
