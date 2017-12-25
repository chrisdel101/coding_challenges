// function diffArrays(arr1,arr2){
//     // blank obj for tracking
//     var obj = {};
//     // join the arrays
//     var arr3 = arr1.concat(arr2)
//     // console.log(arr3)
//     // make copy of array
//     var arr4 = arr3.slice()
//     // check one array against the other
//     var x = arr3.filter((item,index) => {
//         return !arr1.includes(item) || !arr2.includes(item)
//     })
//     return x;
// }
function diffArrays(arr1,arr2){
    // blank obj for tracking
    var obj = {};
    var arr = [];
    // join the arrays
    var arr3 = arr1.concat(arr2)
    // console.log(arr3)
    // make copy of array
    var arr4 = arr3.slice()
    // check one array against the other
    var val = addUpValues(arr3,arr4,obj)
    for(var i in val){
        if(val[i] === 1){
            arr.push(i)
        }
        // console.log(i)
        // console.log(val[i])
    }
    return arr
}

console.log(diffArrays([1, "calf", 3, "pigvar"], [1, "calf", 3, 4]))
// console.log(diffArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]))
// console.log(diffArrays(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
//
// (["andesite", "grass", "dirt", "pink wool", "dead shrub", "diorite", "andesite", "grass", "dirt", "dead shrub"]))
//
// (["andesite1", "grass1", "dirt1", "pink wool1", "dead shrub", "diorite1", "andesite", "grass", "dirt", "dead shrub"]))

function addUpValues(arr3,arr4,obj){
    arr3.forEach((item,index) => {
        // console.log(item)
        // if obj has item
        // if(obj[item] === true){
        //     arr4.splice(index,)
        // }
        // if obj does not have value yet
        if(arr4.includes(item)){
            if(!obj.hasOwnProperty(item)){
            // and copy array has own prop
                // add obj and mark true
                obj[item] = 1
                // splice out of copy arr1 using indexOf
                // var ind = arr4.indexOf(item);
                // arr4.splice(ind,1);
            } else if(obj.hasOwnProperty(item)){
                obj[item] += 1
            }
        }
    })
    return obj
}
