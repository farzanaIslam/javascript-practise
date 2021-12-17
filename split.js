// var str='hct|cpc islam'
// var change=str.split('').map(i=>i===' '?i.charCodeAt(0):i.charCodeAt(0)-2)
// var result=String.fromCharCode(...change)
// console.log(result)
function createCount(){
    let count=0;
    return ++count
    // return function(){
    //     return ++count

    // }
}
const counter1=createCount()
console.log(counter1)

setTimeout((createCount) => {
    
}, 5000);