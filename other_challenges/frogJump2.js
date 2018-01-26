// var is being overwritten every call
function solution(start,end,jumpLength){
    var jumpNum = 0;
	if(start >= end){
		return
    }
    if(start < end){
        start = start + jumpLength;
        ++jumpNum
		console.log(jumpNum)
		solution(start,end,jumpLength)
    }
   return jumpNum
}

solution(0,100,10)
