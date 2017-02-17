// var result = 0;
// function numDig(number){
//   while (number){
//   number = number/10
//   console.log(number);
//     result++
// }
// console.log(result)
// }
// numDig(435);
// ******************Seeing that counter works**************
// var array = [2, 2, 1, 0, 1];
// var counter = array[0];
// for(var i =0;i <= array.length;i++){
//   if(i < 5){
//      counter++
//
//   }
//   console.log(counter);
// }

// var prototypeType = typeof Object.prototype;
// console.log(prototypeType);
//
// // now let's examine it!
// var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
// console.log(hasOwn);

// var goose = 10
// var players = ["gary", "joe", "sam"]
//
// for (var i = 0;i < goose;i++){
//   console.log(players[i])
// }


// function lookUpProfile(firstName, prop){
// // Only change code below this line
//   for(var i = 0;i < contacts.length;i++){
//     if ((contacts[i].hasOwnProperty(firstName) && (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i].firstName && contacts[i].prop
//       } else if (!(contacts[i].hasOwnProperty(firstName)){
//        return "No such contact";
//      } else if (!(contacts[i].hasOwnProperty(prop)){
//        return "No such property"
//      }
//    }
//  }

// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["Javascript", "Gaming", "Foxes"]
//     }
// ];

// (contacts[1].hasOwnProperty(firstName) && contacts[1].hasOwnProperty(prop))

// function lookUpProfile(firstName, prop){
//   for(var i = 0;i< contacts.length;i++){
//     var current_contact = contacts[i]
// if ((contacts[i].hasOwnProperty(firstName) && contacts[i].hasOwnProperty(prop)) {
//         console.log(true)
//      } else {
//        console.log(false)



    //      return (contacts[i].firstName && contacts[i].prop)
    //  } else if  (!(contacts[i].hasOwnProperty(firstName)) {
    //     return "No such contact";
    //  } else if (!(contacts[i].hasOwnProperty(prop)){
    //         return "No such property"
//      }
//    }
// }


// Call & apply////////////////////////////
//
// Takes an object and binds it to a functions this param
// var speak = function(what){
//   console.log(this.better)
// }
//
// var saySomething =  {
//   normal:"not through",
//   better:"through!"
// }
//
// speak.call(saySomething); =>through
// speak.call(saySomething, saySomething.normal); = speak takes in what param => not through
//
//
// speak.apply(saySomething, ['apply takes an arary']) = > ''


// argumements param////////////////////////////

// allows function to take any number of arguments
//
// var plus = function(){
//   var sum = 0;
// // decremental for loop
//   for(var i = arguments.length -1; i >= 0;i--){
//     sum += arguments[i];
//     console.log(arguments[i])
//   }
//   return sum;
// }
//
// console.log(plus(2,2))


//closures////////////////////////////

// Inner function does not have dogName but grabs from outside one
// function myDog(){
//   var dogName = "Buddy"
//   console.log(`${dogName} says woof`)
//   function otherDog(){
//     console.log(`${dogName} says woof`)
//   }
//   otherDog();
// }
// myDog()

// function myDog(){
//   var dogName = 'Fido'
// }
//
// myDog();
// console.log(`${dogname} says woof`)

//modules////////////////////////////


// calling return with an object, inside a closed function


// these can be called in an html page like chris.speak
// var chris = (function(){
//
//   return {
//     speak:function(){
//       console.log('test')
//     }
//   }
// })();

//////////////REDUCE////////////////////////

// EXAMPLE ONE- Adding up numbers
//
// // Need a reducer function and an intital value
// var data = [20,13,54];
//
// // starts with 0, and adds item to the accumulator each time
// var reducer = function(accumulator, item){
//   return accumulator + item;
// }
//
// var initialValue = 0;
//
// var total = data.reduce(reducer, initialValue)
// console.log(total)
//
// EXAMPLE TWO- combing instances of items together
//
// In this case we need a blank object; for object we need tally[vote], for number accumulator we can use tally.vote

var votes = ["angular","angular","angular","react","react","ember","vanilla"];

var initialValue = {};

var reducer = function(tally,vote){
  if(!tally[vote]){
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}
var result = votes.reduce(reducer, initialValue);

console.log(result);

EXAMPLE TWO
