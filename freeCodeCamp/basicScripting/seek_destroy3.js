function destroyer(arr){
	var args = Array.from(arguments)
    var array = args[0];
    var rest = args.splice(1)
    var outerIndexes =[]
    // console.log(array)
    // console.log(rest)

    rest.forEach((i) => {
        if(array.includes(i)){
            var indexes = getAllIndexes(array,i)
            outerIndexes.push(indexes)
            // let index = array.indexOf(val);
            // console.log(index)


        }
    })
    outerIndexes = [].concat.apply([], outerIndexes);
    outerIndexes.forEach((j) => {
        delete array[j]
    })

    return array.filter(Boolean)
}


function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
