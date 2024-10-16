let str="Rahul Ranjan"
let stack=[]
let Rev=""

for(let i=0;i<str.length;i++)
{
    stack.push(str[i])
   if(str[i]==' ' || i==str.length-1)
   {
       Rev +=" "
       while(stack.length>0)
{
    Rev += stack.pop()
}
 
   }
}
console.log(Rev)
