// var breakChocolate = function(n, m) {
//   if  ((m === (null || undefined || 0))||
//       (n === (null || undefined || 0))) {
//     return 0
//   } else {
//     // return false
//      var across = n - 1;
//      console.log(across)
//       var down = (n-1) * m
//      return (across + down)
//  }
// };

// console.log(breakChocolate(7,4 ))

var breakChocolate = function(n, m) {
  if  ((m === (null || undefined || 0))||
      (n === (null || undefined || 0))) {
    return 0
  } else {
    // return false
     var across = n - 1;
     console.log(across)
      var down = (m-1) * n
     return (across + down)
 }
};
console.log(breakChocolate(5,5 ))


/////////////////////BEST////////

var breakChocolate = function(n, m) {
 return (n*m === 0) ? 0 : n * m - 1;
};
