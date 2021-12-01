const classTen={
    classTeacher:'Mr x',
    students:50,
    goodAt:{
        science:13,
        math:40,
        English:20
    }

}
const{classTeacher,student,goodAt:{science,math,English}}=classTen
console.log(classTeacher,math)


function individualNumber(parameters){
    const{math,english}=parameters
    return [math+english,math-english,math*english,math/english ]

}
const result=individualNumber({math:49,english:60})
const[sum,sub,mul,div]=result
console.log(mul)