// function GetSum( a,b ){
//
//   if (a > b) {
//     var total = b
//     console.log(total)
//     while (b <= a){
//       total = total - b
//       console.log(total)
//       b++
//       console.log(b)
//       }
//     } else if (b > a){
//       var total = a
//       while (a <= b){
//         total = total + a
//         a++
//         }
//       }
//       return total
//  }

// Need to do the inverse for negatives

// function GetSum( a,b ){
//       if (a > b){
//       var sum = b;
//       console.log(sum)
//     for (var i = a; i <= a; i++) {
//       console.log(sum)
//       sum = sum + i
//       console.log(i)
//     }
//   } else if (a < b){
//       var sum = a;
//       // console.log(sum)
//       for (var i = b; i <= b; i++) {
//         console.log(sum)
//         sum = sum + i
//         console.log(i)
//         // console.log(sum)
//       }
//     }
//     return sum
//   }
//
// //
// console.log(GetSum(-1,2))

  // sum = 1
  // i = 1, b < 2, i++
  // sum = b(1) + 2
  // 3




// var a = 100
// var b = -2
//
// console.log(running_total)
// //
// Determine which is less, start loop from bottom
// loop through unitl top number is hit, adding each along that way
// if both are same return either one (random somehow?)

// var a = 100
// var b = -2

// 0 = 0 + -2    - -2
// -2 = -2 + -1  - -3
// -3 = -3 + 1   - -2



// -2
// -2 = -2 + 1 => -1
// -1 = -1 + 1 => 0
// 0 = 0 + 1 => 1

 //
 //    sum = -1;
 // for (i = 0; i <= 0; i++) {
 //    sum = sum + i
 //    console.log(i)
 // }
 // console.log(sum)



 // funtion getSumOneWay(va1, val2){
 //   sum is automatically equal to starting value
 //   var sum = val 1
 //   start on lowest value and increment by reassinged sum
 //   for(var i = val1;i <val2;i++){
 //
 //   }
 // }






//  if (val2 > val1){
//  for(var i = val2; i <= val1; i++){
//    console.log(i)
//     sum = sum + i
//     // -1 = -1 + 0
//     // console.log(sum)
//   }
// }
// console.log(sum)

//
// 1=> 10 = 10 + 1 == 21
// 2=> 21 = 11 + 2 = 33
// 3=> 33 =


 /////////////A < B && both are positive////
        // if b is greater and a
// function GetSum(val1, val2){
//     if ((val1 < val2) && (val1 >= 0) && (val2 >=0)){
//      var sum = val1;
//      for(var i = val2; i <= val2; i++){
//        sum = sum + i
//      }
//      return `val2 is greater, both above zero with sum of ${sum}`
//   //   if a is greater and b
// } else if ((val1 > val2) && (val1 >=0) && (val2 >= 0 )){
//        var sum = val2;
//        for(var i = val1; i <= val1; i++){
//        sum = sum + i;
//       // if a is greater than b, and a negtive invloved
//         }
//       return `val1 is greater, above zero with sum of ${sum}`
//     } else if ((val1 > val2) && ((val1 || val2) < 0)){
//         var sum = val2
//         for (var i = val2 +1;i <= val1;i++){
//         sum = sum + i
//   // if b is greater than b, and a negtive invloved
//       }
//       return `val1 is greater, below zero with sum of ${sum}`
//     } else if ((val1 < val2) && ((val1 || val2) < 0)){
//         var sum = val1
//         for (var i = val1 +1;i <= val2;i++){
//           sum = sum + i
//         }
//         return `val2 is greater, below zero with sum of ${sum}`
//       } else {
//         return val1
//       }
//   }


/////////////////////////////////////////////////////
function GetSum(a, b){
    if ((a < b) && (a >= 0) && (b >=0)){
     var sum = a;
     for(var i = b; i <= b; i++){
       sum = sum + i
     }
     return sum
  //   if a is greater and b
} else if ((a > b) && (a >=0) && (b >= 0 )){
       var sum = b;
       for(var i = a; i <= a; i++){
       sum = sum + i;
      // if a is greater than b, and a negtive invloved
        }
      return sum
    } else if ((a > b) && ((a || b) < 0)){
        var sum = b
        for (var i = b +1;i <= a;i++){
        sum = sum + i
  // if b is greater than b, and a negtive invloved
      }
      return sum
    } else if ((a < b) && ((a || b) < 0)){
        var sum = a
        for (var i = a +1;i <= b;i++){
          sum = sum + i
        }
        return sum
      } else {
        return a
      }
  }
console.log(GetSum(1,0))
