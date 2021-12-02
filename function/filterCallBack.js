var number=[1,2,3,4,5,6,7,8,9,10]
 var sum=0
var newData=number.filter(function(value){
   return value<5

})
var result=newData
console.log(result)



//  var EvenNumber=number.filter(function(value){
//     return value%2==0
// })
// console.log(EvenNumber)
// function EvenNumber(arr,cb){
//      var newArr=[]
//     for(var i=0;i<arr.length;i++){
//         console.log('hi')
//     if(cb(arr[i],i,arr)){
        
//          newArr.push(arr[i]) 
//         }
//     }
//     return newArr
// }
// // var result=EvenNumber(number)
// // console.log(result)

// var result=EvenNumber(number,function(value){
//    return value %2 ==0
// })
// console.log(result)
