
{
    // 节点类
    class Node {
        data: any;
        left: Node | null = null;
        right: Node | null = null;
        constructor(value: any) {
            this.data = value;
        }
    }
    // 二叉查找、排序树
    class BinaryTree {
        root: Node | null = null;
        // 插入
        insert(value: any, node: Node | null = this.root) {
            if (!node) {
                this.root = new Node(value);
            } else {
                if (node.data === value) {
                    console.log(value + '该值已存在！');
                    return;
                }
                if (node.data > value) {
                    if (!node.left) {
                        node.left = new Node(value);
                    } else {
                        this.insert(value, node.left)
                    }
                } else {
                    if (!node.right) {
                        node.right = new Node(value);
                    } else {
                        this.insert(value, node.right)
                    }
                }
            }
        }
        // 递归先序遍历
        preOrderRecursion(node: Node | null = this.root) {
            if (node != null) {
                console.log(node.data);
                this.preOrderRecursion(node.left);
                this.preOrderRecursion(node.right);
            }
        }
        // 递归中序遍历
        inOrderRecursion(node: Node | null = this.root) {
            if (node != null) {
                this.inOrderRecursion(node.left);
                console.log(node.data);
                this.inOrderRecursion(node.right);
            }
        }
        // 递归后序遍历
        postOrderRecursion(node: Node | null = this.root) {
            if (node != null) {
                this.postOrderRecursion(node.left);
                this.postOrderRecursion(node.right);
                console.log(node.data);
            }
        }
        // 利用队列中序遍历
        inOrderStack() {
            let node = this.root;
            let stack = [];
            while (node || stack.length > 0) {
                while (node) {
                    stack.push(node);
                    node = node.left;
                }
                if (stack.length > 0) {
                    node = stack.pop()!;
                    console.log(node.data);
                    node = node.right;
                }
            }
        }

    }

    var test = new BinaryTree();
    test.insert(10);
    test.insert(6);
    test.insert(16);
    test.insert(5);
    test.insert(7);
    test.insert(12);
    test.insert(18);
    test.insert(4);
    test.insert(8);
    test.insert(11);
    test.insert(13);
    test.insert(17);
    test.insert(19);
    console.log('递归先序遍历----------');
    test.preOrderRecursion();
    console.log('递归中序遍历----------');
    test.inOrderRecursion();
    console.log('递归后序遍历----------');
    test.postOrderRecursion();
    console.log('利用栈中序遍历---------');
    test.inOrderStack();
}