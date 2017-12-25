// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))
function dirReduc(arr){

    var tracking = []

    var n = 0
    var s = 0
    var e = 0
    var w = 0

    arr.forEach((dir) => {
        switch(dir){
            case "NORTH":
                n++
                break;
            case "SOUTH":
                s++
                break;
            case "WEST":
                w++
                break;
            case "EAST":
                e++
                break;
        }
    })

    // for one each dir
    if(n && s && e && w === 1){
        return arr
    }

    function checkValues(){
        if(n === s){
            console.log('north/south cancel')
        }
        if (n > s) {
            console.log('north returned')
            tracking.push('NORTH')
        }
        if(s > n){
            console.log('south returned')
            tracking.push('SOUTH')
        }
        if (e === w) {
            console.log('east/west canceled')
        }
        if (e > w)  {
            console.log('east returned')
            tracking.push('EAST')
        }
        if (w > e) {
            console.log('west returned')
            tracking.push('WEST')
        }
    }
    checkValues()
    // console.log(e,w,n,s)
    return tracking
}
