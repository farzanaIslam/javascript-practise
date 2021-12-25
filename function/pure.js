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
