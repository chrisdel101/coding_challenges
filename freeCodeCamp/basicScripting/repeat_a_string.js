// function repeatStringNumTimes(str, num) {
//   if (num < 0) {
//     return "";
//   } else {
//   var wholeStr = ""
//   while(num){
//     for (var i = 0; i < str.length; i++) {
//       wholeStr += str[i]
//     }
//     num--
//   }
//   return wholeStr
//   }
// }
//
// console.log(repeatStringNumTimes("abc", 3))

String.protptype.repeatStringNumTimes = function          repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } else {
  var wholeStr = ""
  while(num){
    for (var i = 0; i < str.length; i++) {
      wholeStr += str[i]
    }
    num--
  }
  return wholeStr
  }
}

var str = "daffy"

str.repeatStringNumTimes(str, 3)
