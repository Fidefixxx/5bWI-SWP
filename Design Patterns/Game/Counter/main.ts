import { counter } from "./counter";
const c1: counter = counter.createInstance();
const c2: counter = counter.createInstance();

c1.increaseCount();
c1.increaseCount();
c2.increaseCount();

console.log("C1 - Count: ", c1.getCount());
console.log("C2 - Count: ", c2.getCount());
