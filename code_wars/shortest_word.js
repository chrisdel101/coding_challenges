// function findShort(str){
//   var letters = 0;
//   for (var i = 0;i < str.length;i++){
//
//     if (str.split("").length){
//      letters += str[i];
//      console.log(letters.length)
//    }
//  }
// }
// console.log(findShort("word"));



countWords WITH REGIX FROM SO
// function countWords(str) {
//   return str.split(/\s+/).length;
// }
// console.log(countWords("the cake in the bar   test"
// ));


// WordCount by spaces
// function WordCount(str) {
//    return str.split(" ").length;
// }
//
// console.log(WordCount("hello   world"));
// }

COUNT WORDS IN STRING FROM SO
// function WordCount(str) {
//    return str.split(" ").length;
// }
//
// console.log(WordCount("hello world"));



// ANSWER FROM SO
// function WordCount(str) {
//     var words = str.split(" ");
//
//     var sortedWords = words.sort(function(a,b) {
//         if(a.length < b.length) return -1;
//         else if(a.length > b.length) return 1;
//         else return 0;
//     });
//    return sortedWords[0];
// }
//
// console.log(WordCount("hello to the world"));



MY FINAL SOLUTION
function findShort(s) {
 var words = s.split(" ");

  var shortWord = words.sort(function(a,b) {
    if(a.length < b.length){
      return -1;
    } else if(a.length > b.length){
      return 1;
    } else {
      return 0;
    }
  });
  x = shortWord[0].length
  return x
  };
  console.log(findShort("this is bogus"));
