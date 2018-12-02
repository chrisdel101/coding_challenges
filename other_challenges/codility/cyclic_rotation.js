function solution(A, K){
    while (K){
      var popped = A.pop()
      var unshift = A.unshift(popped)
      K--
    }
    return A
}

// add exception for empty arrays, or missing K


solution([3, 8, 9, 7, 6], 3)
