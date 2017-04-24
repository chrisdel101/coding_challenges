// function rot13(str) {
//     str = str.split('')
//     var codeNumbers = []
//
//     var coder = str.map.call(str, (letter) =>{
//     var number  =  letter.charCodeAt(0)
//     codeNumbers.push(number)
//     })
//     console.log(codeNumbers)
//
//     var addedNumbers = []
//     codeNumbers.map((number) =>{
//         addedNumbers.push(number + 13)
//     })
//     console.log(addedNumbers)
    // var result = addedNumbers.forEach((addedNumber) => {
    //     console.log( String.fromCharCode(addedNumber))
    // })
//     for (var i = 0; i < addedNumbers.length; i++) {
//         console.log(String.fromCharCode(addedNumbers[i]));
//     }
//
// }


function rot13(str){
//split into letters
    str = str.split('')
    var codeNumbers = []
    var addedNumbers = []

// loop through letters, if letter or white space, convert to code
    var coder = str.map.call(str, (letter) =>{
    // if captial letter, or white space
        if(letter.match(/[A-Z\s]/)){
       var number  =  letter.charCodeAt(0)
       codeNumbers.push(number)
        } else {
    // if punctuation just push to array
        codeNumbers.push(letter)
        }
       })


    for (var i = 0; i < codeNumbers.length; i++) {
        // if it's a number add 13
        if(isNaN(codeNumbers[i]) === false){
            var added13 = codeNumbers[i] + 13
            // console.log(added13)
            if(added13 > 90){

                // subract back down to 65
                var difference = added13 - 91
// add the difference to 65
                var added13 = difference + 65

                addedNumbers.push(added13)
            } else {
// if it's not a number over 90. push into array
                addedNumbers.push(added13)
            }
        } else {
// if it's not a number, it's punctuation, push into array
            addedNumbers.push(codeNumbers[i])
        }
    }
    console.log(addedNumbers)
    // punctuation has been changed
    var result = addedNumbers.map((addedNumber) => {
// if a number, convert to code
        if(isNaN(addedNumber) === false){
        var digit = String.fromCharCode(addedNumber)
// regex to match
            if(digit.match(/^[A-Z_.,!"'/$]*$/)){
                return digit
            } else {
                return  " "
            }
            // if not a number, just return
        } else {
            return addedNumber
        }
    })
    // rejoin letters to make a sting
    return result.join('')
}
console.log(rot13('SERR CVMMN!'))
