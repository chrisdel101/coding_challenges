function Node(data) {
this.data = data;
this.next = null;
}

function sortedInsert(head, data) {
    if(!head) return new Node(data)
    let vals = []
    let current1 = head
    let length = 0
    // push vals to array
    while(current1){
        vals.push(current1.data)
        current1 = current1.next
        length++
    }
    // push added val
    vals.push(data)
    // sort array
    vals = vals.sort((a,b) => a-b)
    let current2 = head
    let previous = head
    let i = 0
    // reassign sorted vals to list
    while (current2) {
        // reassign to arr vals in order
        current2.data = vals[i]
        previous = current2
        current2 = current2.next
        // insert last node at end
        if(vals.length > length && !current2){
            previous.next = new Node(vals[i+1])
        }
        i++
    }
    return head
}



const ll = {
    data: 3,
    next: {
        data: 4,
        next: {
            data: 2,
            next: {
                data: 1,
                next: null
            }
        }
    }
}



console.log(sortedInsert(ll,11))
