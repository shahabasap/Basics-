class Tree{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
    }
}
    
 function IsIdetical(tree1,tree2)
    {
        if(!tree1 && !tree2)
        {
            return true
        }
        if(!tree1 && !tree2)
        {
            return false
        }
        if(tree1.value!=tree2.value)
        {
            return false
        }
        
    return IsIdetical(tree1.left,tree2.left) && IsIdetical(tree1.right,tree2.right)
    }


// const tree=new Tree()
const tree2=new Tree(1)
tree2.left=new Tree(2)
tree2.right=new Tree(3)

const tree1=new Tree(1)
tree1.left=new Tree(2)
tree1.right=new Tree(3)

console.log(IsIdetical(tree1,tree2))