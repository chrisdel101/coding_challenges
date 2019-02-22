function store(arr,n){
var store = []
for(var i = 0; i < arr.length;  i++){
	var temp = []
	for(var j = i;j < i + n; j++){
	temp.push(arr[j])
// 	console.log(i + 1)
// 		console.log(arr[j])
	}
    temp = temp.join('')
	store.push(temp)
}
console.log(store)
}

store(["hello", "goodbye", "so long", "aloha"], 2)
