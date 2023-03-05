const printList = (head) => {
  let list = ''
  while (head) {
    list += ' ' + head.val
    head = head.next
  }
  console.log(`[${list}]`)
}

module.exports = printList