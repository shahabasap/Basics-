let arr1=[1,2,3,4,5,6,7]

function LinearSearch(arr1,target) {

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i]===target) {
            console.log("condition is checking")

            return i
            
        } 
        
    }

    return -1
    
}
console.log("first test",LinearSearch(arr1,3));