
function sorting(arr,lb,ub) {
    let peviot=arr[lb]
    let start=lb
    let end=ub

while (start<end) {
    while (arr[start] <= peviot) {
        start++
    }
    while (arr[end]>peviot) {
        end++
    }
    if (start<end) {
        let temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp
    }
    
}
if (start>end) {
    let temp2=arr[lb]
    arr[lb]=a[end]
    arr[end]=temp2
}

return end
    
    
}
let arr=[3,14,11,4,20]
console.log(sorting(arr,0,arr.length))

