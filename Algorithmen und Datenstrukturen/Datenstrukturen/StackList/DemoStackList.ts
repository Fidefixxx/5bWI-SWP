import { StackList } from "./StackList";

const stack = new StackList<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.pop());  // 20
console.log(stack.isEmpty()); // false
console.log(stack.getSize()); // 1