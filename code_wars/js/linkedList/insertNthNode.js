function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
    let node = new Node(data)
    if(!head) return node
    let current = head
    // keep record of previous
    let previous = head
    let length = 0
    // track here place node at proper index
    let currentIndex = 0
    while(current){
        if(index === currentIndex){
            // add first node logic
            if(index === 0){
                head = node
                node.next = current
                return head
            // add other nodes except last logic
            } else {
                previous.next = node
                node.next = current
                return head
            }
            // just transverse nodes logic
        } else {
            previous = current
            current = current.next
            currentIndex++
        }
        length++
    }
    if(index > length) throw Error()
    // add last node logic
    previous.next = node
    return head
}


const ll = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: null
        }
    }
}

console.log(insertNth(ll, 5, 23))
