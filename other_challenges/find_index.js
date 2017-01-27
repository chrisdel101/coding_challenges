// Write a function that takes an argument of the index in an array that you want to find.
var array = [1,2,3,4,5,6];
function findIndex(index){
  for (var i = 0;i < array.length;i++){
    if (array[i] === index);{
      return i
    }
  }
}
console.log(findIndex(2));
