var arr=[1,2,3,4,5,6,7,8,9];
// last index we insert data that time we use push
arr.push(10)
console.log(arr);
// first index we insert data that time we use unshift

arr.unshift(0);
console.log(arr);
// any index we insert data that time we use splice
arr.splice(5,0,60,70)
console.log(arr)

// any index we delete and update data that time we use splice
arr.splice(5,3,0,0,0)
console.log(arr)

// any index we delete  data that time we use splice
arr.splice(5,3)
console.log(arr)
arr.splice(5,0,5)
console.log(arr)
