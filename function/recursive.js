// function add(n)
// {
    
//     if(n==1){
//         return 1
//     }
    
   
//     return  n+ add(n-1)
// }
// console.log(add(5))

function print(n){
    if(n==0){
        return 1
    }
   return n*print(n-1)
    
}
console.log(print(5))