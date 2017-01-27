var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// var target= 31;
function linearSearch(array,target){
  var i = 0;
    while(i < array.length){

      if (array[i] === target){
        console.log(array[i] + " is the target")
        return i
      } else {
        console.log(array[i] + " is not the target")
      }

      i++

    }

    console.log("the function ended")

}
linearSearch(primes,40);
