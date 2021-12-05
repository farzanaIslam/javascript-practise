function basa(furnitures){
    function room(fur){
        return 'lake of furnitures such as........'+furnitures+'     really!!!! now i need    ......'+fur

    }
    return room
}

var arr=['bed','almira','fridge','sofa']
var result=basa(arr)
console.log(result)
var result2=result('sofa')

console.log(result2)