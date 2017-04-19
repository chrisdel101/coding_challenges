function rot13(str) {
    str = str.split('')
    var codeNumbers = []

    var coder = str.map.call(str, (letter) =>{
    var number  =  letter.charCodeAt(0)
    codeNumbers.push(number)
    })
    console.log(codeNumbers)

    var addedNumbers = []
    codeNumbers.map((number) =>{
        addedNumbers.push(number + 13)
    })
    console.log(addedNumbers)
    // var result = addedNumbers.forEach((addedNumber) => {
    //     console.log( String.fromCharCode(addedNumber))
    // })
    for (var i = 0; i < addedNumbers.length; i++) {
        console.log(String.fromCharCode(addedNumbers[i]))
    }

}
console.log(rot13('TEST'))
