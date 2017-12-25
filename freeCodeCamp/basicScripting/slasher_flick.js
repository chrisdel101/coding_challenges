
function slasher(arr, howMany) {
  var len = arr.lenght
  return arr.slice(howMany, len)
}

slasher([1, 2, 3], 2);


//slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4]

// .slice(5,7) =>. ["cheese", 4]
// howMany, arr.length
*******Using Slice*************

 // TO GET BACK THE REMAINDER
// ([1,2,3,4,5,6,7], 3)
// array.slice( step, array.length )
//               3         7
//     => [4,5,6,7]
// ---- provide the total count of the array second, and the number to slice of the top

// TO GET THE SLICED OUT PORTION- reverse
// ([1,2,3,4,5,6,7], 3)
// array.slice( array.length, step )
                    // 7          3
            // =>    [1,2,3]
