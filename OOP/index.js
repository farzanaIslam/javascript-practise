var rect={
    width:100,
    height:50,
    draw:function(){
        console.log('i ama a function and my height is :'+this.height+'  and my width is: '+this.width)
    }
}
rect.height=150
// rect.draw()
var another={
    height:20,
    width:56,
    print:rect.draw


}
another.print()
