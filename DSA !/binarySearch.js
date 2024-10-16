// let arr1=[1,2,3,4,5,6,7]

let arr1=['a','b','c','d','e']

// function BinarySearch(arr1,target) {

//     let end=arr1.length-1
//     let start=0

//     while (start<=end) {
//       let mid=Math.floor((start+end)/2)

//       if (arr1[mid]==target) {
//         return mid
//       } else if(arr1[mid]>target) {
//         end=mid-1

//       }
//       else{
//         start=mid+1
        
//       }
      
//     }
    

//   return -1
  
// }
// console.log("first test",BinarySearch(arr1,'c'));
// console.log("Second test",BinarySearch(arr1,'j'));


// --------------------------------------------------------------------Binary Search using Recursion---------------------------------------------------------------------------------
function RecursiveBinarysearch(arr, target){
  
    return Search(arr,target,0,arr.length-1)
    
  }


  function Search(arr,target,start,end) {


    if (start<=end) {
      let Mid=Math.floor((start+end)/2)
      if(arr[Mid]==target)
    {
      return Mid
    }else if(arr[Mid]>target)
    {
      end=Mid-1
      return Search(arr,target,start,end)
    }else if(arr[Mid]<target){
      start=Mid+1
      return Search(arr,target,start,end)
    }
    }
    else{
      return -1
    }
    

  }
 
  
  
  console.log(RecursiveBinarysearch([1,2,3,4,50],10))