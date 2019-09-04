function blackjack(num1,num2){
    if(num1<0 && num2>21||num1>21 && num2<0){
        console.log("true")
    }
    else{
        console.log("false");
    }
}
blackjack(19,21)
blackjack(21,19)
blackjack(19,22)