{
    /**
     * 普通队列
     */
    class Queue {
        data: any[];
        size: number;
        constructor(maxlength: number) {
            this.data = [];
            this.size = maxlength;
        }
        /**入队 */
        enQueue(value: any) {
            if (this.getLength() < this.size) {
                this.data.push(value);
                return;
            }
            console.error('The queue is full！');
        }
        /**出队 */
        deQueue(): any {
            if (!this.isEmpty()) {
                return this.data.shift();
            }
        }
        /**队列长度 */
        getLength(): number {
            return this.data.length;
        }
        isEmpty() {
            return this.data.length === 0;
        }
        /**清空队列 */
        clear() {
            this.data.length = 0;
        }
        print() {
            for (const iterator of this.data) {
                console.log(iterator)
            }
        }
    }
    /**
     * 双向对列
     */
    class Dique {
        data: any[];
        size: number;
        constructor(maxlength: number) {
            this.data = [];
            this.size = maxlength;
        }
        /**
         * 头部入队
         * @param value 要插入的值
         */
        frontEnQueue(value: any) {
            if (this.getLength() < this.size) {
                this.data.unshift(value);
                return;
            }
            console.error('The queue is full！');
        }
        /**
         * 尾部入队
         * @param value 要插入的值
         */
        rearEnQueue(value: any) {
            if (this.getLength() < this.size) {
                this.data.push(value);
                return;
            }
            console.error('The queue is full！');
        }
        /**
         * 头部出队
         */
        frontDeQueue(): any {
            if (!this.isEmpty()) {
                return this.data.shift();
            }
        }
        /**
         * 尾部出队
         */
        rearDeQueue(): any {
            if (!this.isEmpty()) {
                return this.data.pop();
            }
        }
        getLength(): number {
            return this.data.length;
        }
        isEmpty() {
            return this.data.length === 0;
        }
        clear() {
            this.data.length = 0;
        }
        print() {
            for (const iterator of this.data) {
                console.log(iterator)
            }
        }
    }
    /**
     * 循环队列
     */
    class CycleQueue {
        /**队列头 */
        front: number = 0;
        /**队列尾 */
        rear: number = 0;
        /**队列大小 */
        length: number;
        /**当前入队数量 */
        count: number = 0;
        data: any[] = [];
        constructor(maxLength: number) {
            this.length = maxLength;
        }
        // 入队
        enQueue(value: any) {
            if (this.count === this.length) {
                throw new Error('The queue is full!');
            }
            this.data[this.rear] = value;
            this.rear = (this.rear + 1) % this.length;
            this.count++;
        }
        // 出队
        deQueue() {
            if (this.count === 0) {
                throw new Error('The queue is empty!');
            }
            this.front = (this.front + 1) % this.length;
            this.count--;
        }
    }

}