function countPositivesSumNegatives(input) {
    var blankArray = [];
    var posSum = 0
    var negSum = 0;
    for (var i = 1;i < input.length;i++){
      if (input[i] >= 0){
        console.log([i])
        posSum = i;
        // console.log(posSum)
      } else {
        negSum += input[i];
      }
    }
    console.log(posSum, negSum);
}
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9])


Off by one in the loop for some reasonable
Pseudocode
- make blank array
- make positve and negative sum vars, set to 0
- looop through and check, if positive add the index to posSUm if negative add the number.
- put the two into the blank array
