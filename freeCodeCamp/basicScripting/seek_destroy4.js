function destroyer(arr) {
	let store = []
	for(let i = 0; i < arguments.length+1; i++){
	console.log('args',arguments[i])
		for (var j = 0; j < arr.length; j++) {
            console.log('j', arr[j])
            if(arguments[i] === arr[j]){
                console.log('equal')
                console.log(arguments[i])
                console.log(arr[j])
                let indexOf = arr.indexOf(j)
                // 			console.log(indexOf)
                arr.splice(indexOf,1)
                console.log('splice out')
                console.log('arr', arr)

            }
        }

	}
		console.log(arr)
  }

destroyer(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
