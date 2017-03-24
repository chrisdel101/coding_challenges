// reverse a string but not reverse letters, so just reverses the order of the words
//
// For one word it does nothing
// function reverseString(str) {
//  var arr = str.split(" ").reverse().join(" ")
// 	return arr
// }
// reverseString("daffy klown")
//

// reverse so letters are reversed
function reverseString(str) {
 var arr = str.split("").reverse().join("")
	return arr
}
console.log(reverseString("hello"))
