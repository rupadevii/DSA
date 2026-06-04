/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head===null) return head
    let prev = null
    let curr = head
    let temp = head.next

    while(temp){
        curr.next = prev
        prev = curr
        curr = temp
        temp = temp.next
    }

    curr.next = prev

    return curr
};
