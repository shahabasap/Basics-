class Queue{
    constructor(){
        this.Item=[]
    }
    IsEmpty(){
        return this.Item.length==0
    }
    getSize(){
        return this.Item.length
    }
    deque(){
        if (this.IsEmpty()) {
            return -1
        } else {
            this.Item.shift()
            
        }

    }
    enque(value){
        this.Item.push(value)
    }
    peek(){
      return this.Item[0]
    }
    print(){
        return this.Item
    }
}

const queue=new Queue()

queue.enque(10)
queue.enque(20)
queue.enque(30)
queue.enque(40)
queue.enque(50)

console.log(queue.print())
queue.deque()
queue.deque()
queue.deque()

console.log(queue.print())
