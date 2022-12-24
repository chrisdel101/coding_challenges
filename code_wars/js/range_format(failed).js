const assert = require('assert');
// - inRange
//  - store prev
//  - get current
//  - if current is (prev + 1)
//     // for firse one in range
//     - if inRange = false
//         - set inRange true
//         - push current to str

//     // for following in range
//     - if inRange = true
//         - do nothing

//  - if next is not (current + 1)
//     // for first one after range
//     - if inRange = true
//         // add prev to end range
//         -  add `$-{prev}` to str
//         - set isRange = false
//     - add current to str

//   - set current = prev
function solutions(list) {
let arr = []
  let str = '';
  let rangeLength = 0
  let inRange = false;
  let prev;
  let current;
  for (let i = 0; i < list.length;i++) {
    current = list[i]
// console.log('C', current)
    // skip first round
    if (current === prev + 1) {
      // for first one in range
      if (inRange === false) {
        inRange = true;
        // remove last added to arr
        // arr.pop()
        // start range
        str += prev
        rangeLength++
      }
      // for following in range
      else if (inRange === true) {
        // if last item in list, end range
        if(list[i+1] == undefined){
            console.log('XX', !list[i+1])
            console.log('str', str, current)
            str += `${-current}`;
            arr.push(str)
            str = ""
            isRange = false;
        }
        console.log('True, do nothing');
      }
    }
    else if (current !== prev + 1) {
      // first one after range ends
        if (inRange === true) {
          // check length of stored range
          if(rangeLength < 2){
            // push range as is
            arr.push(str)
            // don't attach last to range
            arr.push(prev) 
          } else {
            // add prev to end range
            str += `-${prev}`;
            arr.push(str)
            rangeLength++
          }
          rangeLength = 0
          str = ""
          inRange = false;
        } else {

          if(prev) arr.push(prev);
        }
      }
    
    // else {
    //     // not in range 
    //      str += current;
    // }
    prev = current;
  }
  console.log('str', arr.join(','))
  return arr.join(',')
}
  solutions([-6, -3, -2, 1//3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20
])