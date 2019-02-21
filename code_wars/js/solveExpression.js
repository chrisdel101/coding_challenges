function solveExpression(exp) {
    if(exp === '0') return 0
    let side1
    let side2
    let arr = exp.split("")

    splitSides(arr)

    if(sideBySideOperators(side1, "-") && typeof sideBySideOperators(side1, "-") === 'number'){
        let index = sideBySideOperators(side1, "-") + 1
        // put '--' in brackets
        side1 = side1.split('')
        side1.splice(index,0, "(")
        side1.splice(side1.length,0, ")")
        side1 = side1.join('')
    }
    if(sideBySideOperators(side2, "-") && typeof sideBySideOperators(side2, "-") === 'number'){
        let index = sideBySideOperators(side2, "-") + 1
        // put '--' in brackets
        side2 = side2.split('')
        side2.splice(index,0, "(")
        side2.splice(side2.length,0, ")")
        side2 = side2.join('')
    }

  let digits = ['0','1','2','3','4', '5', '6', '7', '8', '9']
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
      // remove ?
          if(side1){
              for (var j = 0; j < side1.length; j++) {
                  if(side1[j] === "?"){
                      side1 = side1.replace(side1[j], digits[k])
                  }
              }
          }
          // remove ?
          if(side2){
              for (var l = 0; l < side2.length; l++) {
                  if(side2[l] === "?"){
                      side2 = side2.replace(side2[l], digits[k])
                  }
              }

          }
          // check for multiple zeros in a row
          if(side1[0] === "0"){
              if(!side2) return 0
              if(side1[1] === "0"){
                  continue
              }
              if(side2[0] === "0" && side2[1] === "0"){
                  continue
              }
          }
      let runSide1 = eval(side1)
      let evalExp = `${runSide1}===${side2}`
      if(eval(evalExp)){
          if(!exp.includes(digits[k])){
              return parseInt(digits[k])
          }
      }
  }
  return -1
  // split exp into two sides at "="
  function splitSides(arr){
      if(arr.includes("=")){
          arr.forEach(item => {
              if(item === "="){
                  console.log('run')
                  let index = arr.indexOf(item)
                  side1 = arr.slice(0, index).join('')
                  side2 = arr.slice(index+1).join('')
              }
          })
      }
  }
  // returns index - checks for side by side operators
  function sideBySideOperators(str,char){
      if(!str) return false
      for (var i = 0; i < str.length; i++) {
          if(str[i] === char && str[i + 1] === char){
              return i
          }
      }
      return false
  }
}

console.log(solveExpression("-7715?5--484?00=-28?9?5"))
// console.log(solveExpression("19--45=5?"))
// console.log(solveExpression("?*123?45=?")) //0
// console.log(solveExpression("-5?*-1=5?")) //0
// console.log(solveExpression("?*11=??")) //0
