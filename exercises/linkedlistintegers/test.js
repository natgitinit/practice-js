// const { linkedListIntegers, ListNode, reverseLinkedList } = require('./index'); 

// describe('linkedListIntegers', () => {
//     test('adds two huge numbers represented by linked lists', () => {
//         // Helper function to convert an array to a linked list
//         const arrayToLinkedList = (arr) => {
//             let head = new ListNode();
//             let current = head;

//             for (const num of arr) {
//                 current.next = new ListNode(num);
//                 current = current.next;
//             }

//             return head.next;
//         };

//         // Helper function to convert a linked list to an array
//         const linkedListToArray = (head) => {
//             const result = [];
//             while (head) {
//                 result.push(head.value);
//                 head = head.next;
//             }
//             return result;
//         };

//         // Test case 1
//         const a1 = arrayToLinkedList([9876, 5432, 1999]);
//         const b1 = arrayToLinkedList([1, 8001]);
//         const result1 = linkedListIntegers(a1, b1);
//         expect(linkedListToArray(result1)).toEqual([9, 8, 8, 8, 3, 4, 3, 3, 9, 9, 9, 8]);

//         // Test case 2 (add more test cases as needed)
//         const a2 = arrayToLinkedList([9999, 9999, 9999]);
//         const b2 = arrayToLinkedList([1]);
//         const result2 = linkedListIntegers(a2, b2);
//         expect(linkedListToArray(result2)).toEqual([0, 0, 0, 0, 1]);

//         // Test case 3 (add more test cases as needed)
//         // ...

//         // You can add more test cases to thoroughly test your function
//     });
// });
