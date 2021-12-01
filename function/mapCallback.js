var arr =[1,2,3]
// var squar=arr.map(function(value){

//     return value*value;
// })
// var result=squar
// console.log(result)
function map(value,cb){
   var newArr=[]
    for(var i =0;i<value.length;i++)
    {
       var temp=cb(value[i],i,value)
       newArr.push(temp)
    }
    return newArr
}
var result=map(arr ,function(x){
    return x*x*x
})
console.log(result)
