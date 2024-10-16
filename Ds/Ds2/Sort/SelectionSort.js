let arr=[2,-2,45,23,2,12]
for (let i = 0; i < arr.length; i++) {
    let min=i
    for (let j = i+1; j < arr.length; j++) {
        if(arr[j]<arr[min])
        {
            min=j
        }
        
    }
    if (min !==i) {
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp

    }
    
}

console.log("Sorted Array",arr)