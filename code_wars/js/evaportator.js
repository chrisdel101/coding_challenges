function e(content, evaported, threshold){
    let originalContent = 10
    let i = 0

    function recurse(content, evaported, threshold){
        let percentLeft
    	// if(percentLeft < thres) return
        let breakPoint = threshold / originalContent
        // console.log('thres', breakPoint)
        // console.log('cont' ,contentLeft)

        // if(i > 20) return
        let mlsEvaportad = content * (evaported / 100)
        let contentLeft = content - mlsEvaportad
        // console.log('cont' ,contentLeft)
        // let check = contentLeft > threshold
        // console.log(i)
        i++
        if(contentLeft < breakPoint) {
            console.log(i)
            return i
        }
    	recurse(contentLeft, evaported, threshold)
    }
    recurse(content, evaported, threshold)
    return i
}

console.log(e(10,10,10))
