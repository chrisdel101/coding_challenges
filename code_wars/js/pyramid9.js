function pyramid(pyramid) {
  const pCopy = [...pyramid];
  let totals = [];
  let totalStrs = [];
  for (const [j, arr] of pyramid.entries()) {
    // first row
    if (j === 0) {
      totals.push(arr);
      totalStrs.push([`${arr[0]}`]);
    } else {
      // console.log('totals', totals)
      let tempTotals = [];
      let tempStrs = [];
      for (const [k, item] of arr.entries()) {
        console.log('Arr', arr);
        // console.log('k:', k, 'item:', item)
        // console.log('j: row', j)
        // if first item in row
        if (k === 0) {
          let total = item;
          let buildTempStr = '';
          for (let i = j - 1; i >= 0; i--) {
            // console.log('i', i)
            // console.log('pyramid[i][k]', pyramid[i][k])
            total += pyramid[i][0];
            // console.log('total', total)
            buildTempStr += `+${pyramid[i][0]}`;
          }
          let tempStr = `${item}${buildTempStr}`;
          // console.log('tempStr', tempStr)
          // console.log('tempStr', buildTempStr)
          tempTotals.push(total);
          tempStrs.push(tempStr);
          // if last item in row
        } else if (k === arr.length - 1) {
          let total = item;
          let buildTempStr = '';
          //  minus n for each row going down
          for (let i = j - 1, n = k - 1; i >= 0; i--, n--) {
            // console.log('last j', j)
            // console.log('last i', i)
            // console.log('n', n)
            // console.log('pyramid[i][n]', pyramid[i][n], pyramid)
            total += pyramid[i][n];
            // console.log('total', total)
            buildTempStr += `+${pyramid[i][n]}`;
          }
          let tempStr = `${item}${buildTempStr}`;
          // console.log('tempStr last', buildTempStr)
          tempStrs.push(tempStr);
          tempTotals.push(total);
        } else {
          // copy all previous rows
          let copy = pCopy.slice(0, j);
          console.log('item', item);
          console.log('copy', copy);
          while (copy[j-1].length !== pyramid[j-1].length-2) {
            total = item;
            let buildTempStr = '';
            // loop over prev row, going to the right
            for (let i = j - 1; i >= 0; i--) {
              //i is prev row, k is item in row
              // console.log('i', i)
              // go up and right if exist
              if (copy[i][k]) {
                total += copy[i][k];
                // console.log('copy[i][k]', copy[i][k])
                buildTempStr += `+${copy[i][k]}`;
                // console.log('buildTempStr1', buildTempStr)
                // check if the next up and right does not exist - delete current if not
                if (copy[i - 1] && copy[i - 1][k] === undefined) {
                  // console.log('copy1', copy)
                  let innerCopy = [...copy[i]];
                  innerCopy.splice(i, 1);
                  // console.log('copy2', copy)
                  copy[i] = innerCopy;
                  // console.log('PPP', copy)
                  // console.log('PPP', pyramid)
                  console.log('copy[i][k] is popped', copy);
                }
              } else {
                total += (copy[i][k - 1] ;
                // console.log('totalB', copy[i][k - 1])
                buildTempStr += `+${copy[i][k - 1]}`;
                console.log('buildTempStr end', buildTempStr);
                // check next up & right not exist
                if (copy[i - 1] && copy[i - 1][k] === undefined) {
                  // console.log('copy1', copy)
                  // delete current
                  let innerCopy = [...copy  [i]];
                  innerCopy.splice(i, 1);
                  // console.log('copy2', copy)
                  copy[i] = innerCopy;
                  // console.log('PPP', copy)
                  // console.log('PPP', pyramid)
                  console.log('copy[i][k] is popped', copy);
                }
              }
            }
            let tempStr = `${item}${buildTempStr}`;
            console.log('Tempstr', tempStr);
            console.log('total', total);
            tempTotals.push(total);
            tempStrs.push(tempStr);
          }
        }
      }
      totalStrs.push(tempStrs);
      totals.push(tempTotals);
    }
  }
  console.log(totalStrs);
  console.log(totals);
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

console.log(pyramid([
    [3],
  [7, 5],
  [2, 4, 6],
  [8, 5, 9, 3]
]))
