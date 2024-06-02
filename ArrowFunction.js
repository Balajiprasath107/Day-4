//Print odd numbers in an array

//arrow function

var arr = [1,2,5,8,3]
var oddArr = ()=>{ 
  for(var i of arr){
    if (i%2!=0)    
      console.log(i)}
}
oddArr()

//Convert all the strings to title caps in a string array

//anonymous function
var arr = ["dog","bag","pup"];
var Arr = ()=>{ 
  for(var i in arr){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
  }
  return (arr)
}
Arr()


//Sum of all numbers in an array

//anonymous function

var arr = [1,2,5,8,3]
var sumArr = ()=>{ 
  var sum =0
  for(var i of arr){
    sum+=i
  }
  return (sum)
}
sumArr()

//Return all the prime numbers in an array
//anonymous function

var arr = [1,2,5,8,3]
var primeArr = ()=>{ 
  for(var i of arr){
    flag = 0
    if(i<2)
      continue;
    for(var j =2;j<Math.sqrt(i);j++){  
    if (i%j===0)   
      flag+=1;break;
      }
    if(flag===0)
      console.log(i)
  }
}
primeArr()


//Return all the palindromes in an array

//anonymous function
var arr = ["dog","bag","pup","SOS"];
var palind = ()=>
{ 
  for(var i in arr)
  {
    var str = arr[i],end = arr[i].length-1,flag =0
    for(var index = 0; index<str.length/2; index++)
      {
        if(str[index]!=str[end])
           {
          flag+=1;break;
           }
        end-=1;
      }
  if(flag===0)
  console.log(arr[i])
  }  
}
palind()


//Return median of two sorted arrays of the same size.

//anonymous function
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var med = ()=>
      {ar1.push(...ar2)
      ar1.sort((a,b)=>a-b)
      var leng = ar1.length
      return( (ar1[(leng/2)-1]+ar1[leng/2])/2)
}
med()


//Remove duplicates from an array
//anonymous function
var ar1 = [1, 12, 15, 26,12,1,38];
var uniqy = ()=>{
     return[... new Set(ar1)]
}
uniqy()  

//Rotate an array by k times
//anonymous function
var ar1 = [1, 12, 15, 26,38],k=3;
var rotate= ()=>
{
ar1.unshift(...(ar1.splice(-k)))
return ar1
}
rotate()
