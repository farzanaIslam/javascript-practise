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

//3)  A function can be stored in A object
obj={
    sum:add
}
console.log(obj.sum( 3,3))
// 4) we can create function as need
setTimeout(function(){
    console.log( " iam created my own choice.......")
},500)


