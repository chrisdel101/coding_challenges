function LinkedList(){
    var head = null
    var length = 0

    var Node = function(element){
        // element controls element itself
        // next controls the pointer
        this.element = element
        this.next = null
    }
    this.size = function(){
        return length
    }
    this.add = function(element){
        // create new element
        var node = new Node(element)
        this.next = null
        // if first link
        if(head === null){
            head = node
        } else {
            // assign to head to begin
            var currentNode = head
            // then loop to end to place it - loop until it hits null
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        length++
    }
    this.remove = function(element){
        var currentNode = head
        var previousNode
        // if the first element is the one to remove
        if(currentNode.element === element){
            // point head to the second node
            head = currentNode.next
        } else {
            // search through the list to find elem
            while(currentNode.element !== element){
                // assign previous to current
                previousNode = currentNode
                // reset current to point to the next
                currentNode = currentNode.next
            }
            // move previous pointer to override current node pointer
            previousNode.next = currentNode.next
        }
        length--

    }
    this.seeAllNodes = function(list){
        console.log(head)
    }
    this.head = function(){
        return this.head
    }
}

var instance = new LinkedList()

instance.add("dog")
instance.add("cat")
// instance.remove("dog")
// instance.remove("cat")
instance.seeAllNodes()
