// Try Catch Basics
//Reference Error
const error = document.getElementById("error");
try{
    console.log("Try to access undefined variable");
    console.log(notDefined);
}
catch(err){
    console.log("Error caught",err.name,'-',err.message);
    // error.innerHTML="Try to access undefined variable";
    error.textContent="Try to access undefined variable";
}
console.log("Program execution continues");

//JSON Parsing error
let jsonText = "{josn}";
try{
    let data = JSON.parse(jsonText);
    console.log(data);
}
catch(err){
    console.log("JSON parse error",err.message);
}
//Type Error
try{
    let num = 10;
    num();
}
catch(err){
    console.log("Caught error:",err.name);
}