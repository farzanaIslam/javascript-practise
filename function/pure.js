//  ==========          pure         function    =============

function sqr(n){
    return n*n
}
var result=sqr(2)
console.log(result);

//  ==========       not    pure         function  because change the value of n   =============
var n=5
function unPure(){
    n=66
    return n
}
var result=unPure(n)
console.log(result)
//============================ example of not a pure function with object===================
 var value={
     x:10,
     y:5
 }
 function obj(value){
     value.x=12;
     value.y=34;
    //  console.log(value)
 }
 console.log(value)
 
 obj(value)
 console.log(value)
