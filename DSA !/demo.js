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
   IsEmpty()
   {
    return this.size===0
   }
   getSize()
   {
    return this.size
   }
   prepend(value){
    const node=new Node(value)
    if (this.IsEmpty()) {
        console.log("HI");
        this.head=node
       
    } else {
        console.log("HELL");
        node.next=this.head
        this.head=node

        
    }
    this.size++

   
   }

   Print(){
    let prev=this.head
    let arr=[]
    while (prev) {
        arr.push(prev.value)
        prev=prev.next
     
    }
    return arr
}


   isPalindrome()
   {
    console.log("hi paling");
    let slow=this.head
    let fast=this.head
    while(fast && fast.next)
    {
        slow=slow.next
        fast=fast.next.next
    }

    // Reverse the secod half--------------------------------
    let Newnod=null
    while (slow) {
        let Next=slow.next
        slow.next=Newnod
        Newnod=slow
        slow=Next  
    }

    // comparing both half--------------
    let firstHalf=this.head
    let SecondHalf=Newnod
    while (firstHalf) {
        if (firstHalf.value != SecondHalf.value) {
            return false
        }
        firstHalf=firstHalf
        
    }

    return true



   }
}

const list=new LinkedList()
list.prepend('M')
list.prepend('A')
list.prepend('M')

console.log("array",list.Print());
console.log("length",list.getSize());
console.log("ispalindrome",list.isPalindrome());