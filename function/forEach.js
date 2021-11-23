var arr=[1,2,3,4,5]
// var sum=0;
// arr.forEach(element=>{
//     sum+=element
// })
// console.log(sum)
function forEach(arr,cbf){
    for(var i=0;i < arr.length;i++){
       // console.log(arr[i])
        cbf(arr[i],i,arr)
        // console.log(result)
        // return result;

    }
}

forEach(arr,function(value,index,arr){
    console.log(value,index,arr)
})



forEach(arr,function(value,index,arr)
{
    arr[index]=value+5;
   
})
 console.log(arr);