
{
    class SequenceList {
        length: number;
        maxLength: number;
        data: any[];
        constructor(maxLength: number) {
            this.data = [];
            this.maxLength = maxLength;
            this.length = 0;
        }
        // 尾部插入
        push(element: any) {
            this.data[this.length] = element;
            this.length++;
        }
        // 在指定位置插入
        insertForIndex(index: number, element: any) {
            // 判断是否超过最大数量
            if (this.length >= this.maxLength) {
                throw new Error('Insert the failure, cannot exceed the max length!');
            }
            // 判断是否指定位置是否合法
            if (typeof (index) !== 'number' || index < 0 || index > this.maxLength - 1) {
                throw new Error('Insert the failure, index error! ');
            }
            // 从index开始，后面的元素后移一位
            for (let i = this.length; i > index; i--) {
                this.data[i] = this.data[i - 1];
            }
            // 赋值
            this.data[index] = element;
            this.length++;
        }
        // 删除指定元素
        removeForElement(element: any) {
            const index = this.getElementIndex(element);
            if (index < 0) {
                console.error('The element was not found');
                return;
            }
            for (let i = index; i < this.length - 1; i++) {
                this.data[i] = this.data[i + 1];
            }
            this.data.length = this.length - 1;
            this.length--;
        }
        // 获取元素所在位置
        getElementIndex(element: any) {
            let index = -1;
            for (let i = 0; i < this.length; i++) {
                if (element === this.data[i]) {
                    index = i;
                    break;
                }
            }
            return index;
        }
        print() {
            for (let i = 0; i < this.length; i++) {
                console.log(this.data[i]);
            }
        }
    }
    const a = new SequenceList(5);
    a.push(1);
    a.push(2);
    a.push(3);
    a.push(4);
    a.push(5);
    console.log('指定元素位置 :', a.getElementIndex(3));
    a.removeForElement(2);
    console.log('当前长度 :', a.length);
    a.insertForIndex(4, 6)
    a.print();
    console.log('当前长度 :', a.length);
}