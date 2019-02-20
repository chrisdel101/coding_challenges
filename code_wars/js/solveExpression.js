function solveExpression(exp) {
    if(exp === '0') return 0
    let side1
    let side2
    let arr = exp.split("")
    if(arr.includes("=")){
        arr.forEach(item => {
            if(item === "="){
                let index = arr.indexOf(item)
                side1 = arr.slice(0, index).join('')
                side2 = arr.slice(index+1).join('')
            }
        })
    } else {
            side1 = exp
    }
      console.log('s1',side1)
      console.log('s2',side2)
  let digits = ['0','1','2','3','4', '5', '6', '7', '8', '9']

  // console.log(side2)
  let operators = ["+", "-", "*"]
  for (var m = 0; m < operators.length; m++) {
      // console.log('C', sideBySideOperators(side1, operators[m]))
      if(sideBySideOperators(side1, operators[m])){
          let index = sideBySideOperators(side1, operators[m])
          // console.log(index)
          side1 = side1.split('')
          // console.log(side1)
          side1.splice(index,1)
          side1 = side1.join('')
      }
      if(sideBySideOperators(side2, operators[m])){
          let index = sideBySideOperators(side1, operators[m])
          // console.log(index)
          side1 = side1.split('')
          // console.log(side1)
          side1.splice(index,1)
          side1 = side1.join('')
      }
  }
  let side1Copy
  let side2Copy
  if(side1) {
     side1Copy = side1.slice('')
  }
  if(side2) {
     side2Copy = side2.slice('')
  }
  for (var k = 0; k < digits.length; k++) {
      // reset to copy on each iteration
    side1 = side1Copy
    side2 = side2Copy
      console.log('digit', k)
      // remove ?
      if(side1){
          for (var j = 0; j < side1.length; j++) {
              // console.log(side1[j])
              if(side1[j] === "?"){
                  // console.log(digits[k])
                  // console.log(exp[j])
                  side1 = side1.replace(side1[j], digits[k])
                  // console.log('dig k', digits[k])
                  //  console.log('side1',side1[j])
              }
          }
          console.log('s1',side1)
          if(side1[0] === "0"){
              if(!side2) return 0
              console.log('continue',k)
              continue
          }
      }
      // remove ?
      if(side2){
          for (var l = 0; l < side2.length; l++) {
              // console.log(side2[l])
              if(side2[l] === "?"){
                  // console.log(digits[k])
                  // console.log(exp[l])
                  side2 = side2.replace(side2[l], digits[k])
                  // console.log('dig k', digits[k])
                  //  console.log('side2',side2[l])
                  // console.log(side2)
              }
          }

      }

     // if(isAllZeros(side1)){
     //     console.log('s1', side1)
     //
     //     side1 = 0
     // }
     if(isAllZeros(side2)){
         side2 = 0
     }
      // let x = parseInt(side1)
      console.log('s1', side1)
      let runSide1 = eval(side1)
      console.log(runSide1)
      let evalExp = `${runSide1}===${side2}`
      console.log('EE',evalExp)
      if(eval(evalExp)){
          if(!exp.includes(digits[k])){
                  console.log('DK',digits[k])
              return parseInt(digits[k])
          }
          // return digits[k]
      }
  }
  return -1
  function isAllZeros(str){
      if(!str) return
      for (var i = 0; i < str.length; i++) {
         if(str[i] !== "*" && str[i] !== "+" && str[i] !== "-"){
             if(str[i] !== '0'){
                 return false
             }
         }
      }
      return true
  }
  // returns index of first to splice out
  function sideBySideOperators(str,char){
      if(!str) return
      // let count = 0
      for (var i = 0; i < str.length; i++) {
          if(str[i] === char && str[i + 1] === char){
              return i
          }
      }
      return
      // return count
  }
}

// console.log(solveExpression("19--45=5?"))
// console.log(solveExpression("000")) //0
console.log(solveExpression("-5?*-1=5?")) //0
