function maxSubsetSum(arr){
    let store = []
    for (let i = 0; i < arr.length; i++) {
        // console.log('i', arr[i])
        const row = []
        // j is current value in arr
        // k loops over row
        for (let j = i, k=0; j < arr.length; j+=2, k++) {
            console.log('K:',k)
            console.log('jjjj',arr[j])
            console.log('k-1',row[k-1])
            let forwardValsArr = !!row[k-1] ? [...row[k-1], arr[j]] : [arr[j]]
            console.log('t',forwardValsArr)
            row.push(forwardValsArr)
            // if store not empty sum, else take current as sum 
            // const sumAll = !!store[k-1] ? store[k-1].reduce((a,b) => a+b) + arr[j]:     arr[j]
            // // console.log('sum',sumAll)
            // const max = Math.max(sumAll, arr[j])
            // console.log('max',max)
            // store = temp
            console.log('row',row)
            // console.log(store)
        }
        store.push(row)
    }
    console.log(store)
}
function sumArr(arr){
    // console.log('arr',arr)
    return  arr.reduce((a,b) => a+b)
}
// maxSubsetSum([3, 7, 4, 6, 5]) // 13
maxSubsetSum([-2, 1, 3, -4, 5]) // 13
[1, 3, -4, 5, -2]
[3, -4, 5, -2, 1]