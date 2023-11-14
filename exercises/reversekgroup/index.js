// Given a linked list l, reverse its nodes k at a time and return the modified list.
// k is a positive integer that is less than or equal to the length of l.
// If the number of nodes in the linked list is not a multiple of k, 
// then the nodes that are left out at the end should remain as- is.

// Singly-linked lists are already defined with this interface:
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function reverseKGroup(l, k) {
    if (!l || k <= 1) {
        return l;
    }

    let length = 0;
    let current = l;

    // Calculate the length of linked list 
    while (current) {
        length++;
        current = current.next;
    }

    // Dummyhead to simplify code
    const dummyHead = new ListNode(0);
    dummyHead.next = l;
    let prevGroupEnd = dummyHead;

    // Reverse k nodes at a time
    while (length >= k) {
        let groupStart = prevGroupEnd.next;
        let groupEnd = groupStart;

        // reverse k nodes 
        for (let i = 1; i < k; i++) {
            const nextNode = groupEnd.next;
            groupEnd.next = nextNode.next;
            nextNode.next = groupStart;
            prevGroupEnd.next = nextNode;
            groupStart = nextNode;
        }
        prevGroupEnd = groupEnd;
        length -= k;
    }
    return dummyHead.next;
}


// Example usage:
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const k = 2;

// Reverse nodes in groups of k
const reversedList = reverseKGroup(list, k);

// Helper function to convert the linked list to an array for easy verification
function linkedListToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

console.log(linkedListToArray(reversedList)); // Output: [2, 1, 4, 3, 5]