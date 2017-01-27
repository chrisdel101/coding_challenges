

  // SCRATCH
//
// function Fruit(theColor, theSweetness, theName, theNativeLand){
//   this.color = theColor;
//   this.sweetness = theSweetness;
//   this.name = theName;
//   this.nativeToLand = theNativeLand;
//
//
//   this.showName = function(){
//     console.log("This is a " + this.name)
//   }
//
//   this.nativeTo = function(){
//     this.nativeToLand.forEach(function(eachCountry){
//       console.log("Grown in: " + eachCountry)
//     });
//   }
// }
//
// var cherry = new Fruit("red", "very","cherry","Canada");
//
// cherry.showName();

//
// function convertToF(celsius) {
//   var fahrenheit;
//   // Only change code below this line
//   farenheit = ((celsius * 9/5) + 32);
//
//   // Only change code above this line
//   return fahrenheit;
// }
//
// // Change the inputs below to test your code
// console.log(convertToF(30));
//
// MINE
// var numSheep = 4;
// var monthsToPrint = 12;
//
// for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
//   if (monthNumber % 4 === 0){
//     var roughSheep75 = numSheep * 0.75;
//     //var roundSheep75 = Math.floor(roughSheep75);
//     console.log("Removing " + roughSheep75 + " sheep from the population");
//     numSheep = numSheep - roughSheep75;
//   } else if (numSheep > 10000){
//     var halfPopSheep = numSheep/2;
//     console.log("Removing " + halfPopSheep + " sheep from the population.");
//     numSheep = numSheep - halfPopSheep;
//   }
//
//
//   numSheep *= 4;
//   console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
// }
// //
// var numSheep = 4;
// var monthsToPrint = 12;
//
// for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
//
//   if (monthNumber % 4 == 0) {
//     var reduction = numSheep * .75;
//     console.log("Removing " + reduction + " sheep from the population.");
//     numSheep -= reduction;
//   }
//
//   else if (numSheep > 10000) {
//     var reduction = numSheep * .5;
//     console.log("Removing " + reduction + " sheep from the population.");
//     numSheep -= reduction;
//   }
//
//   numSheep *= 4;
//   console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
// }


// DRAFT
// var passengers = [ ["Thomas", "Meeks"],
//                    ["Gregg", "Pollack"],
//                    ["Christine", "Wong"],
//                    ["Dan", "McGaw"] ];
// var modifiedNames = passengers.map(function(arrayCell){ return arrayCell });
// //
// console.log(modifiedNames);

// CORRECT
// var passengers = [ ["Thomas", "Meeks"],
//                    ["Gregg", "Pollack"],
//                    ["Christine", "Wong"],
//                    ["Dan", "McGaw"] ];
//
// var modifiedNames = passengers.map(function(arrayCell) {
//   return arrayCell[0] + " " + arrayCell[1];
// });
// console.log(modifiedNames);
// //
// function changePowerTotal(totalPowerGen,genId,genStatus,mwPerGen){
//
//  if (genStatus === "on"){
//    	totalPowerGen += mwPerGen;
//     alert("Generator #" + genId + " is now " + genStatus +", adding " + mwPerGen +
// " MW, for a total of "+ totalPowerGen + " MW!");
//   return totalPowerGen;
//   } else if (genStatus === "off") {
//   	totalPowerGen -= mwPerGen;
//     alert("Generator #" + genId + " is now " + genStatus +", adding " + mwPerGen +
// " MW, for a total of "+ totalPowerGen + " MW!");
//   return totalPowerGen;
//   }
// }

// // CORRECT - WITH HELP
// var puzzlers = [
//   function(a) { return 8 * a - 10; },
//   function(a) { return (a - 3) * (a - 3) * (a - 3); },
//   function(a) { return a * a + 4; },
//   function(a) { return a % 5; }
// ];
// var start = 2;
//
// // build applyAndEmpty function expression here
// var applyAndEmpty = function(input, array){
//   var length = array.length;
//   for (var i = 0;i < length;i++){
//   	input = array.shift()(input);
//
//   }
//   return (input);
// };
// alert(applyAndEmpty(start, puzzlers));
//

// WORD PUZZLE ON PUZZLERS ARRAY
//   “What is obtained when the result of passing 9 into the fourth function of the puzzlers array is then passed into the function whose array index matches the result of passing 3 into the second function of the puzzlers array?”
// alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));;


// function binaryToNumber(arr){
//   return arr.toString
// }
// console.log(binaryToNumber(["Banana", "Orange", "Apple", "Mango"]));

// var x = ["Banana", "Orange", "Apple", "Mango"];
// console.log(x.toString());
//
//
// reverse "At the current time"

var testStr = "At the current time";
function strReverse(str){
  for (var i =0;i < str.length;i++){
  var strSplit = str[i].split(' ')
  console.log(strSplit.reverse())
  }
}
strReverse(testStr);

[aeiou]
