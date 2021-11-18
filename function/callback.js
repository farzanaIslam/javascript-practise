// 
function sample(a,b,fun){
    var c= a+b
    var d= a-b
    fun(c,d)

}
sample(5,8,function(c,d)
{
    console.log(c+d);
})
sample(5,8,function(c,d)
{
    console.log(c-d);
})

sample(5,8,function(c,d)
{
    console.log(c*d);

})
sample(5,8,function(c,d)
{
    console.log(c/d);
})