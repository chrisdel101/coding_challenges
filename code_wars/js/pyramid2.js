module.exports = class Pyramid {
    constructor(pyramid) {
		this.pyramid = pyramid.reverse()
        this.store = []
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
        let currentNode = this.pyramid[this.pyramid.length-1][k]
        for (var m = 0; m < 4; m++) {
            j = 0
            let i = 0
        // for (let i = 0 ; i < 4; i++) {
        let hitCurrentNode = false
        // only loop up to current node
        while(!hitCurrentNode){
            // start on highest row
            // console.log('i',i)
            // console.log('k', k)
            // console.log('j', j)
            console.log()
            if(this.pyramid[i][k] === currentNode){
                hitCurrentNode = true
                console.log('HERE is CN',currentNode)
                if(this.returnLeft(j, k)){
                    console.log('push current node')
                    this.store.push(currentNode)
                    this.store.push(this.returnLeft(j,k))
                    console.log('push left', this.returnLeft(j,k))
                    this.returnLeft(j+1, k-1)
                }
                else if(this.returnAbove(j,k)){
                    console.log('push current node')
                    this.store.push(currentNode)
                    this.store.push(this.returnAbove(j,k))
                    console.log('first call', this.returnAbove(j,k))
                    console.log('push up', this.returnAbove(j,k))
                    console.log('second call', this.returnAbove(j,k))
                    this.returnAbove(j+1,k)
                    console.log('recursive call')
                }
                else if(this.returnRight(j,k)){
                    console.log('push current node')
                    this.store.push(currentNode)
                    this.store.push(this.returnRight(j,k))
                    console.log('push right', this.returnRight(j,k))
                    this.returnRight(j+1,k+1)
                }
                if(!this.returnLeft(j, k) && !this.returnAbove(j,k) && !this.returnRight(j,k)){
                    console.log('push currentNode')
                    this.store.push(currentNode)
                }
                console.log('move row down')
                if(arrEnd -1){
                    arrEnd = arrEnd - 1
                    // console.log('END', this.pyramid[arrEnd][0])
                    currentNode = this.pyramid[arrEnd][k]
                    // console.log('MOVED', currentNode)

                }

            } else {
                this.store.push(this.pyramid[i][k])
                console.log('push regular', this.pyramid[i][k])
                console.log()
            }
            console.log()
            // use j to check recurse - not change i
            j++
            i++
        }
    }
    console.log(this.store)
        // console.log(firstRun)
        return firstRun
    }
    // check one row above to the left
    returnLeft(nodeRow, nodeCol){
        let R = nodeRow + 1
        console.log('left R',R)
        let C = nodeCol -1
        console.log('left C', C)
        // console.log( pyramid[1][0])
        let upperLeft
        if(this.pyramid[R] && this.pyramid[R][C]){
            console.log('node left')
            return this.pyramid[nodeRow+1][nodeCol-1]
        }
        return false
    }
    returnAbove(nodeRow, nodeCol){
        // console.log('above')
        let R = nodeRow + 1
        console.log('above R',R)
        let C = nodeCol
        console.log('above C', C)
        let upper
        if(this.pyramid[R] && this.pyramid[R][C]){
            // return true
            return this.pyramid[nodeRow+1][nodeCol]
        }
        return false
    }
    returnRight(nodeRow, nodeCol){
        let R = nodeRow + 1
        console.log('right R',R)
        let C = nodeCol + 1
        console.log('right C', C)
        // console.log(this.pyramid)

        let upperRight
        if(this.pyramid[R] !== undefined && this.pyramid[R][C] !== undefined){
            console.log(this.pyramid[R][C])
            console.log('node right', )
            console.log(this.pyramid[nodeRow+1][nodeCol+1])
            return this.pyramid[nodeRow+1][nodeCol+1]
        }
        return false
    }
}
