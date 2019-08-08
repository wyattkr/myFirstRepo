var text ="";
var i = 0;
do {
    text += "the number is" +i;
    i++;
}
while (i>10)
console.log(text);

//Do-while loop

var text = "";
var i=0;
do{
    text += "The number is" +i;
    i++;
}
while (i<10);
    console.log(text)

    //For-loop below

for (i = 0;i<10;i++){
    text += "The number is" + i;
}
console.log(text)

//Nested loops

var text="";
for(i=0;i<3;i++)
{
for(j = 0;j<2;j++)
{
text +="The number is"+j;

text +="The number is"+i;   
}
}
console.log(text)

//For loop while omitting the initialization.

var text="";
var i=0;
for(;i<5;i++)
{
text +="The number is" +i;
}
console.log(text)

// For loop while omitting the incrementing portion

var text="";
var i=0;
for(;i<5;)
{
text +="The number is" +i;
i++;
}
console.log(text)


//How to use for/in loop

var chapters={1:"Loops", 2:"Decision",3:"Arrays"};

var text="";
var i;
for(i in chapters){
text +=chapters[i];
}
console.log(text)


//How to use nested loops.

var text ="";

for(i=0;i<3;i++)
{
text=text+"The value is"+i;
text=text;
var j=0;
    while(j<2)
    {
    text+text+"The value is"+j;
       text=text;
            j++;

    }
}
console.log(text)



// 




    
    


    
