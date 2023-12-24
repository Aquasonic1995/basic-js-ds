const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newN = new ListNode(value);

    if (this.tail === null) {
      // If the queue is empty, set both head and tail to the new node
      this.head = newN;
      this.tail = newN;
    } else {
      // Otherwise, add the new node to the end and update the tail
      this.tail.next = newN;
      this.tail = newN;
    }
  }

  dequeue() {
    if (this.head === null) {
      return undefined; // Queue is empty
    }

    const result = this.head.value;
    this.head = this.head.next;

    // If the queue becomes empty, update the tail to null
    if (this.head === null) {
      this.tail = null;
    }

    return result;
  }

  getUnderlyingList() {
    return this.head;
  }
}

module.exports = {
  Queue
};
