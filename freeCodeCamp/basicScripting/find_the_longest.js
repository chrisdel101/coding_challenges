// ATTEMPT 1- working==============

// function findLongestWord(str) {
//   var split = str.split(' ')
//   console.log(split)
//   var largest = split[0]
//     // console.log(split[0])
//   for (var i = 0; i < split.length; i++) {
//       // console.log(split[i].length)
//       if(split[i].length > largest.length){
//         // console.log(split[i])
//         // console.log(largest)
//         largest = split[i]
//       }
//   }
//   return largest.length
// }


// ATTEMPT 2- working==============

function findLongestWord(str){
    return str.split(' ')
    .reduce((x,y) => {
        return Math.max(x, y.length)
    },0)


}

console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"))
