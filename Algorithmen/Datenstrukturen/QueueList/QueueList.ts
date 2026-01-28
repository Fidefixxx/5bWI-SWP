import { Node } from "../Node.ts";

export class QueueList<T> {
    private front: Node<T> | null = null;
    private rear: Node<T> | null = null;
    private size: number = 0;

    enqueue(value: T): void {
        const newNode = new Node<T>(value);
        
        if (this.rear === null) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.setNext(newNode);
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        
        const value = this.front!.getValue();
        this.front = this.front!.getNext();
        
        if (this.front === null) {
            this.rear = null;
        }
        
        this.size--;
        return value;
    }

    peek(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        return this.front!.getValue();
    }

    isEmpty(): boolean {
        return this.front === null;
    }

    getSize(): number {
        return this.size;
    }

    clear(): void {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    toArray(): T[] {
        const result: T[] = [];
        let current = this.front;
        while (current !== null) {
            result.push(current.getValue());
            current = current.getNext();
        }
        return result;
    }
}