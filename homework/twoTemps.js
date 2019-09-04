function icyhot(temp1,temp2){

if(temp1<0 && temp2>100||temp1>100 && temp2<0){
console.log("true");
}
else{
    console.log("False");

}
}
icyhot(120,-1);
icyhot(-1,120);
icyhot(2,120);
