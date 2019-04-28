module.exports = class Pyramid {
    constructor(pyramid) {
		this.pyramid = pyramid.reverse()
        this.store = []
        this.tempStore = []
        this.that = this
        this.leftChecked = false
        this.aboveChecked = false
        this.rightChecked = false
        this.currentNodeChecked
        // console.log(this.pyramid)
	}
    // go to end of arr and check that node
    // decrment to next row and check that node
    // when gets to bottom shift over one and start again
    handleCurrentNode(){
        let that = this
        let firstRun = []
        // set current node to start on very top
        // run loop from star to current node
        // check the current all directions
        // if false subract row and reset current node
        // if true recurse on the one it is true on until false
        // set to last node
        // col
        let k = 0
        // currentNode
        let j = 0
        let arrEnd = this.pyramid.length-1
        // this.leftChecked = false
        // this.aboveChecked = false
        // this.rightChecked = false
        let currentNode = this.pyramid[this.pyramid.length-1][k]
        let currentNodeRow = this.pyramid.length
        let tempStore = []
        for (var m = 0; m < 4; m++) {
            j = 0
            this.leftChecked = false
            this.aboveChecked = false
            this.rightChecked = false
            let aboveRestart = false
            let rightRestart = false
            let moveRowDown = true
            loop1:
            for (var l = 0; l < 3; l++) {
                this.currentNodeChecked = false
                loop2:
                for (let i = 0 ; i < currentNodeRow; i++) {
                    // of first iteration push in normal nodes
                    if(this.pyramid[i][k] === currentNode){
                        console.log('CURRENT', currentNode)
                        console.log()
                            console.log(

                                'left', this.leftChecked,
                                'above', this.aboveChecked,
                                'right', this.rightChecked
                            )
                            if(!this.currentNodeChecked){
                                this.tempStore.push(currentNode)
                                console.log('push current node')
                                this.currentNodeChecked = true
                            }
                            if(this.returnLeft(i, k, this) && !this.leftChecked){
                                this.directionCheckAndPush(i,k,this.returnLeft, "left", this)
                            } else if(!this.returnLeft(i, k, this)){
                                console.log('left checked')
                                this.leftChecked = true
                            }
                            if(this.returnAbove(i,k, this) && !this.aboveChecked){
                                // if previous was not called, call this one now
                                if(!this.returnLeft(i,k,this)){
                                    console.log('run above after left')
                                    this.directionCheckAndPush(i,k, this.returnAbove, "above", this)
                                } else if(!aboveRestart){
                                    aboveRestart = true
                                    console.log('restart above')
                                    // restart
                                    continue
                                } else {
                                    console.log('run above after restart')
                                    this.directionCheckAndPush(i,k, this.returnAbove, "above", this)
                                }
                            } else if(!this.returnAbove(i, k, this)){
                                console.log('above checked')
                                this.aboveChecked = true

                            }
                            if(this.returnRight(i,k,this) && !this.
                            rightChecked){
                                console.log('RIGHT', this.returnRight(i,k,this))
                                // if previous was not called, call this one now
                                if(!this.returnAbove(i,k,this)){
                                    console.log('run right after above')
                                    this.directionCheckAndPush(i,k, this.returnRight, "right", this)
                                    // else restart from beginning
                                } else if(!rightRestart){
                                    rightRestart = true
                                    console.log('restart right')
                                    // restart
                                    continue
                                    // run this after restart
                                } else {
                                    console.log('run right after restart')
                                    // reassign current node
                                    let arr = this.directionCheckAndPush(i,k, this.returnRight, "right", this)
                                    console.log(arr)
                                    let current = this.pyramid[arr[0]][arr[1]]
                                    console.log('current', current)
                                    // // let bool to false
                                    // moveRowDown = false

                                    // if right node get back new node vals
                                    // have obj with three bools to track each direction for each node moved to
                                    // if it matches push that current val, check obj and move to next
                                    // rerun with new row and col
                                    let nodeState = {}
                                    runDirection(arr[0], arr[1], this)
                                    function runDirection(row, col, scopedThis){
                                        nodeState[`r${row}c${col}`] = {}
                                        console.log(nodeState)
                                        if(scopedThis.returnLeft(row,col,scopedThis) &&    !nodeState[`r${row}c${col}`].left){
                                            // run and mark as false
                                            nodeState[`r${row}c${col}`].left = true
                                            console.log('r', row, 'c', col  )
                                            let arr = scopedThis.returnLeft(row,col, scopedThis)
                                            console.log('ARR', arr)
                                            return

                                        } else if(!scopedThis.returnLeft(row,col,scopedThis) &&    !nodeState[`r${row}c${col}`].left){
                                            nodeState[`r${row}c${col}`].left = true
                                        }
                                        if(scopedThis.returnAbove(row,col,scopedThis) &&    !nodeState[`r${row}c${col}`].above){
                                            // run and mark as false
                                        } else if(!scopedThis.returnAbove(row,col,scopedThis) &&  !nodeState[`r${row}c${col}`].above){
                                            nodeState[`r${row}c${col}`].above = true
                                        }
                                        if(scopedThis.returnRight(row,col,scopedThis) &&    !nodeState[`r${row}c${col}`].right){

                                        } else if(!scopedThis.returnRight(row,col,scopedThis) &&  !nodeState[`r${row}c${col}`].right){
                                            nodeState[`r${row}c${col}`].right = true
                                        }
                                        if(!nodeState[`r${row}c${col}`].left && !nodeState[`r${row}c${col}`].above &&
                                        !nodeState[`r${row}c${col}`].right){
                                            // stop function
                                            return
                                        }


                                    }


                                }
                            } else if(!this.returnRight(i, k, this)){
                                console.log('right checked')
                                this.rightChecked = true

                            }
                            if(
                                (!this.returnLeft(i, k, this) && !this.returnAbove(i,k, this) && !this.returnRight(i,k,this)) || (this.leftChecked && this.aboveChecked && this.rightChecked)
                            ){
                                console.log('BREAK')
                                console.log()
                                break loop1


                            }





                    } else {
                        // on first iteration handle normal nodes
                            console.log('regular', this.pyramid[i][k])
                            this.tempStore.push(this.pyramid[i][k])
                    }

                    console.log()
                }
        }
            if(arrEnd - 1 >= 0 && moveRowDown){
                console.log('move row down')
                arrEnd--
                currentNode = this.pyramid[arrEnd][k]
                currentNodeRow--
                // console.log('MOVED', currentNode)
                // console.log('NR', currentNodeRow)
            }
            console.log('TS',this.tempStore)
            this.store.push(this.tempStore)
            this.tempStore = []
        }
        console.log(this.store)
        // console.log(firstRun)
        return firstRun
    }
    directionCheckAndPush(i,k, func, dir, scopedThis){
        let checkDirections = true
        let iCopy = i
        while(checkDirections){
            console.log(i,k, func, dir)
            let funcToCall = `${dir}Checked`
            // use eval to set var value
            eval(`this.${funcToCall} = true`)
            console.log(this.aboveChecked)
            checkDirections = func(iCopy,k, this)
            console.log(`push ${dir}`,checkDirections)
            if(checkDirections){
                scopedThis.tempStore.push(checkDirections)
                if(dir === "right"){
                    return [i+1, k+1]
                } else if(dir === "left"){
                    return [i+1, k-1]

                }
            }
            // console.log('recursive call')
            iCopy++
        }
    }
    returnFuncName(dir){
        switch (dir) {
            case "left":
                return "leftChecked"
            case "above":
                return "aboveChecked"
            case "right":
                return "rightChecked"
        }
    }
    // check one row above to the left
    returnLeft(nodeRow, nodeCol,scopedThis){
        let R = nodeRow + 1
        // console.log('left R',R)
        let C = nodeCol -1
        // console.log('left C', C)
        // console.log( pyramid[1][0])
        let upperLeft
        if(scopedThis.pyramid[R] && scopedThis.pyramid[R][C]){
            console.log('node left', scopedThis.pyramid[nodeRow+1][nodeCol-1])
            return scopedThis.pyramid[nodeRow+1][nodeCol-1]
        }
        return false
    }
    returnAbove(nodeRow, nodeCol, scopedThis){
        let R = nodeRow + 1
        // console.log('above R',R)
        let C = nodeCol
        // console.log('above C', C)
        if(scopedThis.pyramid[R] && scopedThis.pyramid[R][C]){
            // return true
            return scopedThis.pyramid[nodeRow+1][nodeCol]
        }
        return false
    }
    returnRight(nodeRow, nodeCol,scopedThis){
        let R = nodeRow + 1
        // console.log('right R',R)
        let C = nodeCol + 1
        // console.log('right C', C)
        // console.log(this.pyramid)

        let upperRight
        if(scopedThis.pyramid[R] !== undefined && scopedThis.pyramid[R][C] !== undefined){
            // console.log(scopedThis.pyramid[nodeRow+1][nodeCol+1])
            return scopedThis.pyramid[nodeRow+1][nodeCol+1]
        }
        return false
    }
}
