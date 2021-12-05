var arr=[2,200,11,4,33,6,7,32,66,39,29,79]
// var sum=arr.reduce(function(pre,curr){
//     return Math.max(pre,curr)
// })
// console.log(sum)
function myReduce(arr,cb,acc){
    for(var i=0;i<arr.length;i++){
        acc=cb(acc,arr[i]);
    }
    return acc
}
var result=myReduce(arr,function(pre,curr){
    return pre+curr

},0)
var max=myReduce(arr,function(pre,curr){
    return Math.max(pre,curr)

},arr[0])
var min=myReduce(arr,function(pre,curr){
    return Math.min(pre,curr)

},arr[0])
console.log(result,min, max)
