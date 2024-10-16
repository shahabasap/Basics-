class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0
        for (let i = 0; i < key.length; i++) {
           total +=key.charCodeAt(i)
            
        }
        return total % this.size
    }
    set(key,value){
        let index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        let index=this.hash(key)
        return this.table[index]
    }
    rem(key)
    {
        let index=this.hash(key)
        this.table[index]=undefined
    }
    print()
    {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {

                console.log("index",i,"value",this.table[i])
                
            }
            
        }
    }
}

const Hash=new HashTable(50)
Hash.set("name","Kutan")
Hash.set("veed","palakkad")
Hash.set("grmama","kariyathani")
Hash.set("therfa","kala")

console.log("hi iam here",Hash.get("name"))
Hash.rem("veed")
Hash.print()