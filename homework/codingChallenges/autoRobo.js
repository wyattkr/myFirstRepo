function autoRobo(someSpeed){
    if(someSpeed <=80 && someSpeed >=50){
        console.log("You get a ticket")
    }
     else if(someSpeed<80){
         console.log(" You get a discount")
     }
     else{
         console.log("You are doing a great job")
     }
    }

    autoRobo(90)
    autoRobo(25)
    autoRobo(65)
