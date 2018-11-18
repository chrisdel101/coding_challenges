/////////////LOGIC////////////////
// var str = "Open Sesame"
//
// var num1 = str.length
//
// var target = "same"
//
// var num2 = target.length
//
// console.log(str.substr(num1 - num2));

// beginning at the character at the specified position, and returns the specified number of characters.

// console.log(str.substring(3,0));
// characters from a string, between two specified indices, and returns the new sub string.
//If "start" is greater than "end", this method will swap the two arguments


// function confirmEnding(str, target){
//   str.substring
// }
//
//
// console.log(confirmEnding("Bastian", "n"))

/////////FINAL ANSWER//////////////
function confirmEnding(str, target){
//find length of string
  var num1 = str.length,
//find length of ending
  num2 = target.length;
//make a substring where the ending is subracted from the whole. - leaving just the ending
  var result = str.substr(num1 - num2)
  console.log(result)
//the the substr is eqaul to the ending, it's T
  return result === target ? true : false
}
//
console.log(confirmEnding("Open sesame", "pen"))

// NEWER ANS
function confirmEnding(str, target){
// 	make num negative for slice
	let sliceAmount = -Math.abs(target.length)
    // slice this much of end
	let last = str.slice(sliceAmount)

	return (last === target ? true : false)

}
