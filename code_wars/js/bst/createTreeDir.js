function createTreeDirectory(tree){
    // console.log(tree)
    // for(var current = tree.children; current; current = current.children){
    let arr = []
    let tempArr = []
        let current = tree
        console.log("\n")
        let dirs = setDirection(current.children,current)
        tempArr = []
        // right
        while(current){
            // tempArr.push()
            arr.push(current.value)
            let newDirs = setDirection(current.children, current)
            if(newDirs){
                dirs[0] = newDirs[0]
                current = dirs[0]
            } else {
                current = null
            }
        }
        // return
        current = tree
        while(current){
            // tempArr.push()
            arr.push(current.value)
            let newDirs = setDirection(current.children, current)
            if(newDirs){
                dirs[1] = newDirs[1]
                current = dirs[1]
            } else {
                current = null
            }
        }
            console.log('arr', arr)
        // current =
    // }
}
// function pushValue()
function setDirection(arr, obj){
    // console.log('arr',arr)
    let left
    let right
    if(!arr.length) return
    if(arr[0].value > obj.value){
        right = arr[0]
        left = arr[1]
    } else {
        right = arr[1]
        left = arr[0]
    }
    // console.log('dirs', {
    //     left,
    //     right
    // })
    return [right, left]
}
const tree = {
  value: 5,
  children: [
    {
      value: 4,
      children: []
    },
        {
      value: 7,
      children: [
        {
          value: 3,
          children: []
        },
        {
          value: 15,
          children: []
        }
      ]
    }
  ]
}
createTreeDirectory(tree)
