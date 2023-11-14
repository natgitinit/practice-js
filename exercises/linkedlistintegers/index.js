// You're given 2 huge integers represented by linked lists. 
// Each linked list element is a number from 0 to 9999 that represents a number with exactly 4 digits. 
// The represented number might have leading zeros. 
// Your task is to add up these huge integers and return the result in the same format.

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function linkedListIntegers(a, b) {
    // Reverse linked lists to start from the least significant digit
    let reversedA = reverseLinkedList(a);
    let reversedB = reverseLinkedList(b);

    // Initialize result linked list
    let result = new ListNode();
    let current = result;
    let carry = 0;

    // Add corresponding elements and handle carry
    while (reversedA || reversedB || carry) {
        const valA = reversedA ? reversedA.value : 0;
        const valB = reversedB ? reversedB.value : 0;

        const sum = valA + valB + carry;
        carry = Math.floor(sum / 10000);
        const remainder = sum % 10000;

        // Add a new node to the result linked list
        current.next = new ListNode(remainder);
        current = current.next;

        // Move to the next nodes in the linked lists
        reversedA = reversedA ? reversedA.next : null;
        reversedB = reversedB ? reversedB.next : null;
    }

    // Reverse the result linked list to get the correct order
    return reverseLinkedList(result.next);
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}


