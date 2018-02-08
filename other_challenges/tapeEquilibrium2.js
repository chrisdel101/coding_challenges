function solution(a){
var arr1 = [];
var arr2 = [];
var sum1 = 0;
var sum2 = 0;

for (var i = 0; i < a.length; i++) {
    // slice from start moving out with each i
    var x = a.slice(0,i+1);
    // use reduce to add all numbers together
    sum1 = getSum(x)

    // slice starting from second number outwards
    var y = a.slice(i+1,a.length)
    // check for length zero to stop last black error
    if(y.length > 0){
    // console.log(y)
    // Array.from(y)
        sum2 = getSum(y)
    // console.log(sum2)
    } else {
    	break;
    }
    // push abs diff to array
    arr1.push(Math.abs(sum1 - sum2))
    }
    // sort array and take first number
    var result = arr1.sort(function(a,b) { return a - b; });
    return result[0];
}
solution(a)

// console.log(arr2)


// function to get sum of each set of array
function getSum(arr){
        if(arr !== []){
        var sum = arr.reduce((a,b) => {
    	       return a + b
        })
        return sum
    }
}
