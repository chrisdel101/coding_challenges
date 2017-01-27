
//
// var array = [1,2,3,4,5]
// for(var i =1;i <= array.length;i++){
//     if ((i % 3 === 0) && (i % 5 === 0)){
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0){
//         console.log("Fizz");
//     } else if (i % 5 === 0){
//         console.log("Buzz");
//     } else {
//       console.log(i);
//     }
// }


var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for(var i =0;i < array.length;i++){
// this code makes the number in the array the same as the index, so there are no indexing errors
    var number = array[i];
    if (number % 3 === 0 && number % 5 === 0){
        console.log("FizzBuzz");

    } else if (number % 3 === 0){
        console.log("Fizz");

    } else if (number % 5 === 0){
        console.log("Buzz");

    } else {
      console.log(number);
    }
}
