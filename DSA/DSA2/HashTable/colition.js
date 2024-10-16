class HashTable{
    constructor(size){
        this.size = size
        this.table = new Array(size)
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt()
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        // this.table[index] = value

        const bucket = this.table[index]
        if(!bucket){
            this.table = [[key,value]]
        }else{
            const someKeyItems = bucket.find(item => item[0] === key)
            if(someKeyItems){
                someKeyItems[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index = this.hash(key)
        // return this.table[index]

        const bucket = this.table[index]
        if(bucket){
            const someKeyItems = bucket.find(item => item[0] === key)
            if(someKeyItems){
                return someKeyItems[1]
            }
        }
        return undefined
    }

    remove(key){
        
    }
}