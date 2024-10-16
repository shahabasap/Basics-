let arr=[2,-2,45,23,12]

function Quicksort(arr) {
    if (arr.length<=1) {
        return arr
        
    }
    let pivot=arr[0]
    let left =[]
    let right=[]
    for (let i = 1; i < arr.length; i++) {
       if (arr[i]<pivot) {

       left.push(arr[i])
        
       } else {

        right.push(arr[i])

       }
        
    }
    return [...Quicksort(left),pivot,...Quicksort(right)]
}

console.log("Sorting",Quicksort(arr))