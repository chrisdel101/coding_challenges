function convertToRoman(num){
    let romNUms =  ['M','D','C','L','X','V','I']
    let numerals = [1000,500,100,50,10,5,1]
    let rom = "";

        numerals.forEach((check) => {
    // - if num / check has modulo less than num, divide by check
    // - return the number of times, convert to convertToRoman
    // - do same for remainder
    // - if num / check has moduul equal to zero, assign to roman
            if(num%check < num){
                // set the numeral to divide
                let currentCheckIndex = numerals.indexOf(check)
                let currentCheck = numerals[currentCheckIndex]
                while(num%currentCheck < num){
                    num = num - currentCheck;
                    romNUms.forEach((num) => {
                        rom = romNUms[currentCheckIndex];
                        console.log(rom)
                    })
                }
//
                // num = num - currentCheck
                // console.log(num)
            }
        })
        // console.log(val)
    // }
}
console.log(convertToRoman(37))
