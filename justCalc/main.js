

function dotthemulti() {
    var x = document.getElementById("usernum1").Value;
    var y = document.getElementById("usernum2").Value;
    var z = x * y; 
    document.getElementById("demo3").innerHtml = z
}


function dothesubt(){
    var x = document.getElementById("num1").Value;
    var y = document.getElementById("num2").Value;
    var z = x - y; 
    document.getElementById("demo3").innerHtml = z
}   


function dotheadd() {
    var x = document.getElementById("num1").Value;
    var y = document.getElementById("num2").Value;
    var z = x + y;
    var add= x + y;
    document.getElementById("demo3").innerHtml = z  
}


function dothediv() {
    var x = document.getElementById("num1").Value;
    var y = document.getElementById("num2").Value;
    var z = x / y; 
    document.getElementById("demo3").innerHtml = z  
} 



