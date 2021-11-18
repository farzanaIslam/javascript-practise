// function add(a,b){
//     return a+b;

// }
// function manipulate(a,b,func){
//     var c=a+b
//     var d=a-b
//    return function(){
//         var m=func(a,b)
//         return m*c*d
//     }


// }
// var x=manipulate(3,4,add)
// console.log(x())
function add(a,b){
    return a+b;
}

function manipulate(a,b,func){
    var c =a+b;
    var d= a-b;

   return function (){
        var m=func(a,b);
        return m*c*d;
    }
    
}
var x=manipulate(5,5,add)
console.log(x())