class Node{
    constructor(value)
    {
        this.value=value
        this.next=null

    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    IsEmpty(){
        return this.size==0
    }


    prepend(value){
        let node=new Node(value)
        if (this.IsEmpty()) {
            this.head=node
            this.size++
        } else {
            node.next=this.head
            this.head=node
            this.size++
        }

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

DelteEnd()
{
    let temp
    if (this.IsEmpty()) {
        return -1
        
    }else if (this.size==1){
        let prev=this.head
        this.head=null
        this.size--
        return prev.value
    }
     else {
        let prev=this.head
        while (prev.next) {
             temp=prev
            prev=prev.next
    
            
        }
        
        temp.next=null
        this.size--
        return prev.value
    }
}

DeletionAtStart(){
    if (this.IsEmpty()) {
        return -1
        
    }else if(this.size==1)
    {
        let prev=this.head
        this.head=null
        return prev.value
    }
     else {
        let prev=this.head
        this.head=this.head.next
        return prev.value
    }
}
}
const list =new LinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
console.log(list.DeletionAtStart())
console.log(list.print())
