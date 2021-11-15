var arr =[1,22,4,55,6,78,40,99,];
var find=4;
var flag=false
for(var i =0;i<arr.length;i++){
    if(arr[i]==find){
        console.log("item is found" +i);
        flag = true
        break
    }
    
}
console.log(flag)
if(!flag){
    console.log("Item not found in index"+ i);
}