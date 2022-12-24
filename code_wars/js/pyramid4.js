function pyramid(pyramid){
   let total = 0
   let index = 0
   let values =[]
   for (const arr of pyramid){
    // first item
    if(arr.length === 1){
        total = arr[0]
        values.push(arr[0])
    } else {
        if(total + arr[index] > total + arr[index +1]){
            total += arr[index]
            values.push(arr[index])
        } else {
            total += arr[index+1]
            values.push(arr[index+1])
            index++
        }
       
    }
   }
   console.log(values)
   console.log(index)
   return total
}

console.log(pyramid([
    [75],//0
    [95, 64],//0
    [17, 47, 82], //1
    [18, 35, 87, 10], //2
    [20,  4, 82, 47, 65],//2
    [19,  1, 23, 75,  3, 34],//3
    [88,  2, 77, 73,  7, 63, 67],//3
    [99, 65,  4, 28,  6, 16, 70, 92],//3
    [41, 41, 26, 56, 83, 40, 80, 70, 33],//4
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],//4
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],//5
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],//5
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],//6
    [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],//7
    [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]//7
]))
