// to get the counter to work, it must be passed in as an argument

function solution(start,end,jumpLength, count = 0){
	if(start >= end){
		return
    }
    if(start < end){
        start = start + jumpLength;
		solution(start,end,jumpLength, count + 1)
    }

}

solution(0,100,10)
