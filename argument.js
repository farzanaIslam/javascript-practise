function fName(a,b,c){
    var sum=0;
    for(var i =0;i<arguments.length;i++){

    sum +=arguments[i];

    }
    return sum
}
var result=fName(1,3,6)
console.log(result)
