function sumAll(arr){
    var min = getMinOfArray(arr);
    var max = getMaxOfArray(arr)

    var range = []
    for (var i = min; i <= max; i++) {
        range.push(i)
    }
    // console.log(range)
    return range.reduce((a,b) => a + b )

    function getMinOfArray(numArray) {
        return Math.min.apply(null, numArray);
    }
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
}
sumAll([2,1,3])
