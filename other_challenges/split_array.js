
var splitArray = function(array){
  leftEnd = Math.ceil(array.length/2);

    var left = array.slice(0,leftEnd);
    var right =  array.slice(leftEnd);

  console.log(left);
  console.log(right);
}
splitArray([1,2,3,4,5,6,7,8,9,10,11]);





// > var numbers= [1,2,3,4,5,6,7,8,9,10];
// undefined
// > leftEnd= Math.ceil(numbers.length/2);
// 5
// > result= {
// ...         left: numbers.slice(0,leftEnd),
// ...         right: numbers.slice(leftEnd)
// ...     };
