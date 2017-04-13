//
// Conver to binray
// Make number a string
// slice the string


function binaryGap(N){

//convert to binary
  // function binary(number){
  //   var bin = (number).toString(2)
  //   return +bin
  // }
  N = N.toString(2).split('')
  console.log(N)
  var zeroCount   = 0;
  var isZero      = false;
  var isMiddle    = false;
  var zeroCount   = 0;
  var current_gap = 0;
  var max_gap     = 0;

  // var set = {}

  // (function zero_counter(N){
  for (var i = 1; i < N.length; i++) {
      // console.log(N[i])
  //this is first zero- before it was a one
      if ((N[i] === "0") && (isZero === false)){
        ++zeroCount;
        current_gap += 1
        isZero = true
        // console.log('test')
  //this is second zero, so add 2, one for first and second
      } else if ((N[i] === "0") && (isZero === true) && (isMiddle === false)){
        ++zeroCount
        isZero = true; //set to true
        isMiddle = true; //set to true - next cond will use this
        current_gap += 1
        // console.log(isZero, isMiddle)
  // this is third and up zero, adds gap for previous
      } else if ((N[i] === "0") && (isZero === true) && (isMiddle === true)){
        zeroCount++
        isZero = true;
        isMiddle = true;
        current_gap++
      } else {
      isZero = false;
      isMiddle = false;
        if(current_gap > max_gap){
          max_gap = current_gap
          current_gap = 0;
        } else if (current_gap < max_gap){
          current_gap = 0
        }
      }
    }
  return max_gap
  }

binaryGap(9)

// 10100
// 01010
// 11010
// 11011
