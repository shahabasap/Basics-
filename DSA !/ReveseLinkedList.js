class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }

    prepend(value)
    {
        const node=new Node(value)
        if(this.isEmpty())
        {
         
            this.head=node
            
        }
        else
        {
           node.next=this.head
           this.head=node

        }
        this.size++
     

    }
    insert(value,index){
        if (index>this.size || index<0) {
            return false
            
        }else if(index==0)
        {
            node.next=this.head
            this.head=node
        }
        else{
            const node=new Node(value)
           let prev=this.head
            for (let i = 0; i < index-1; i++) {
                
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            
        }
        this.size++

    }

    print()
    {
        if (this.isEmpty()) {
            console.log("linked list is empty");
            
        }
        else{
            let prev=this.head
            let arr=[]

            while (prev) {
               arr.push(prev.value)
                prev=prev.next
                
            }
            console.log("Linked list elements are \n",arr)
        }

    }

    // Reverse of linked list-------------------------------
    reverse()
    {
        let prev=null,curr=this.head
        
        while(curr){

            let temp=curr.next
            curr.next=prev
            prev=curr
            curr=temp
        }
        this.head = prev
       

    }
// checking the linked list is palindrome or not

    isPalindrome() {
        if (!this.head || !this.head.next) {
            return true;
        }
    
        // Step 1:middle
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse second half-------------
        let NewHead=null
        while (slow) {
            let Next=slow.next
            slow.next=NewHead
            NewHead=slow
            slow=Next
        
        }

        // campring----------------------
        let firsthalf=this.head
        let secondHalf=NewHead
        while (secondHalf.next) {
            if(firsthalf.value != secondHalf.value)
            {
                return false
            }
            firsthalf=firsthalf.next
            secondHalf=secondHalf.next
        }
    
        
      
    
        return true; 
    }
}


const list =new LinkedList()


list.prepend('m')
list.prepend('a')
list.prepend('a')
list.prepend('m')
list.prepend('m')

list.print()
// console.log("linked list current size",list.getSize())
// list.print()

// list.reverse()
// console.log("Reverse of  the linked list ");
// list.print()


// list.insert(200,1)
// list.insert(48,4)
// list.print()
// console.log("size of the linked list",list.getSize());
console.log("the current linked list is palindrome or not",list.isPalindrome())

