{
    /**
     * 最小堆
     */
    class MninHeap {
        // 最大长度
        private maxSize: number;
        size: number = 0;
        private data: Array<any> = [];

        constructor(length: number) {
            this.maxSize = length;
        }
        insert(value: any) {
            if (this.size == this.maxSize) {
                console.log('堆已满');
                return;
            }
            let i = ++this.size;
            // 如果要插入的值小于父节点，就持续过滤
            for (; this.data[Math.floor(i / 2)] > value && i > 1; i = Math.floor(i / 2)) {
                // 过滤,直到找个合适的插入位置i
                this.data[i] = this.data[Math.floor(i / 2)];
            }
            this.data[i] = value;
        }
        /**
         * 最小堆删除
         */
        delete(): any {
            // 父节点，也是堆尾部的值要插入的地方
            let parent: number,
                // 子节点
                child: number;
            if (this.size <= 0) {
                console.log('堆为空');
                return;
            }
            const minItem = this.data[1];
            // 把最小堆中的最后一个元素从根节点开始从上到下过滤节点
            const temp = this.data[this.size--];
            // 如果根节点的左儿子位置小于等于最大节点数，则说明左儿子下还有节点
            for (parent = 1; parent * 2 <= this.size; parent = child) {
                // 完全二叉树,左儿子为当前层级乘以2，右儿子为当前层级乘以2加1
                child = parent * 2;
                // 如果左儿子的位置不等于最大节点数，则说明还有右儿子。然后从左右儿子中选最小的
                if (child != this.size && this.data[child] > this.data[child + 1]) {
                    child++;
                }
                // 如果比最小的还小，代表所处的位置合适，跳出循环
                if (temp <= this.data[child]) {
                    break;
                } else {
                    // 否则移动temp到下一层
                    this.data[parent] = this.data[child];
                }
            }
            this.data[parent] = temp;
            return minItem;
        }
        print() {
            for (let index = 1; index <= this.size; index++) {
                console.log(this.data[index]);
            }
        }
    }
    const heap = new MninHeap(7);
    heap.insert(5);
    heap.insert(6);
    heap.insert(7);
    heap.insert(3);
    heap.insert(2);
    heap.insert(9);
    heap.print();
    console.log('-------删除');
    console.log(heap.delete());
    console.log('删除之后------')
    heap.print();
}