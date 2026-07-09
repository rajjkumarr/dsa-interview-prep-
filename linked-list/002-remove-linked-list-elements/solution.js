/**
 * LeetCode 203
 * Remove Linked List Elements
 *
 * Pattern:
 * Dummy (Sentinel) Node
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var removeElements = function (head, val) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    while (prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }

    return dummy.next;
};
