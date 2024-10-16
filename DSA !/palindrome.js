
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
        return this.size===0
    }
    getSize()
    {
        return this.size
    }
    prepand(value)
    {
        const node=new Node(value)
        if (this.isEmpty()) {
            this.head=node
            this.size++
        }
        else{

            node.next=this.head
            this.head=node
            this.size++

        }

    }
    append(value){
        const node=new Node(value)
        if (this.isEmpty()) {
            this.head=node
            this.size++
        }
        else{
            let prev=this.head
            while (prev.next) {
                prev=prev.next
            }
            
            prev.next =node
            this.size++

        }

    }
    print()
    {
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
        let slow=this.head
        let fast=this.head
        while (fast && fast.next) {
            slow=slow.next
            fast=fast.next.next
        }

    //    Reverse of the linked list---------------------
let prev=null
    while (slow) {
       let Next=slow.next
        slow.next=prev
        prev=slow
        slow=Next
        
    }
    console.log(prev);
    
    
    // Comparing --------------------------

    let firstHalf=this.head
    let secondHalf=prev
    while (secondHalf.next) {
     
        if (secondHalf.value != firstHalf.value) {

            return false
        }
        secondHalf=secondHalf.next
        firstHalf=firstHalf.next
    }

   return true

    }

    // Middle of the Linked list--------------------------
    Middle()
    {
        if (this.isEmpty()) {

            return null
            
        } else {
            let prev=this.head
        for (let i = 0; i < Math.floor(this.size/2); i++) {
         
            prev=prev.next
        }
        console.log("floor" ,Math.floor(this.size/2));
        return prev.value
            
        }
        
    }
}
const list=new LinkedList()
list.append('M')
list.append('5')
list.append('6')
list.append('5')
list.append('M')


console.log("Linked List",list.print());
// console.log("size of the Linked List",list.getSize());
console.log("Palindrome",list.isPalindrome());
console.log("Canter value of the linke list is",list.Middle());

