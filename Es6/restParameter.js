// rest parameter er kaj holo array akare value receive kore
function add (...number){
 var sum =0
 for (let i of number) {
     sum+=i
     
 }
 console.log(sum
    )
}
add(1,2,3,4,5,6,7,8,9,10);