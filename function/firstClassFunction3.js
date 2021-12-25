function add(a,b){
    return a+b
}
var obj={
    // we can store any function as a property such as sum:add

    sum:add  
}
console.log(obj.sum(5,5))