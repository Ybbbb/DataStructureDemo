{
    class Stack {
        data: Array<any>;
        top: number; // 栈顶
        size: number;
        constructor(maxLength: number) {
            this.data = new Array(maxLength);
            this.top = -1;
            this.size = maxLength;
        }
        push(value: any) {
            if (this.top === this.size - 1) {
                throw new Error('Overflow!');
            }
            this.top++;
            this.data[this.top] = value;
        }
        out() {
            if (this.top === -1) {
                throw new Error('Empty stack!');
            }
            const element = this.data[this.top];
            this.top--;
            this.data.length--;
            return element;
        }
        getLength() {
            return this.top + 1;
        }
        print() {
            for (const iterator of this.data) {
                console.log(iterator);
            }
        }
    }
    const stack = new Stack(5);
    stack.push(1);
    stack.push(3);
    stack.push(2);
    stack.push(4);
    stack.push(5);
    console.log('移出栈顶元素 :', stack.out());
    console.log('栈内元素数量：', stack.getLength());
    stack.print();

}