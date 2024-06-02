//Print odd numbers in an array

//anonymous function

var arr = [1,2,5,8,3]
var oddArr = function(){ 
  for(var i of arr){
    if (i%2!=0)    
      console.log(i)}
}
oddArr()

//IIFE
var arr = [1,2,5,8,3];
(function(){ 
  for(var i of arr){
    if (i%2!=0)    
      console.log(i)}
})()

//Convert all the strings to title caps in a string array

//anonymous function

var arr = ["dog","bag","pup"];
var Arr = function(){ 
  for(var i in arr){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
  }
  return(arr)
}
Arr()

//IIFE
var arr = ["dog","bag","pup"];
(function(){ 
  for(var i in arr){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
  }
  return(arr)
})()


//Sum of all numbers in an array

//anonymous function

var arr = [1,2,5,8,3]
var sumArr = function(){ 
  var sum =0
  for(var i of arr){
    sum+=i
  }
  return(sum)
}
sumArr()

//IIFE
var arr = [1,2,5,8,3];
(function(){ 
  sum = 0
  for(var i of arr){
    sum+=i
  }
  return(sum)
})()

//Return all the prime numbers in an array
//anonymous function

var arr = [1,2,5,8,3]
var primeArr = function(){ 
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

//IIFE
var arr = [1,2,5,8,3];
(function(){ 
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
})()

//Return all the palindromes in an array

//anonymous function
var arr = ["dog","bag","pup","SOS"];
var palind = function()
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


//IIFE
var arr = ["dog","bag","pup","SOS"];
(function()
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
})()

//Return median of two sorted arrays of the same size.

//anonymous function
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var med = function()
      {ar1.push(...ar2)
      ar1.sort((a,b)=>a-b)
      var leng = ar1.length
      return( (ar1[(leng/2)-1]+ar1[leng/2])/2)
}
med()

//IIFE

var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
(function()
      {ar1.push(...ar2)
      ar1.sort((a,b)=>a-b)
      var leng = ar1.length
      return( (ar1[(leng/2)-1]+ar1[leng/2])/2)
})()

//Remove duplicates from an array
//anonymous function
var ar1 = [1, 12, 15, 26,12,1,38];
var uniqy = function(){
     return[... new Set(ar1)]
}
uniqy()
  
//IIFE
var ar1 = [1, 12, 15, 26,12,1,38];
(function(){
     return[... new Set(ar1)]
})()

//Rotate an array by k times
//anonymous function
var ar1 = [1, 12, 15, 26,38],k=3;
var rotate=function()
{
ar1.unshift(...(ar1.splice(-k)))
return ar1
}
rotate()
//IIFE
var ar1 = [1, 12, 15, 26,38],k=3;
(function()
{
ar1.unshift(...(ar1.splice(-k)))
return ar1
})()
