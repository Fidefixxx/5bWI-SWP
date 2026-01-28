import { Node } from "../Node.ts";

export class StackList<T> {
    private top: Node<T> | null = null;
    private size: number = 0;

    push(value: T): void {
        const newNode = new Node<T>(value);
        newNode.setNext(this.top);
        this.top = newNode;
        this.size++;
    }

    pop(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        
        const value = this.top!.getValue();
        this.top = this.top!.getNext();
        this.size--;
        return value;
    }

    peek(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        return this.top!.getValue();
    }

    isEmpty(): boolean {
        return this.top === null;
    }

    getSize(): number {
        return this.size;
    }

    clear(): void {
        this.top = null;
        this.size = 0;
    }

}