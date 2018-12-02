function solution(X,Y,D){
  var count = 0;
  while (X < Y) {
    X += D
    count++
  }
  return count
}
console.log(solution(10,85,30))
