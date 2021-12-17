var rect={
    width:100,
    height:50,
    draw:function(){
        console.log('i ama a function and my height is :'+this.height+'  and my width is: '+this.width)
    }
}
rect.height=150
// rect.draw()

var factory=function(h,w){
    return{
        height:h,
        width:w,
        product:this.print,
        print:function(){
            console.log('hello this is printing function'+this.height+' and widght::::'+this.width)
        }
    
    
    }

} 
var res=factory(22,33)
res.print()



