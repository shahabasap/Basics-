// Reverse of a string-----------------------

function ReverseString(str,len)
{
    if (len<=0) {
        return str[len]
    }
    
    return str[len] + ReverseString(str,len-1)

}
let str="Anu"
console.log(ReverseString(str,str.length-1))


// Fibonocci of a number---------------

function Fibonocci(num) {
if (num<2) {
    return num
    
}
    return Fibonocci(num-1) + Fibonocci(num-2)
}

// console.log("fibonacci of 2",Fibonocci(7));

// Factorial of an number-------------
function Factorial(n) {
   if (n==1) {
    return n
   }
    return n*Factorial(n-1)
    
}
let num=4
// console.log(`Factorial of ${num}`,Factorial(num))


