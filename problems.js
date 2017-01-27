// DONE************************
//
// ******x`x`array loop with an intake array - fizz buzz. Why won't it work?
//
// *********Divide by 10 -reddit.
//
// *********ajax url input exlained from boatshare
//
// **********ajax-return data from rails- What is it?
// data- only used in post?
//
// linear search with two inputs
//
// Appending stuff to DOM

//
//
// JSON jsFiddle
//
//
//
// Reverse and sort objects
// //
// //
// //
// //
//   Write a function that takes an array of objects with `age` and `name` properties e.g.
//
//   var people =[{ age: 30, name: "Peter" }, { age: 34, name: "Jon" }, { age: 30, name: "Catherine" }]
//
//   and returns an object mapping from `age` to an array of corresponding `names`, e.g.
//
//   { "30": ["Peter", "Catherine"], "34": ["Jon"] }
//
//
// ajax pocodex
// -
// - create empty {}
// - loop through
// -\\\
//
// var people =[{ age: 30, name: "Peter" }, { age: 34, name: "Jon" }, { age: 30, name: "Catherine" }]
//
// var object1 = {};
//   for (var i = 0;i < people.length;i++){
//     object1 +=
//   }

// HackReactor
//
// var x = ["chris", "del"];
//
// function cutName(duh){
//   var y = duh.slice(" ");
//   return y;
// }
//
// console.log(cutName(x));
//
// var myData = {};
//
// myData.fullname = cutName(x)
// myData.skype= x
//
// console.log(myData)

****If the type property of the current array value matches the kind parameter, then increment your numKind variable.****

Array.prototype.countCattle = function(kind) {
  var numKind = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
      numKind++;
    }
  }
  return numKind;
};
