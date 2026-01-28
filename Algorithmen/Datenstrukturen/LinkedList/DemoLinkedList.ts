import { LinkedList } from "./LinkedList";

const list = new LinkedList<number>();

list.add(10);
list.add(20);
list.add(30);

console.log(list.get(1));      // 20
console.log(list.indexOf(20)); // 1
console.log(list.toString());  // "10 -> 20 -> 30"

list.addAt(1, 15);
list.remove(20);

console.log(list.toArray());   // [10, 15, 30]