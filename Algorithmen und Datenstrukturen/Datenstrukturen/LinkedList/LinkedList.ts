import { Node } from "../Node.ts";

export class LinkedList<T> {
    private head: Node<T> | null = null;
    private size: number = 0;

    add(value: T): void {
        const newNode = new Node<T>(value);
        
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.hasNext()) {
                current = current.getNext()!;
            }
            current.setNext(newNode);
        }
        this.size++;
    }

    addAt(index: number, value: T): void {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }

        const newNode = new Node<T>(value);

        if (index === 0) {
            newNode.setNext(this.head);
            this.head = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current!.getNext();
            }
            newNode.setNext(current!.getNext());
            current!.setNext(newNode);
        }
        this.size++;
    }

    get(index: number): T | null {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.getNext();
        }
        return current!.getValue();
    }

    remove(value: T): boolean {
        if (this.head === null) {
            return false;
        }

        if (this.head.getValue() === value) {
            this.head = this.head.getNext();
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.hasNext()) {
            const next = current.getNext()!;
            if (next.getValue() === value) {
                current.setNext(next.getNext());
                this.size--;
                return true;
            }
            current = next;
        }
        return false;
    }

    removeAt(index: number): T | null {
        if (index < 0 || index >= this.size) {
            return null;
        }

        if (index === 0) {
            const value = this.head!.getValue();
            this.head = this.head!.getNext();
            this.size--;
            return value;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current!.getNext();
        }
        const nodeToRemove = current!.getNext()!;
        const value = nodeToRemove.getValue();
        current!.setNext(nodeToRemove.getNext());
        this.size--;
        return value;
    }

    indexOf(value: T): number {
        let current = this.head;
        let index = 0;
        
        while (current !== null) {
            if (current.getValue() === value) {
                return index;
            }
            current = current.getNext();
            index++;
        }
        return -1;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    getSize(): number {
        return this.size;
    }

    clear(): void {
        this.head = null;
        this.size = 0;
    }

    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.getValue());
            current = current.getNext();
        }
        return result;
    }

    toString(): string {
        return this.toArray().join(" -> ");
    }
}
