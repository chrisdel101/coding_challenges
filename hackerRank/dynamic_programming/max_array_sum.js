function makeAllNonAdjacentSeqs(arr){
    let store = []
    // for (let i = 0; i < 1; i++) {
        // console.log('i', arr[i])
        let adjRow = []
        let nonAdjRow = []
        let adjRowValues = []
        let nonAdjRowValues = []
        let adjRowLen = nonAdjRowLen = 0
        // a tracks place in adjRow, b tracks place in nonAdjRow
        for (let j = 0  ; j < arr.length; j++) {
            console.log('j', j)
            console.log('arr[j]', arr[j])
            console.log('adjRow', adjRow)
            console.log('nonAdjRow', nonAdjRow)
            // // on first one add first elem
            // if(i === j) {
            //     adjRow = [arr[j]]
            //     nonAdjRow = [arr[j]]
            //     console.log('ADD', adjRow, nonAdjRow)
            // // values are even, or are odd
            // }
             if(
                (j % 2 === 0 )){
               
                // console.log("a", a)
                // if a prev value exists in adjRow 
                if(adjRow.length){
                    for (let k = 0; k < adjRowLen; k++) {
                        console.log("adj k",adjRow[k])    
                        let x = [...adjRow[k], arr[j]]
                        console.log("XXX",x)    
                        x.length && adjRow.push(x)
                        x.length && adjRowValues.push(x)
                        if(j - 2 > 0){
                            console.log("i-3", arr[j-3])
                            let y = [...nonAdjRow[k], arr[j]]
                            console.log("YYY1",y)    
                            y.length && adjRowValues.push(y)
                        }
                    } 
                } else{
                    adjRowValues.push([arr[j]])
                    adjRow.push([arr[j]])
                }
                // temp.length && adjRow.push(temp)
                // values are adjacent to others
                console.log('adj', adjRow)
                adjRowLen++
             // if ADJ
            } else {
                // continue
                let temp = []
                if(nonAdjRow.length){
                    // console.log("here")
                    for (let k = 0; k < nonAdjRowLen; k++) {
                        console.log("nonAdj k",nonAdjRow[k])    
                        let x = [...nonAdjRow[k], arr[j]]
                        console.log("XXX",x)    
                        x.length && nonAdjRow.push(x)
                        x.length && nonAdjRowValues.push(x)
                        // console.log("push",x)
                        if(j - 2 > 0){
                            console.log("BBB",adjRow)   
                            console.log("i-3", arr[j-3])
                            let y = [...adjRow[k], arr[j]]
                            console.log("YYY2",y)    
                            y.length && nonAdjRowValues.push(y)
                        }
                    } 
                } else{
                    nonAdjRow.push([arr[j]])
                    nonAdjRowValues.push([arr[j]])
                }
                // temp.length && nonAdjRow.push(temp)
                // values are adjacent to others
                console.log('nonadj', nonAdjRow)
                nonAdjRowLen++
            }
        }
        store.push(nonAdjRowValues)
        console.log(store)
        store.push(adjRowValues)
        console.log(store)
    }
// }
// makeAllNonAdjacentSeqs([3, 7, 4, 6, 5]) // 13
makeAllNonAdjacentSeqs([-2, 1, 3, -4, 5 ]) // 13
// - 3 from current 
adj = [[-2], [-2, 3], [-2, 5], [-2, 3, 5]]
nonAdj = [[1]]