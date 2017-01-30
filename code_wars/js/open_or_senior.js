function openOrSenior(data){
  arr = []
  for (var i = 0;i < data.length;i++){
    var person = data[i];
    if (person[0] >= 55 && person[1] > 7){
      person = 'senior'
      console.log(person)
    } else {
      person = 'open'
      console.log(person)
    }
    arr.push(person)
  }
  return arr
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])

// var numbers = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
//

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}


// arr = []
// for (var i = 0;i < numbers.length;i++){
//   var number = numbers[i];
//   if (number[0] > 55 && number[1] > 7){
//     number = "senior"
//     console.log(number)
//   } else {
//     number = "open"
//     console.log(number)
//   }
//   arr.push(number)
// }
// console.log(arr)



// for(var j = 0;j < numbers[i].length;j++){
//   console.log(numbers[i][0])
// }
