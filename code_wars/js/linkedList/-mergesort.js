function Node(data) {
this.data = data;
this.next = null;
}

function sortList(head, data) {

        if (head === null || head.next === null) {
            return head;
        }

        let prev = null;
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            console.log('fast top',fast)
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
            console.log('fast',fast)
            console.log('slow',slow)
        }

        // close first half list
        prev.next = null;

        const l1 = sortList(head);
        const l2 = sortList(slow);
        // console.log(l1,l2)
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



console.log(sortList(ll))
