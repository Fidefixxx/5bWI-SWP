import { QueueList } from "./QueueList";
const queue = new QueueList<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());    // 10 (erstes Element)
console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 20
console.log(queue.isEmpty()); // false
console.log(queue.getSize()); // 1