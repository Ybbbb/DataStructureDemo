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
        // 先序遍历
        preOrder(node: Node | null = this.root) {
            if (node != null) {
                console.log(node.data);
                this.preOrder(node.left);
                this.preOrder(node.right);
            }
        }
        // 中序遍历
        inOrder(node: Node | null = this.root) {
            if (node != null) {
                this.inOrder(node.left);
                console.log(node.data);
                this.inOrder(node.right);
            }
        }
        // 后序遍历
        postOrder(node: Node | null = this.root) {
            if (node != null) {
                this.postOrder(node.left);
                this.postOrder(node.right);
                console.log(node.data);
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
    console.log('先序遍历----------');
    test.preOrder();
    console.log('中序遍历----------');
    test.inOrder();
    console.log('后序遍历----------');
    test.postOrder();
}