class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}


class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }

    InsertAtStarting(value)
    {
        const node=new Node(value)
        if (this.isEmpty()) {

            this.head=node
            this.tail=node
            
        }
        else
        {
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    InserAtEnding(value)
    { 
        const node=new Node(value)
        if (this.isEmpty()) {

            this.head=node
            this.tail=node
            this.size++
            
        }else{
       
           this.tail.next =node
           this.tail=this.tail.next 
           this.size++
           

            
        }
    }
    DeletionAtStart()
    {
        if (this.isEmpty()) {
        return null
        }
        else {
            this.head=this.head.next
            this.size--

        }

    }
    DeletionAtEnd()
    {
        let temp
        if (this.isEmpty()) {
            return null
            }
            else
            {
                let prev=this.head
                while (prev.value != this.tail.value) {
                    temp=prev
                    prev=prev.next
                }
                this.tail=temp
                this.tail.next=null
                this.size--
            }

    }

    print(){
        if (this.isEmpty()) {
            return -1
    }else
    {
        let prev=this.head
        let arr=[]
        while (prev) {
            arr.push(prev.value)
            prev=prev.next

        }

        return arr

    }
}
}

const list=new LinkedList()
list.InsertAtStarting(20)
list.InsertAtStarting(30)
console.log("Linked List Elements",list.print());
list.InserAtEnding(50)
list.InserAtEnding(60)
list.DeletionAtEnd()
console.log("Linked List Elements",list.print());