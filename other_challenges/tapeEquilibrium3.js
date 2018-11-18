function solution(arr){
    if(!arr){
        return
    }
    let sums = []
    for (var i = 0; i < arr.length-1; i++) {

        let left = arr.slice(0, i+1)
        let leftSum = left.reduce((acc, current) => {
            return acc + current
        })
        // console.log(leftSum)
        // console.log(left)
        let right = arr.slice(i+1, arr.length)
        // console.log(right)
        let rightSum = right.reduce((acc, current) => {
            return acc + current
        })
        // console.log(rightSum)
        let sum = Math.abs(leftSum - rightSum)
        sums.push(sum)
    }
    sums = sums.sort((a, b) => {
        return a - b
    })
    return sums[0]
}

console.log(solution([3,1,2,4,3]))

// arr.slice(1, arr.length-1)
