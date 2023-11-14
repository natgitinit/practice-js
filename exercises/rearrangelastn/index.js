// Given a singly linked list of integers l and 
// a non - negative integer n, move the last n list 
// nodes to the beginning of the linked list.

// Calculate the length of the linked list to find the position where the cut should happen.
// Move the last n nodes to the beginning by updating the pointers accordingly.

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function moveLastNToBeginning(head, n) {
    if (!head || n === 0) {
        return head;
    }

    // Calculate the length of the linked list
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    // No need to move if n is greater than or equal to the length
    if (n >= length) {
        return head;
    }

    // Find the position to cut the linked list
    let cutPosition = length - n;
    current = head;
    let prev = null;

    while (cutPosition > 0) {
        prev = current;
        current = current.next;
        cutPosition--;
    }

    // Move the last n nodes to the beginning
    prev.next = null; // Cut the list at the calculated position
    const newHead = current; // New head is the current position
    while (current.next) {
        current = current.next;
    }
    current.next = head; // Connect the last node of the original list to the original head

    return newHead;
}

// Example usage:
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const n = 2;

// Move the last n nodes to the beginning
const modifiedList = moveLastNToBeginning(list, n);

// Helper function to convert the linked list to an array for easy verification
function linkedListToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

console.log(linkedListToArray(modifiedList)); // Output: [4, 5, 1, 2, 3]
