# Remove Linked List Elements (LeetCode 203)

## Problem Statement

Given the head of a linked list and an integer `val`, remove all nodes whose value is equal to `val` and return the new head.

---

# Pattern

- Linked List
- Dummy (Sentinel) Node
- Pointer Manipulation

---

# Why Does This Pattern Exist?

Deleting a node from a singly linked list requires access to its previous node.

The head node has no previous node, making it a special case.

A dummy node removes this special case by acting as the previous node for the head, allowing one consistent algorithm for all deletions.

---

# Intuition

Instead of checking whether the current node should be removed, maintain a pointer (`prev`) to the node before the one being evaluated.

If the next node contains the target value, bypass it by updating:

prev.next = prev.next.next

Otherwise, move `prev` forward.

---

# Brute Force

No practical brute-force solution exists because linked lists do not support direct indexing.

The optimal pointer manipulation approach is the standard solution.

---

# Optimized Solution

1. Create a dummy node.
2. Connect it to the original head.
3. Initialize `prev` to the dummy node.
4. Traverse the list.
5. If `prev.next.val === val`, remove the node.
6. Otherwise move `prev`.
7. Return `dummy.next`.

---

# Complexity Analysis

Time Complexity: O(n)

Space Complexity: O(1)

---

# Edge Cases

- Empty list
- Single node
- Head needs removal
- Multiple consecutive target nodes
- All nodes removed
- No target value found

---

# Common Mistakes

- Forgetting the dummy node
- Returning `head` instead of `dummy.next`
- Moving `prev` after deletion
- Using `=` instead of `===`

---

# Learnings

- Dummy nodes eliminate special cases.
- Deletion always modifies the previous node's `next`.
- Do not move `prev` after deleting a node.
- Return `dummy.next`.

---

# Similar Problems

- Remove Nth Node From End
- Merge Two Sorted Lists
- Partition List
- Swap Nodes in Pairs
