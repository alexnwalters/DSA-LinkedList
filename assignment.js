class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null)
        }
    }

    insertBefore(item, key) {
        if(!this.head) {
            console.log('Key not found')
            return;
        }
        if (this.head.value === key) {
            this.insertFirst(item);
        }
        else {
            let currNode = this.head
            let previousNode = this.head
            while((currNode !== null) && (currNode.value !== key)) {
                previousNode = currNode;
                currNode = currNode.next;
            }
            if (currNode === null) {
                console.log('Key not found')
                return;
            }
            previousNode.next = new _Node(item, currNode)
        }
    }

    insertAfter(item, key) {
        if(!this.head) {
            console.log('Key not found')
            return;
        }
        else {
            let currNode = this.head
            while((currNode !== null) && (currNode.value !== key)) {
                currNode = currNode.next;
            }
            if (currNode === null) {
                console.log('Key not found')
                return;
            }
            currNode.next = new _Node(item, currNode.next)
        }
    }

    insertAt(item, position) {
        if(!this.head) {
            this.insertFirst(item)
        }
        else {
            let currNode = this.head
            let positionCount = 1
            while((currNode !== null) && (positionCount !== position - 1)) {
                currNode = currNode.next;
                positionCount++
            }
            if (currNode === null) {
                return this.insertFirst()
            }
            currNode.next = new _Node(item, currNode.next)
        }
    }
    

    remove(item) {
        if(!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;    
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    find(item) {
        let currNode = this.head;

        if (!this.head) {
            return null;
        }

        while(currNode !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }

        return currNode;
    }

    reverseList() {
        if(!this.head) {
            return null;
        }
        else {
            let currNode = this.head
            let previousNode = null
            while(currNode.next !== null) {
                let nextNode = currNode.next
                currNode.next = previousNode
                previousNode = currNode;
                currNode = nextNode;
            }
            this.head = previousNode
        }
    }
}

function main() {
    const SLL = new LinkedList()
    
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertFirst('Tauhida')
    SLL.remove('Husker')
    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 3)
    SLL.remove('Tauhida')
    
    console.log(SLL)

    function display(list) {
        let node = list.head;
        while(node !== null) {
            console.log(node.value)
            node = node.next
        }
    }

    display(SLL)

    function size(list) {
        let size = 0
        let node = list.head;
        while(node !== null) {
            size++
            node = node.next
        }

        console.log(size)
    }

    size(SLL)

    function isEmpty(list) {
       console.log( !list.head ? true : false )
    }

    isEmpty(SLL)

    function findPrevious(list, key) {
        let node = list.head
        let prevNode = list.head
        while((node !== null) && (node.value !== key)) {
            prevNode = node
            node = node.next
        }
        console.log(prevNode.value)
    }
    
    // findPrevious(SLL, 'Helo')

    function findLast(list) {
        let node = list.head
        while(node.next !== null) {
            node = node.next
        }
        console.log(node.value)
    }
    
    findLast(SLL)

    SLL.reverseList()

    function thirdFromEnd(list) {
        let size = 0
        let node = list.head;
        while(node !== null) {
            size++
            node = node.next
        }
        let thirdEndNode = list.head
        if(size >= 3) {
            let count = 1
            while((thirdEndNode !== null) && (count <= size - 3)) {
                thirdEndNode = thirdEndNode.next
                count++
            }
            console.log(thirdEndNode.value)
        }
        else {
            console.log('List is less than 3')
        }
    }

    thirdFromEnd(SLL)

    function findMiddle(list) {
        let fast = list.head
        let slow = list.head
        //fast.next stops on odd fast.next.next stops on even
        while((fast.next !== null) && (fast.next.next !== null)) {
            fast = fast.next.next
            //at midpoint when fast reaches end
            slow = slow.next
        }

        console.log(slow.value)
    }

    findMiddle(SLL)

    function checkCycle(list) {
        let fast = list.head
        let slow = list.head
        while(fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
            //if they equal fast looped back around an caught slow
            if (fast === slow) {
                return console.log(true)
            }
        }

        return console.log(false)
    }

    checkCycle(SLL)
}
main();


//Mystery Program, it checks for and skips over duplicate values
//O(n*2) nested while loops

