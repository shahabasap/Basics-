class Stack{
    constructor()
    {
        this.stack=[]
    }

    IsEmpty(){
        return this.stack.length==0
    }

    getSize(){
        return this.stack.length
    }

    pop(){
        if (this.IsEmpty()){
            return "Stack is under flow"
        }
        else{
            return this.stack.pop()
        }
            
        
    }
    push(value)
    {
       this.stack.push(value)


    }

    peek(){
        return this.stack[this.stack.length-1]
    }

    print(){
        return this.stack 
    }

}

const stack=new Stack()


stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log(stack.print())
console.log(stack.peek())
console.log("Length of the stack",stack.getSize())
console.log(`Deleted Element is ${stack.pop()}`)
console.log(stack.print())