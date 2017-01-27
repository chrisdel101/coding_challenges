// take array an split it into 2 sides
// var numbers= [1,2,3,4,5,6,7,8,9,10],
//     leftEnd= Math.ceil(numbers.length/2),
//     result= {
//         left: numbers.slice(0,leftEnd),
//         right: numbers.slice(leftEnd)
//     };

var splitArray = function(array){

  for(var leftEnd = 0;leftEnd < array.length;leftEnd++){

  // up to and not including left
      var left = array.slice(0,leftEnd);
      console.log(left);
  // starts at leftEnd and goes until the end
      var right =  array.slice(leftEnd + 1);
      console.log(right);
      // put all the left side/ get the sum of the left side
      // get the sum of each side;
      var leftSum = 0;
      for (var i = 0;i < left.length;i++){
        leftSum += left[i];
      }
      console.log(leftSum + " is the left sum");
  // put all the right side in a variable/get the sum
      var rightSum = 0;
      for (var i = 0;i < right.length;i++){
        rightSum += right[i];
      }
      console.log(rightSum + " is the right sum");
      if (leftSum === rightSum){
        console.log(leftEnd + " is the index.")
        return leftEnd
      }
  }

}
splitArray([-7,1,5,2,-4,3,0]);
// splitArray([1,2,3,4,5,6,7,8,9,10,11]);


// shift the mid point over
// for(var i = O; i < text.array; i++) {
// 	if (leftSum !=== rightSum) {
// 		// If we find it, add characters up to
// 		// the length of my name to the array
// 		for(var j = i; j < (myName.length + i); j++) {
// 			hits.push(text[j]);
// 		}
// 	}
// }



// removing a value from one side and adding to the other, and vice versa
// once the values on both side are equal thats the answer






// count the total number of values in the array.
// array.length
//
//
// <!-- To find sum of array -->
// var result = 0;
// var array = [1,2,3,4,5];
// for (var i = 0;i  < array.length;i++){
//   result += array[i];
// }
// console.log(result);





//
// A[0] = -1
// A[1] =  3
// A[2] = -4
// A[3] =  5
// A[4] =  1
// A[5] = -6
// A[6] =  2
// A[7] =  1
