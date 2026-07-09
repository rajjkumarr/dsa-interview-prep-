# Quick Revision

Pattern

✔ Dummy Node

Algorithm

1. Create dummy
2. dummy.next = head
3. prev = dummy
4. Traverse
5. Delete if match
6. Else move prev
7. Return dummy.next

Complexity

Time: O(n)

Space: O(1)

Common Mistake

❌ Move prev after deletion

Correct

Delete → Stay

No Delete → Move
