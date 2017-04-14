function solution(A){

  var initialValue = {};

  var reducer = function(arr,number){
    if(!arr[number]){
      arr[number] = 1;
    } else {
      arr[number] = arr[number] + 1;
    }
    return arr;
  }

  var result = A.reduce(reducer, initialValue);


    // var current_value = result[i]
    // // console.log(current_value)
    // console.log(current_value)
    // if((count < current_value) && (current_value % 2 === 0)){
    //   count = current_value
    //   odd = i;
    // }
    var odd = []
    for (var i in result){
      if (result[i] % 2 != 0){
        odd.push(i)
        }
    }
    console.log(+odd)
  }

solution([1,2,4,5,1021,3000,3010,55,55,1,2,4,5,1021,3000,3010,1,2,4,5,7,1021,3000,3010,55,55,1,2,4,5,1021,3000,3010])
