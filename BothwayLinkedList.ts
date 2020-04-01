
{
    // 节点类
    class Node {
        data: any;
        prior!: Node;
        next!: Node;
        constructor(value: any) {
            this.data = value;
        }
    }
    // 双向链表
    class BothwayLinkedList {
        // 头结点
        head: Node;
        constructor() {
            let node = new Node('head');
            node.prior = node;
            node.next = node;
            this.head = node;
        }
        // 尾部插入
        append(value: any) {
            let currentNode = this.head;
            const newNode = new Node(value);
            while (currentNode.next !== this.head) {
                currentNode = currentNode.next;
            }
            newNode.prior = currentNode;
            newNode.next = this.head;
            currentNode.next = newNode;
        }
        print() {
            let currentNode = this.head;
            while (currentNode.next !== this.head) {
                currentNode = currentNode.next;
                console.log(currentNode.data);
            }
        }
        // 指定节点后插入
        insertAfterNode(value: any, newValue: any) {
            let currentNode = this.head;
            const newNode = new Node(newValue);
            while (currentNode.next !== this.head) {
                currentNode = currentNode.next;
                if (currentNode.data === value) {
                    newNode.prior = currentNode;
                    newNode.next = currentNode.next;
                    currentNode.next = newNode;
                    return;
                }
            }
            throw new Error('The specified node does not exist!');
        }
        // 删除指定节点
        removeByData(value: any) {
            let currentNode = this.head;
            while (currentNode.next !== this.head) {
                currentNode = currentNode.next;
                console.log(currentNode);
                if (currentNode.data === value) {
                    let priorNode = currentNode.prior;
                    priorNode.next = currentNode.next;
                    return;
                }
            }
            throw new Error('The specified node does not exist!');
        }
        // 获取元素位置
        indexOf(value: any) {
            let index = 0;
            let currentNode = this.head;
            while (currentNode.next !== this.head) {
                currentNode = currentNode.next;
                if (currentNode.data === value) {
                    return index
                }
                index++;
            }
            return -1;
        }
    }
    const list = new BothwayLinkedList();
    list.append(1);
    list.append(3);
    list.append(2);
    // list.insertAfterNode(3, 4);
    list.removeByData(2);
    list.print();
    console.log('元素位置 :', list.indexOf(2));
}
