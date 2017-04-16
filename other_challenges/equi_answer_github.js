// ONE
function solution(A) {
  var sum = A.reduce((a,b)=> a+b,0);
  var sum_right;
  var sum_left = 0;

  for(i = 0; i < A.length; i++) {
    sum_right = sum - sum_left - A[i];
    if (sum_left === sum_right) return i;
    sum_left += A[i];
  }

  return -1;
}


// TWO
function eqIndexes(arr) {
    // start the right hand sum as the sum of the whole array
    var rightSum = arr.reduce(function(m,c) { return m+c }, 0),
        leftSum = 0,
        isEndPoint;

    // Here we use reduce to build up an array of all
    // indexes which have an equilibrium
    return arr.reduce(function(answer,cur,i) {
        rightSum -= cur;
        isEndPoint = i == 0 || i == arr.size -1
        // If we're at the beginning or the end of the array,
        // just return the answer we already have.  This will
        // be the empty array we started with when i == 0, and
        // it will be our final answer when we're at the last elm.
        if (isEndPoint) return answer;

        leftSum += arr[i-1];
        if (leftSum == rightSum) answer.push(i);
        return answer;
    },[]);
}

// THREE
function solution(A) {

    for(var i = 0; i < A.length; i++){
        var firstSum = 0;
        var secSum = 0;

        var currIndex = i + 1;
        //get first chunk
        var lenJ = currIndex;

          for(var j = 0; j < lenJ; j++){
            //console.log("firstChink: " + j);
            firstSum += A[j];
          }
          //get second chunk
            j = currIndex + 1;
            lenJ = A.length;
              for(j; j < lenJ; j++){
                //console.log("secChunk: " + j);
                secSum += A[j];
              }
              if(firstSum == secSum){

            return currIndex;
          }
        }
        return A.length;
}
