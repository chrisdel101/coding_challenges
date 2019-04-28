function Node(data) {
  this.data = data;
  this.next = null;
}
function getNth(node, index) {
    if(!node) throw Error()
    let count = 0
    let current = node
    while(current){
        if(count === index){
            return current
        } else {
            current = current.next
            count++
        }
    }
    if(index >= count) throw Error()
}

    const ll = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: null
            }
        }
    }

console.log(getNth(ll, 1))
