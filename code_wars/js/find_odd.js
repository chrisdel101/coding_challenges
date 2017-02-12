// // - sort array
// // - check value against current item, counting each item
// // - when value changes, start a new counting
// // -move through all values this way until end
//
function findOdd(A) {
  var A = [5,2,3,1,5,6,1,2,3]
  var sorted = A.sort()
  var num = new Array()

  for(var i = 0;i < sorted.length;i++){
    var current_val = sorted[i];
  // var 1 = all number 1s
  //   when value changes var changes
  // var 2 = all number 2s
    num[i] = (current_val.valueOf())
    console.log(num[i])
    if (current_val !== num[i]){








      // var histo = {},
      // for (var i=0; i < arr.length; ++i) {
      //     var current val = arr[i];
      //     if (histo[val]) {
      //        console.log(++histo[val]);
      //     } else {
      //        console.log(histo[val] = 1);
      //     }






  //
  //   }
  //   // else if (current_val !== sorted[i]){
  //   // //   num[i + 1] === sorted[i]
  //   //   console.log(num[i +1])
  //   }

//
// }
//


 // var A = [5,2,3,1,5,6].sort()
 // console.log(A)

var arr = [5,2,3,1,5,6,1,2,3]

 // }


 var x = arr;
 for (var i=0;i<x.length;i++)
 {
   var theName = x[i].name;
   theStatus[theName] = 'normal';
 }
