var add=function(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++)
    {
     sum+=arr[i];
    }
    return sum;
}
var arr=[1,2,4,3,5,6,7,8,9,10]
// add(arr)
console.log(add(arr))