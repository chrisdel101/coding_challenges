function longestConsec(arr,n){
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
  let longest = ""
  for (var j = 0; j < store.length; j++) {
      if(store[j].length > longest.length){
          longest = store[j]
      }
  }
  console.log('ll',longest.length)
  if(n >= arr.length || n == 0){
      // console.log(n)
      // console.log(longest.length)
    return ""
  }
  // console.log(longest)
  return longest
}

longestConsec([ 'it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15)
