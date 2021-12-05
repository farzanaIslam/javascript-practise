// function basa(furnitures){
//     function room(fur){
//         return 'lake of furnitures such as........'+furnitures+'     really!!!! now i need    ......'+fur

//     }
//     return room
// }

// var arr=['bed','almira','fridge','sofa']
// var result=basa(arr)
// console.log(result)
// var result2=result('sofa')

// console.log(result2)

function base(b){
    return (p)=> {
        var result=1
        for(var i=0;i<b;i++){
            result*=p
        }
        return result

    }
}
var base10=base(8)
var paw=base10(8)
console.log(paw)