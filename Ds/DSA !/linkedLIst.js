class Node{
    constructor(value){
        this.value=value;
        this.next=null

    }

}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0

    }
    
    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size==0
    }
// addd element to  LinkedList O(1)
    prepend(value){
        const node =new Node(value)
        if (this.isEmpty()) {
            this.head=node
            
        } else {
            node.next=this.head
            this.head=node

            
        }
        this.size++
    }

    // insert an elemet to linked list-----------------------------------------
    insert(value,index)
    {
        if(index < 0 || index > this.size)
        {
         return
        }
        else if(index===0)
        {
            this.prepend(value)

        }
        else 
        {
            const node=new Node(value)
            let prev=this.head
            for (let i = 0; i < index-1; i++) {
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++

             
        }
       
    }
    // remove an element by index--------------------------------------------------------------
    remove(index)
    {
        let RemovedNode=0
        if (index<0 || index >= this.size) {
            return null
            
        } else if(index==0) {
            RemovedNode=this.head
            this.head=this.head.next
            
        }else{
            
            let prev=this.head
            for (let i = 0; i < index-1; i++) {
               prev=prev.next
                
            }
            RemovedNode=prev.next
            prev.next=RemovedNode.next

        }
        this.size--
        return RemovedNode.value
    }

    // rempve  an element by value-------------------------------
    removeByVal(value)
    {
        let RempvedNode
        if (this.isEmpty()) {

            return null
            
        }else if(this.head.value == value)
        {
            this.head=this.head.next
            this.size--
            
            return 0
        }
        else{
            let prev=this.head
            while (prev.next && prev.next.value != value) {
                prev=prev.next
                
            }
            if(prev.next)
            {
                RempvedNode=prev.next
                prev.next=RempvedNode.next
                this.size--
                return RempvedNode.value
            
            }

            
       return null
            
        }

        
        
    }
    
    // append linked list---------------------------O(n) complexity
append(value)
{
    const node=new Node(value)

    if (this.isEmpty()) {
        this.head=node
        
    } else {
        let prev=this.head
        while (prev.next) {
            prev=prev.next
            
        }
        prev.next=node
        
    }
    this.size++
}

// Search an element in linked list-------------------------------------
Search(value)
{
    if (this.isEmpty()) {
        return -1
        
    } else {
        let prev=this.head
        let i=0
    while (prev) {
        if (prev.value==value) {
            return i
        }
        i++
        prev=prev.next
        
    }

return -1
    }
    
}




// print the elements in the linked list--------------------------------------

    print(){
        if (this.isEmpty()) {

           console.log("list is empty");
        } else {
            // console.log("else case is working1")
               let current=this.head
               let listValues=''
               while (current) {
                listValues += `\n${current.value}`
                current = current.next

                
               }
              
             return listValues
              
            
        }
    }

   
}
const list=new LinkedList()
// console.log("Is the linked list is empty",list.isEmpty());
// console.log("Size of the linked list",list.getSize());


// console.log("List is empty",list.print())
// list.append(20)
// list.append(30)
// list.append(40)
// console.log("List as three items",list.print())


// console.log("Size of the linked list",list.getSize())

list.insert(23,0)
list.insert(67,1)
list.insert(21,2)
// console.log("element inserted",list.print())

// console.log("deleted valuejj",list.remove(3)); 
// console.log("First printing",list.print())
// console.log("deleted value",list.remove(2)); 
// console.log("Remp by value index=",list.removeByVal(23)); 
// console.log("Remp by value index=",list.removeByVal(67)); 
// console.log("element inserted at first  index",list.print())
// console.log("size of linked list",list.getSize());

console.log("linked list",list.print())
console.log("Searching  element 23 found at index",list.Search(23))
console.log("Searching  element 67 found at index",list.Search(21))


