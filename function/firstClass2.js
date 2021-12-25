// a function stored in array
function add(a,b){
    return a+b;
}
var arr=[];
arr.push(add);
console.log(arr[0](4,6))
