function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
   let count = 0
   let current = head
   while(current){
      current = current.next
      count++
  }
  return count
}
// takes a list
function count(list, data) {
  // point to list head
  let count = 0
  let current = list
  while(current){
      if(current.val === data){
          count++
      }
      // point to head next
      // head next is everything affet head
      current = current.next
  }
  return count

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
console.log(count(ll, 1))
