let arr=[2,2,3,3,4,4,4,1]
let empt={}
let flag=0
for (let i = 0; i < arr.length; i++) {
    flag=0
    for (n in empt){
        if (arr[i]==n) {
            flag=1
        }
    }
    if(flag==1){
        empt[arr[i]]+=1
    }
    else{
        empt[arr[i]]=1
    }
}

let num=Object.keys(empt)
let obj=Object.values(empt)
console.log("Num",num ,"&&", "Obj",obj);