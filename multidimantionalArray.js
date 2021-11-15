var arr=[ [1,2,4,6,], [4,6,9,0], [22,33,44,55] ] ;
for( var i=0;i<arr.length;i++){
    for (let j = 0; j < arr[i].length; j++) {
        if(arr[i][j]%2==0){
            console.log("even number: "+arr[i][j]);
        }
      
        
    }
    
}
