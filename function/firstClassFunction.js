// firstclass function
function add(a,b){
    return a+b;
}
// 1) A function can be stored in a variable
var sum=add
console.log(sum(3,4))

// 2) A function can be stored in Array
var arr=[]
arr.push(add)
console.log(arr[0](5,5))

