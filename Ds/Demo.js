class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
    }
}

class Bst{
    constructor()
    {
        this.root=null
    }
    Insert(val)
    {
        const node=new Node(val)
        if (!this.root) {
            this.root=node
        }
        else
        {
            this.Helper(this.root,node)
        }
    }
    Helper(root,node)
    {
        if (root.value<node.value) {
            if(!root.right)
            {
                root.right=node
            }
            else
            {
                this.Helper(root.right,node)
            }
        } else {
            if (!root.left) {
                root.left=node
            }
            else
            {
                this.Helper(root.left,node)
            }
            
        }
    }

  SortedArray(root)
  {
    
     if (root) {
        
        this.SortedArray(root.left)
        arr.push(root.value)
        this.SortedArray(root.right)
     }
   
  }
}

const bst=new Bst()

bst.Insert(2)
bst.Insert(1)
bst.Insert(3)
console.log(bst.SortedArray(bst.root))