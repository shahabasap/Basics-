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
        let Bucket=this.table[index]
        if (!Bucket) {
         Bucket=[[key,value]]
         this.table[index]=Bucket
        } else {
            let SomeKeyItem=Bucket.find(item=>item[0]==key)
            if (SomeKeyItem) {
                SomeKeyItem[1]=value
            }else
            {
                Bucket.push([key,value])

            }
            
            
        }
        
    }
    get(key){
        let index=this.hash(key)
        let Bucket=this.table[index]
        if (!Bucket) {
           return -1
            
        } else {
            let SomeKeyItem=Bucket.find(item=>item[0]==key)
            return SomeKeyItem[1]
            
        }
    }
    rem(key)
    {
        let index=this.hash(key)
        let Bucket=this.table[index]
        if (!Bucket) {
            return -1
        } else {
            let SomeKeyItem=Bucket.find(item=>item[0]==key)
            Bucket.splice(Bucket.indexOf(SomeKeyItem),1)
            
        }
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
Hash.set("anme","kalll")
Hash.set("nam","shahabas")

Hash.rem("nam")

// console.log('Printing',Hash.get("ojo"))

Hash.print()