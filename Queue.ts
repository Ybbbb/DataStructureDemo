{
    class Queue {
        data: any[];
        size: number;
        constructor(maxlength: number) {
            this.data = [];
            this.size = maxlength;
        }
        push(value: any) {
            if (this.getLength() < this.size) {
                this.data.push(value);
                return;
            }
            console.error('The queue is full！');
        }
        out(): any {
            if (!this.isEmpty()) {
                return this.data.shift();
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
    // 双向队列
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
        headPush(value: any) {
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
        tailPush(value: any) {
            if (this.getLength() < this.size) {
                this.data.push(value);
                return;
            }
            console.error('The queue is full！');
        }
        /**
         * 头部出队
         */
        headOut(): any {
            if (!this.isEmpty()) {
                return this.data.shift();
            }
        }
        /**
         * 尾部出队
         */
        tailOut(): any {
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
    const dique = new Dique(5);
    dique.tailPush(1);
    dique.headPush(2);
    dique.tailPush(3);
    dique.headPush(4);
    dique.print();
    console.log('--------------');
    console.log(dique.headOut());
    console.log(dique.tailOut());
}