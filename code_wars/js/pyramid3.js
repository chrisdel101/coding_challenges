function pyramid(pyramid){
    pyramid = pyramid.reverse()
    const currentNodeState = {}
    let arrEnd = pyramid.length-1
    let currentNodeRow = pyramid[arrEnd]
    let col = 0
    let k = 0
    let tempArr = []
    while(k < 4){
        let dirState = {}
        for (var i = 0; i <= currentNodeRow; i++) {// i is row
            let currentNode = pyramid[arrEnd][col]
            let currentCoords = [arrEnd, col]

            console.log('CURRENT',currentNode )
            console.log('CURRENT',currentCoords )
            // console.log('p', pyramid[arrEnd][col])
            if(pyramid[i][col] === currentNode){
                if(!currentNodeState[`currentR${i}C${col}`]){
                    currentNodeState[`currentR${i}C${col}`] = {
                        left: false,
                        above: false,
                        right: false
                    }
                }
                console.log('STSTE',`currentR${i}C${col}`)
                console.log('STSTE',currentNodeState[`currentR${i}C${col}`])
                direction(pyramid, i, col, dirState, currentNode)
                function direction(pyramid, j, col,dirState,currentNode){
                    console.log('current call', pyramid[j][col])
                    if(!dirState[`r${j}c${col}`]){
                        dirState[`r${j}c${col}`] = {
                            left: false,
                            above: false,
                            right: false
                        }
                    }
                    console.log(dirState[`r${j}c${col}`])
                    console.log([`r${j}c${col}`])
                    if(pyramid[j][col] === currentNode){
                        // create state obj for each currentNode
                        console.log('push current')
                        tempArr.push(currentNode)
                    }
                    console.log('b4 left')

                    if(pyramid[j+ 1] && pyramid[j + 1][col - 1] && !dirState[`r${j}c${col}`].left){//left
                        // func takes in coords and checks - positive push node
                        // put new coords in and run again
                        console.log('push left')
                        tempArr.push(pyramid[j - 1][col])
                        dirState[`r${j}c${col}`].left = true
                        direction(pyramid, j+1, col-1,dirState,currentNode)

                    } else {
                        dirState[`r${j}c${col}`].left = true
                    }
                    console.log('b4 above')

                    // console.log('ABOVE',pyramid[j + 1] && pyramid[j + 1])
                    if(pyramid[j + 1] && pyramid[j + 1][col] && !dirState[`r${j}c${col}`].above){//above
                        tempArr.push(pyramid[j + 1][col])
                        console.log('above push', pyramid[j + 1][col])
                        dirState[`r${j}c${col}`].above = true
                        direction(pyramid, j+1, col,dirState,currentNode)
                    } else {
                        dirState[`r${j}c${col}`].above = true
                    }
                    console.log('after above')
                    if(pyramid[j + 1] && pyramid[j + 1][j + 1] && !dirState[`r${j}c${col}`].right){//right
                        console.log('push right')
                        tempArr.push(pyramid[j + 1][col + 1])
                        dirState[`r${j}c${col}`].right = true
                        direction(pyramid, j+1, col+1,dirState,currentNode)

                    } else {
                        dirState[`r${j}c${col}`].right = true
                    }
                    if(!j+1 & dirState[`r${j}c${col}`].left && dirState[`r${j}c${col}`].above && dirState[`r${j}c${col}`].right){
                        // console.log('push last')
                        // tiempArr.push(pyramid[j][col])

                    }
                    console.log('BOTTOM', dirState)
                    // tempArr.push(pyramid[j][col])
                    return
                }
            } else {
                console.log('push regular', pyramid[i][col])
                tempArr.push(pyramid[i][col])

            }
        }
        currentNodeRow--
        k++
        arrEnd--
    }

    console.log(tempArr)
    console.log(pyramid)

}

pyramid([[3],
        [7, 4],
        [2, 4, 6],
        [8, 5, 9, 3]])
