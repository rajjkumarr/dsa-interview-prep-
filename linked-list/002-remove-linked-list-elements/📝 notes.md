# Notes

## Why Dummy Node?

The head node has no previous node.

A dummy node becomes the previous node of the head.

This removes special-case logic.

---

## Why prev.next?

To remove a node, we update the previous node's next pointer.

We never delete the current node directly.

---

## Why not move prev after deletion?

After deletion:

prev.next points to a new node.

That node has not yet been checked.

Moving prev would skip it.

---

## Why return dummy.next?

The original head may be deleted.

dummy.next always points to the current head.
