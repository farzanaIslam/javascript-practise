// function add(n)
// {
    
//     if(n==1){
//         return 1
//     }
    
   
//     return  n+ add(n-1)
// }
// console.log(add(5))

// function print(n){
//     if(n==0){
//         return 1
//     }
//    return n*print(n-1)
    
// }
// console.log(print(5))


// function summation(n,m){
//     if(n>m){
//         return 0
//     }
//    return n+ summation(n+1,m)
// }
// console.log(summation(2,5))


// function gcd(a,b){
//     if(a%b==0)
//     {
//         return b
//     }
//    return gcd(b,a%b)
// }
// console.log(gcd(36,7))

// function pow(b,p){
//     if(p==0){
//         return 1
//     }
//    return b*pow(b,p-1)
// }
// console.log(pow(3
//     ,4))

function suma(n){
    console.log(n)
    if(n==0){
        return 0
    }
    var rem=n%10
    console.log(rem)
    var res=suma(n/10)
    console.log(res)

    return rem + res
}
console.log(suma(12))