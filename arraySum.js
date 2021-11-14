var arr=[11,22,33,44,55,12,13,56,66];
sum=0;
// for(var i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//           console.log(arr[i]);
//           sum=sum+arr[i];
//     }
//     // 
// }

for(var i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
          console.log(arr[i]);
          sum=sum+arr[i];
    }
    // 
}
 console.log(sum);