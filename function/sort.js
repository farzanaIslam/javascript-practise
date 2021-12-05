var arr=[2,5,-1,5,7,33,11,22,-8,-3]
var person=[
    {
        name:'farzana',
        age:31
    },
    {
        name:'mahfuj',
        age:23
    },
    {
        name:'mahmud',
        age:25
    },
    {
        name:'kamrul',
        age:34
    },
]
// console.log(arr.sort())
var result=arr.sort((a,b)=>{return a-b})
console.log(result)

var result1=person.sort((a,b)=>{return a.age-b.age})
console.log(result1)