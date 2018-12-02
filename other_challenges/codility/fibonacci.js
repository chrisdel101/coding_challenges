//
//
//   var a = 0;
//   var b = 1
//   var c;
// function fib(maxNum){
//   while (a <= maxNum){
//   console.log(a);
//   c = a + b;
//   a = b;
//   b = c;
//   }
// };
// fib(100);
// //
//


// This returns 1 for looping(0), which is incorrect!!

//find the actual fib sequence number located at digit 100
// function looping(n) {
//     var a = 0, b = 1, f = 1;
//     for(var i = 2; i <= n; i++) {
//         f = a + b;
//         a = b;
//         b = f;
//     }
//     console.log(f);
// };
//
// looping(100);

// function looping2 (numOfDigits){
//   var x = 0;
//   var y = 1;
//   var array = [];
//   for(var i = 2;i < numOfDigits;i++){
//     array[i] = array[i - 1] + array[i - 2];
//   }
// }
// console.log(looping2(100));

//
// n is nth number
// function recursive(n) {
//     if(n <= 2) {
//         return 1;
//     } else {
//         return recursive(n - 1) + recursive(n - 2);
//     }
// };
// console.log(recursive(10));


/////////First Real Attempt - No recursion//////////
//


// Set up three varaiables
// - a, b, f(fibonacci)
// - start on index 2
// - set a = 0,
// - set b = 1,
// - set f = 1,
// - add a + b for each step => f eachs sum of a + b
// - a is reassigned to b to move it forward
// - b is reassingd to f , the sum

  // function fib(steps){
  //   var a = 0;
  //   var b = 1;
  //   var f = 1;
  //   if (steps === 0){
  //     return 0
  //    } else {
  //   for (var i = 0;i < steps;i++){
  //     f = a + b;
  //     a = b;
  //     b = f;
  //   }
  //   return(f);
  //   }
  // }
  // fib(0);

  /////////Second Real Attempt - No recursion//////////
  //

  function fib(steps){
    var a = 0;
    var b = 1;
    var f = 1;
    for (var i = 2;i < steps;i++){
      f = a + b;
      a = b;
      b = f;
    }
    console.log(f);
  }
  fib(0)
