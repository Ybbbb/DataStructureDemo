
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
        // 插入，关键点在于找到要插入的节点位置
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
        // 利用栈中序遍历，其实中序遍历后即是排序过的
        inOrderStack() {
            let node = this.root;
            let stack: Array<Node> = [];
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
        // 利用栈先序遍历
        preOrderStack() {
            let node = this.root;
            let stack: Array<Node> = [];
            while (node || stack.length > 0) {
                while (node) {
                    stack.push(node);
                    console.log(node.data);
                    node = node.left;
                }
                if (stack.length > 0) {
                    node = stack.pop()!;
                    node = node.right;
                }
            }
        }
        // 利用栈后序遍历
        postOrderStack() {
            let node = this.root;
            let stackA: Array<Node> = [];
            let stackB: Array<Node> = [];
            if (node) {
                stackA.push(node);
                while (stackA.length > 0) {
                    node = stackA.pop()!;
                    stackB.push(node);
                    if (node.left) {
                        stackA.push(node.left);
                    }
                    if (node.right) {
                        stackA.push(node.right);
                    }
                }
                while (stackB.length > 0) {
                    console.log(stackB.pop()?.data);
                }
            } else {
                console.log('树为空！');
            }
        }
        // 层序遍历
        levelOrder() {
            let node = this.root;
            let queue: Array<Node> = [];
            if (node) {
                queue.push(node);
                while (queue.length > 0) {
                    node = queue.shift()!;
                    console.log(node.data);
                    if (node.left) {
                        queue.push(node.left);
                    }
                    if (node.right) {
                        queue.push(node.right);
                    }
                }
            } else {
                console.log('树为空！');
            }
        }
        /**
         * 查询节点
         * @param value 要查找的值
         */
        findNode(value: any) {
            let node = this.root;
            if (!node) {
                console.log('空二叉树！');
                return;
            }
            while (node) {
                if (value < node.data) {
                    node = node.left;
                } else if (value > node.data) {
                    node = node.right;
                } else {
                    return node;
                }
            }
            return null;
        }
        // 获取二叉树节点最大值
        findMax() {
            let node = this.root;
            if (!node) {
                console.log('空二叉树！');
                return;
            }
            while (node) {
                if (!node.right) {
                    return node.data;
                } else {
                    node = node.right;
                }
            }
        }
        // 获取二叉树节点最小值
        findMin() {
            let node = this.root;
            if (!node) {
                console.log('空二叉树！');
                return;
            }
            while (node) {
                if (!node.left) {
                    return node.data;
                } else {
                    node = node.left;
                }
            }
        }
        // 删除节点
        delete() {

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
    console.log(test.findMax());
    console.log(test.findMin());
    // console.log(test.findNode(11));
    // console.log(test.findNode(20));
    // console.log('递归先序遍历----------');
    // test.preOrderRecursion();
    // console.log('递归中序遍历----------');
    // test.inOrderRecursion();
    // console.log('递归后序遍历----------');
    // test.postOrderRecursion();
    // console.log('利用栈先序遍历---------');
    // test.preOrderStack();
    // console.log('利用栈中序遍历---------');
    // test.inOrderStack();
    // console.log('利用栈后序遍历---------');
    // test.postOrderStack();
    // console.log('层序遍历---------');
    // test.levelOrder();

}