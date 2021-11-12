    var morning=true;
    var date=new Date();
    var rand=date.getHours();
    console.log(rand);

    while(morning)
    {   
     // var rand =Math.floor(Math.random()*10+1);
    if(rand==10)
    {
        console.log("Its Breakfast Time End");
        morning=false;
    }
    else{
        console.log(rand +"   Its Breakfast Time ");
        morning=false;
    }


    }