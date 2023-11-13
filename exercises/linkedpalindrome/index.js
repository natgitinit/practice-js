// Note: Try to solve this task in O(n) time using O(1) additional space, 
// where n is the number of elements in l, since this is what you'll be 
// asked to do during an interview.

// Given a singly linked list of integers, determine whether or not it's a palindrome

// Example: For 1 = [0,1,0] 
// output: solution(1) = true

// Example: For 1 = [1,2,2,3] 
// output: solution(1) = false 

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//


function linkedPalindrome(l) {
    // const reversed = l.split('').reverse().join('');
    // return str === reversed;
    let curr = l;
    let arr = [];

    if (l == null) {
        return true;
    }

    //push elements of l into the stack
    while (curr != null) {
        arr.push(curr.value);

        curr = curr.next;
    }

    let curr2 = l;
    let length = arr.length;
    // traverse the list again & check by popping from the stack;
    while (curr2 != null) {
        //get top of stack
        let lastNum = arr.pop();
        //node data isn't same as the element popped:
        if (curr2.value != lastNum) {
            return false;
        }

        if (length / 2 === arr.length) {
            return true;
        }

        //move ahead;
        curr2 = curr2.next;
    }
    return true;

}