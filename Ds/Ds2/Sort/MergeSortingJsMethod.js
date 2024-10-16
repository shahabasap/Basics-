let arr=[21,-2,45,1,3]
function Partition(arr)
{
    if(arr.length<=1)
    {
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let rigth=arr.slice(mid)
    return Sort(Partition(left),Partition(rigth))
}

function Sort(left,right)
{
    let arrNew=[]
    while(left.length && right.length)
    {
        if(left[0]<right[0])
        {
            arrNew.push(left.shift())
        }
        else
        {
            arrNew.push(right.shift())
        }
    }
    
    return[...arrNew,...left,...right]
}

console.log(Partition(arr))