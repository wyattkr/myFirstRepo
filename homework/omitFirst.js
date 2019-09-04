function omitFirst(string){
    // want to omit first letter
return string.substring(1)

}


// Invoke the function

function twoWords(string1,string2){
    return omitFirst(string1) + omitFirst(string2)
    
} 
console.log(twoWords("Happy","Day")) 
