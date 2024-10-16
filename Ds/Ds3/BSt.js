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
    
   Search(root, value) {
    if (!root) {
        return false;
    } else if (root.value === value) {
        return true;
    } else if (root.value < value) {
        return this.Search(root.right, value);
    } else {
        return this.Search(root.left, value);
    }
}


preOrder(root)
{
    if(root)
    {
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
    
}
InOrder(root)
{
    if(root)
    {
      
        this.InOrder(root.left)
         console.log(root.value)
        this.InOrder(root.right)
    }
    
}

PostOrder(root)
{
    if(root)
    {
        this.PostOrder(root.left)
        this.PostOrder(root.right)
        console.log(root.value)
    }
}


LeveOrder()
{
    let queue=[]
    queue.push(this.root)
    while(queue.length)
    {
        let curr=queue.shift()
        console.log(curr.value)
        if(curr.left)
        {
            queue.push(curr.left)
        }
        if(curr.right)
        {
            queue.push(curr.right)
        }
    }
}


Delete(value){
    this.root=this.DeletNode(this.root,value)
}
DeletNode(root,value)
{
    if(!root)
    {
        return root
    }
    else
    {
        if(root.value<value)
        {
            root.right=this.DeletNode(root.right,value)
        }else if(root.value>value)
        {
            root.left=this.DeletNode(root.left,value)
        }
        else{
            if (!root.left && !root.right) {
                return null
            }
            if(!root.left)
            {
                return root.right
            }
            if (!root.right) {
                return root.left
            }
            root.value=this.Min(root.right)
            root.right=this.DeletNode(root.right,root.value)
        }
        return root

    }


}
Min(root)
{

    if(root.left)
    {
     return this.Min(root.left)
    }
    else
    {
        return root.value
    }
}
Max(root)
{

    if(root.right)
    {
     return this.Min(root.right)
    }
    else
    {
        return root.value
    }
}

closestVal(root,target)
{
    let closeVal=root.value
    while (root) {
        if (Math.abs(closeVal-target)>Math.abs(root.value-target)) {
            closeVal=root.value
        }
        if (root.value<target) {
            root=root.right
        }else if(root.value>target)
        {
            root=root.left
        }
        else{
            break
        }
      
    }
    return closeVal
}

CheckIsbst(root)
{
    let arr=[]
   function InOrderCheck(node) {
    if (node) {
        InOrderCheck(node.left)
        arr.push(node.value)
        InOrderCheck(node.right)

    }
     return arr
   } 
const SortedArray=InOrderCheck(root)

for (let i = 0; i <= Math.floor(SortedArray.length/2); i++) {
    if (SortedArray[i]>=SortedArray[SortedArray.length-1]) {
        return false
    }
    
}
return true
}
    
}

const bst=new  BinarySearchTree()
bst.Insert(5)
bst.Insert(3)
bst.Insert(1)
bst.Insert(6)
bst.Insert(4)
bst.Insert(10)
// bst.LeveOrder()
bst.Delete(5)
// bst.Delete(15)
// bst.Delete(7)
// bst.LeveOrder()

// console.log(bst.closestVal(bst.root,12))
bst.InOrder
(bst.root)


