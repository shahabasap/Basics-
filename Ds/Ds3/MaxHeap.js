class Heap{
    constructor(){
        this.table=[]
    }
    
    ParetNode(i){
        return Math.floor((i-1)/2)
    }
    leftNode(i){
        return 2*i+1
    }
    rightNode(i){
        return 2*i+2
    }
    swap(i1,i2)
    {
        
        [this.table[i1],this.table[i2]]=[this.table[i2],this.table[i1]]
    }
    Insertion(value){
        this.table[this.table.length]=value
        this.heapUp()
    }
    heapUp()
    { 
        let cur=this.table.length-1
      
        while(this.table[cur]>this.table[this.ParetNode(cur)])
        {
           
            this.swap(cur,this.ParetNode(cur))
            cur=this.ParetNode(cur)
        }
    }

    poll()
    {
        let val=this.table[0]
        this.table[0]=this.table[this.table.length-1]
        this.table.length--
        this.heapDown()
        return val
    }
    heapDown()
    {
        let cur=0
        let BiggestIndex=cur
        while (this.table[cur]<this.table[this.leftNode(cur)]) {
            BiggestIndex=this.leftNode(cur)
            if (this.rightNode(cur)<this.table.length &&this.table[this.rightNode(cur)]>this.table[this.leftNode(cur)]) {
                BiggestIndex=this.rightNode(cur)
            }


            if (this.table[cur]<this.table[BiggestIndex]) {
                this.swap(cur,BiggestIndex)
            }
           cur=BiggestIndex
        }
    }
}

const heap=new Heap()
heap.Insertion(1)
heap.Insertion(10)
heap.Insertion(8)
heap.Insertion(9)
heap.Insertion(6)
console.log(heap.table)
heap.poll()
// heap.poll()
console.log(heap.table)