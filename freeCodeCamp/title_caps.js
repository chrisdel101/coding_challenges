// var re = /\s+/g/
//
// for (var i=0;i<str.length;i++){
// if(str[i].match(re)){
// 	console.log("space");
// }
// }

// REPLACE
// in S, it replaces what it finds with...
// return (s.replace(/[aeiouAEIOU]/g,"!"))


// var str = "require at least one space";
// var re = /^\s+$/
// //
// for (var i = 0; i < str.length; i++) {
//   // console.log(str[i])
//   if(str[i].match(re)){
//     console.log(str.charAt(i + 1).toUpperCase())
//     var lower = str.charAt(i + 1)
//     // console.log(lower)
//     str = str.replace(lower, str.charAt(i + 1).toUpperCase())
//
//     // var first = str.charAt(i + 1).toUpperCase()
//     // console.log(first)
//     // first = first.toUpperCase()
//     // console.log(first)
//   }
// }
// console.log(str);

////////////ATTMEMPT ONE///////regex- bugs///////////////
// 1. re finds white space
// 2.loop through and find all instances of white space.
// 3. assign white space to a variable
// 4. assign +1 to white space to make it the var next_letter
// 5. use repace to find the next_letter, replace with capliatised version

//
// var str = "require at least one space";
// function titleCase(str) {
//   var re1 = /^\s+$/; //S-overflow
//   var re2 = /\s/g; //W3
//   var whiteSpace = (str.match(re2))
//   console.log(whiteSpace)
//   // console.log(next_letter)
//   for (var i = 0; i < str.length; i++) {
//
//   console.log(str.charAt(whiteSpace))
//
//
//     // console.log(str[i])s
//     // if(str[i].match(re)){
//     // var next_letter = str.charAt(whiteSpace +1)
//       // str = str.replace(next_letter, str.charAt(i + 1).toUpperCase())
//       // }
//     }
//     // return str
// }
//
// console.log(titleCase("I'm a little tea pot"));
//
//
////////////ATTMEMPT TWO/////////////////////

// 1. regex to find all words and not whiteSpace
// 2. use replace to replace all instances it finds with function
// 3. function find first letter of the word, and capitalizes it, as if it where capping only the first of a sentence.


  function toTitleCase(str){
    var re = /\w\S*/g;
    var capString = str.replace(re,
      function(txt){
        return txt.charAt(0).toUpperCase()
        + txt.substr(1).toLowerCase();});
        return capString
  }
console.log(toTitleCase("I'm a little tea pot"))
//
// function test(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}
//
// console.log(test("what this"))
//
//
// console.log(("I'm a little tea pot").match(/\w\S*/g))
