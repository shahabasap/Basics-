class Node
{
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
        if(!this.root)
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
       
        if(root.value<node.value)
        {
            if(!root.right)
            {
                root.right=node
            }
            else
            {
                this.InsertChild(root.right,node)
            }
        }else 
        {
            if(!root.left)
            {
                root.left=node
            }
            else
            {
                this.InsertChild(root.left,node)
                
            }
        }
    }
    
    InOrder(root)
    {
        if(root){
            this.InOrder(root.left)
        console.log(root.value)
        this.InOrder(root.right)
        }
        
        
    }
    
    Delete(val)
    {
        if(!this.root)
        {
            return root
        }
        this.root=this.Helper(this.root,val)
    }
    Helper(root,val)
    {
        if(!root)
        {
            return null
        }else
        {
            if(root.value<val)
            {
                 root.right=this.Helper(root.right,val)
            }else if(root.value>val)
            {
                root.left=this.Helper(root.left,val)
            }else{
                if(!root.left)
                {
                    return root.right
                }
                if(!root.right)
                {
                    return root.left
                }
                root.value=this.Min(root.right)
                root.right=this.Helper(root.right,root.value)
                
            }
            return root
        }
    }
    
    Min(root)
    {
        if(root.left)
        {
          return  Min(root.left)
          
        }
        else
        {
             return root.value 
        }
       
    }
}

const bst=new Bst()
bst.Insert(5)
bst.Insert(6)
bst.Insert(10)
bst.Insert(1)
bst.Insert(3)
bst.Insert(2)
bst.Delete(10)
bst.InOrder(bst.root)