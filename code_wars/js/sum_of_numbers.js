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




 var val1 =1
 var val2 =2


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
 if ((val2 > val1) && (val1 && val2 >= 0 )){
     var sum = val1;
     for(var i = val2; i <= val2; i++){
      //  console.log(i)
       sum = sum + i
     }
        // if a is greater and b
   } else if ((val1 > val2) && (val1 && val2 >= 0 )){
       var sum = val2;
     for(var i = val1; i <= val1; i++){
       sum = sum + i;
     }
   }
console.log(sum)
