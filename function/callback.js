// 
function sample(a,b,fun){
    var c= a+b
    var d= a-b
 var result=   fun(c,d)
 return result;

}
function sum(a,b)
{
    return a+b;
}

var result=sample(5,8,sum)
console.log(result);
sample(5,8,function(x,y)
{
     console.log(x+y);
})
sample(5,8,function(c,d)
{
    // console.log(c-d);
})

sample(5,8,function(c,d)
{
    console.log(c*d);

})
sample(5,8,function(c,d)
{
    console.log(c/d);
})