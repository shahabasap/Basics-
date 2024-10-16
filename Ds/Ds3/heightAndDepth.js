class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor()
    {
        this.root=null
    }
    
    isEmpty()
    {
        return this.root ==null
    }
    
    Insert(value)
    {
        const node=new Node(value)
        
        if(this.isEmpty())
        {
            
            this.root=node
        }
        else
        {
            this.InsertChild(this.root,node)
        }
    }
    InsertChild(root,node)
    {
        if(root.value>node.value)
        {
            if(root.left==null)
            {
                root.left=node
            }
            else
            {
                 this.InsertChild(root.left,node)
            }
        }
        else
        {
            if(root.right==null)
            {
                root.right=node
            }
            else
            {
                 this.InsertChild(root.right,node)
            }
        }
    }


HeightOfTree(root)
{
    if (!root) {
        return -1
    }
    let right=this.HeightOfTree(root.left)
    let left=this.HeightOfTree(root.right)
    return Math.max(right,left)+1
}

    
}

const bst=new  BinarySearchTree()
bst.Insert(5)
bst.Insert(3)
bst.Insert(1)
bst.Insert(6)
bst.Insert(4)
bst.Insert(2)
 console.log(bst.HeightOfTree(bst.root)) 