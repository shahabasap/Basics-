class Node{
    constructor()
    {
        this.child={}
        this.end=false
    }
}

class Trie{
    constructor()
    {
        this.root=new Node()
    }
    insert(word)
    {
        let cur=this.root
        for (let i = 0; i < word.length; i++) {
    
            if (!(word[i] in cur.child)) {
                cur.child[word[i]]=new Node()
            }
            cur=cur.child[word[i]]
        }
        cur.end=true
    
    }

    Searching(word)
    {
        let cur=this.root
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in cur.child))
            {
                return false
            }
            cur=cur.child[word[i]]

        }
        return cur.end
    }

    Prefix(word)
    {
        let cur=this.root
        let words=[]
        for (let i = 0; i < word.length; i++) {
            
            if (!(word[i] in cur.child)) {
                return word
            }
            cur=cur.child[word[i]]
        }
        this.Helper(cur,word,words)
        return words
    }
    Helper(root,word,words)
    {
        if (root.end==true) {
            words.push(word)
        }
        for(let val in root.child)
        {
            this.Helper(root.child[val],word+val,words)
        }
        
    }

}

const trie=new Trie()
trie.insert("shahabas")
trie.insert("karun")
trie.insert("varun")
trie.insert("vasu")
// console.log(trie.Prefix("va"))
console.log(trie.Searching("shahabas"));


