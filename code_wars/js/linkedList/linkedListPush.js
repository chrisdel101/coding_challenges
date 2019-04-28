function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
    let node = new Node(data)
    node.next = head
    return node
}

function buildOneTwoThree() {
    let n
    n = push(null, 3)
    n = push(3, 2)
    return n
}
buildOneTwoThree()
