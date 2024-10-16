function Reverse(str,len) {

  if (len<0) {
    return ` \n The above value is the reverse of ${str}`
  }
  return str[len] +Reverse(str,len-1)

}

console.log(Reverse("shahabas",7))
console.log(Reverse("Nithin",5))