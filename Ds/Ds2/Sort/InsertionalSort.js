let arr=[2,-2,45,23,12]
for (let i = 1; i < arr.length; i++) {
    let insertingElem=arr[i]
     j=i-1
    while (j>=0 && arr[j]>insertingElem) {
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=insertingElem
    
}

console.log(arr)