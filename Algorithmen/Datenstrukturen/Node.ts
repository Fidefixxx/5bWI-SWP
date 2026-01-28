export class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }

    setNext(node: Node<T> | null): void {
        this.next = node;
    }

    getNext(): Node<T> | null {
        return this.next;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }

    hasNext(): boolean {
        return this.next !== null;
    }

}