{
    // 节点类
    class Node {
        data: any;
        next: Node | null;
        constructor(value: any) {
            this.data = value;
            this.next = null
        }
    }
    // 队列的链式实现
    class LinkedQueue {
        front: Node | null;
        rear: Node | null;
        length: number
        constructor() {
            // 队头
            this.front = null;
            // 队尾
            this.rear = null;
            this.length = 0;
        }
        push(value: any) {
            const node = new Node(value);
            if (this.length === 0) {
                this.front = node;
                this.rear = node;
                this.front.next = this.rear;
            } else {
                this.rear!.next = node;
                this.rear = node;
            }
            this.length++;
        }
        out() {
            if (this.length === 0) {
                throw new Error('The queue is empty!');
            }
            const data = this.front?.data;
            this.front = this.front!.next;
            this.length--;
            return data;
        }
        print() {
            let currentNode = this.front;
            if (currentNode) {
                while (currentNode) {
                    console.log(currentNode.data);
                    currentNode = currentNode.next;
                }
            }
        }
    }
    const queue = new LinkedQueue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.out();
    queue.print();
}