function rev(str) {
  if(str.length==1)
    {
      return str
    }
    return str.slice(-1)+ rev(str.slice(0,-1))
}


let str2="hello world"
let str3=str2.split(' ')
let senten=''
 for (let i = 0; i < str3.length; i++) {
  senten +=rev(str3[i])+' '

  
 }

  console.log(senten);