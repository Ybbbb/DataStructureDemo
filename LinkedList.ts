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
    // 链表类
    class LinkedList {
        head: Node;
        constructor() {
            // 链表头结点
            this.head = new Node('head');
        }
        getLength() {
            let length = 0;
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
                length++;
            }
            return length;
        }
        // 尾部插入
        append(newValue: any) {
            const newNode = new Node(newValue);
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        /*
        * 指定节点后插入
        * @param value 指定节点的值
        * @param newValue 要插入的值
        */
        insertAfterNode(value: any, newValue: any) {
            const newNode = new Node(newValue);
            let currentNode = this.getNodeForData(value);
            if (!currentNode) {
                throw new Error('The specified node does not exist!');
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        // 通过节点值查找节点
        getNodeForData(value: any) {
            let currentNode = this.head;
            if (!currentNode.next) {
                throw new Error('The current list is empty!');
            }
            while (currentNode.next) {
                currentNode = currentNode.next;
                if (currentNode.data === value) {
                    return currentNode;
                }
            }
            console.error('The node was not found!');
            return null;
        }
        // 获取元素位置
        getNodeIndex(value: any) {
            let currentNode = this.head;
            if (!currentNode.next) {
                throw new Error('The current list is empty!');
            }
            let index = 0;
            while (currentNode.next) {
                currentNode = currentNode.next;
                if (currentNode.data === value) {
                    return index;
                }
                index++;
            }
            return -1;
        }
        // 通过节点值删除节点
        removeNodeForData(value: any) {
            let currentNode = this.getNodeForData(value);
            if (!currentNode) {
                throw new Error('The node to be deleted does not exist!');
            }
            const prevNode = this.getPrevNode(value);
            if (prevNode) {
                prevNode.next = currentNode.next;
            }
        }
        // 通过节点值，获取上一个节点
        getPrevNode(value: any) {
            let currentNode = this.head;
            if (!currentNode.next) {
                throw new Error('The current list is empty!');
            }
            if (currentNode.data === value) {
                throw new Error('The current node is the head node!');
            }
            while (currentNode.next.data !== value) {
                currentNode = currentNode.next;
                if (!currentNode || !currentNode.next) {
                    console.error('The node was not found!');
                    return null;
                }
            }
            return currentNode;
        }
        print() {
            let currentNode = this.head;
            while (currentNode.next) {
                console.log(currentNode.next.data);
                currentNode = currentNode.next;
            }
        }
        // 颠倒
        reverse() {
            let currentNode = this.head;
            if (!currentNode.next) {
                throw new Error('The current list is empty!');
            }
            let isFirst = true;
            let lastNode: Node | null = null;
            let newNode: Node | null = null;
            while (currentNode.next) {
                currentNode = currentNode.next;
                newNode = Object.assign({}, currentNode);
                if (isFirst) {
                    // 如果是第一个节点，就把该节点的next设为null，变成终节点
                    newNode.next = null;
                    isFirst = false;
                } else {
                    // 把当前节点的next指向上一个节点，从而实现倒序
                    newNode.next = lastNode;
                }
                lastNode = Object.assign({}, newNode);
            }
            // 头结点的next指向原链表最后一个终结点
            this.head.next = lastNode;
        }
        // 正序排列
        sortByAsc() {
            let currentNode = this.head;
            if (!currentNode.next) {
                throw new Error('The current list is empty!');
            }
        }
    }
    const node = new LinkedList();
    node.append(4);
    node.append(3);
    node.append(6);
    node.append(7);
    node.append(9);
    node.append(2);
    node.reverse();
    node.print();
}