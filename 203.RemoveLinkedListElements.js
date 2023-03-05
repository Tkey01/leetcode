/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const printList = require("./utils/printList")

const list = {
  val: 7,
  next: {
    val: 7,
    next: {
      val: 7,
      next: {
        val: 7,
        next: null
      }
    }
  }
}

const removeElements = (head, val) => {
  if (!head) {
    return null
  }

  head.next = removeElements(head.next, val)

  if (head.val === val) {
    return head.next
  }

  return head
}

printList(list)
printList(removeElements(list, 7))