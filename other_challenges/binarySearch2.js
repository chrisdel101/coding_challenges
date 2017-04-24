// -The idea is theoretical- normally we'd search through from start
// -Here, we are finding out if a value is in an array- there is no actual guess
// -This is just a better way to check if it is in there


// returns the index of the target

function binarySearch2(array, target){
    let min = 0,
    max = array.length + 1,
    guess;

    if (max < min){
        return -1
    }
// guess is just the variable--there is not actual guess
    while(min <= max){
        guess = Math.floor((max+min)/2)
// so guess will be a index of array array[guess]
        if(array[guess] === target){
            return guess
        } else if (array[guess] < target){
// if guessed 17 - too low, then set to 18 sealing of 17 and under
            min = guess + 1
        } else {
// if guessed 89 --too high, set to 88,sealing off all above it
            max = guess - 1
        }
    }
    console.log(guess)
}
binarySearch2([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 47)
