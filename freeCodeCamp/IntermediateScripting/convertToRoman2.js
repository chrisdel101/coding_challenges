function convertToRoman(num){
    let numerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let rom = "";
    numerals.forEach((check) => {
    // if remainder is less than num, divide by it
        if(num%check < num){
        // while the divisor is less or equal to num, subract divisor
        // when divisor is greater, moves on to next value in the for loop
             while(num >= check){ //while pauses the for loop
                num = num - check
                console.log(num > check)
                console.log(check)
                switch (check) {
                    case 1000:
                        rom += 'M';
                        break;
                    case 900:
                        rom += 'CM';
                        break
                    case 500:
                        rom += 'D';
                        break;
                    case 400:
                        rom += 'CD';
                        break;
                    case 100:
                        rom += 'C';
                        break;
                    case 90:
                        rom += 'XC';
                        break;
                    case 50:
                        rom += 'L';
                        break;
                    case 40:
                        rom += 'XL'
                        break;
                    case 10:
                        rom += 'X'
                        break;
                    case 9:
                        rom += 'IX'
                        break;
                    case 5:
                        rom += 'V'
                        break;
                    case 4:
                        rom += 'IV'
                        break;
                    case 1:
                        rom += 'I';
                        break;
                }
                // break;
            }
        }
    })
    return(rom)
}
console.log(convertToRoman(99))

// [...Array(10)].forEach((_, i) => {
//   // console.log(i);
// });
