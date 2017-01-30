function countPositivesSumNegatives(input) {
  if (input == null){
    return []
  } else if (input == []){
    return Array.lenght === 0
  }  else {
    var blankArray = [];
    var posCount = 0;
    var negSum = 0;
    for (var i = 0;i < input.length;i++){
      if (input[i] > 0){
        // console.log([i])
        posCount += 1;
        // console.log(posCount)
      } else {
        negSum += input[i];
      }
    }
    blankArray.push(posCount, negSum)
     return(blankArray);
  }
}
console.log(countPositivesSumNegatives([]))

//
// Off by one in the loop for some reasonable
// Pseudocode
// - make blank array
// - make positve and negative sum vars, set to 0
// - looop through and check, if positive add the index to posSUm if negative add the number.
// - put the two into the blank array
