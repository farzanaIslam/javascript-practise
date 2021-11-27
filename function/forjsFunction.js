var number=[1,100,2,200,3,33,22,12,55];
function over30(num){
    return num>30;
}
var result=number.find(over30)
console.log(result)