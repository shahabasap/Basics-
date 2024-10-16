class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor()
    {
        this.head=null
        this.size=0
    }
    IsEmpty(){
      return this.size==0
    }

    getSize(){
        return this.size
    }
    prepand(value)
    {
        const node=new Node(value)
        if (this.IsEmpty()) {
            this.head=node
            
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++

    }

    RemoveFromFirst(){
        let prev
        if (this.IsEmpty()) {
            return -1
        } else {
            prev=this.head
            this.head=this.head.next
            this.size--
        }
        return prev.value
    }
    print(){
        let arr=[]
        let prev=this.head
        while (prev) {
            arr.push(prev.value)
            prev=prev.next
        }
        return arr
    }
}



class Stack{
    constructor()
    {
        this.stack=new LinkedList()
    }

    push(value){
        this.stack.prepand(value)
    }
    Pop(){
       return  this.stack.RemoveFromFirst()
    }
    printing(){
        return this.stack.print()
    }
    peek(){
        return this.stack.head.value
    }

}

let NewStack=new Stack()
NewStack.push(10)
NewStack.push(20)
NewStack.push(30)
NewStack.push(40)
NewStack.push(50)
console.log(NewStack.printing());
console.log("peek elem",NewStack.peek());
console.log(`Element is popped ${NewStack.Pop()}`);
console.log(NewStack.printing());
